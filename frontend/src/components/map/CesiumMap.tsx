"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

// Configure Cesium static base URL to point to our public folder copy
if (typeof window !== 'undefined') {
  (window as any).CESIUM_BASE_URL = '/cesium';
}

export default function CesiumMap() {
  const cesiumContainer = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Cesium.Viewer | null>(null);
  
  const token = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;

  useEffect(() => {
    // Missing Token State
    if (!token || token === 'YOUR_ACTUAL_CESIUM_ION_TOKEN') {
      return;
    }

    if (!cesiumContainer.current || viewerRef.current) return;

    Cesium.Ion.defaultAccessToken = token;

    const initCesium = async () => {
      try {
        const terrainProvider = await Cesium.createWorldTerrainAsync();
        
        const viewer = new Cesium.Viewer(cesiumContainer.current!, {
          terrainProvider,
          animation: false,
          timeline: false,
          baseLayerPicker: false,
          geocoder: false,
          homeButton: false,
          infoBox: false,
          navigationHelpButton: false,
          sceneModePicker: false,
          fullscreenButton: false,
        });

        // Remove Cesium bottom logo for cleaner UI
        if (viewer.bottomContainer) {
          (viewer.bottomContainer as HTMLElement).style.display = 'none';
        }

        viewerRef.current = viewer;

        // Fly to Sikkim
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(88.6139, 27.5330, 25000),
          orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-45.0),
            roll: 0.0
          },
          duration: 3.0 // Fly over 3 seconds
        });
      } catch (error) {
        console.error("Cesium Viewer initialization error:", error);
      }
    };
    
    initCesium();

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [token]);

  if (!token || token === 'YOUR_ACTUAL_CESIUM_ION_TOKEN') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-b-xl p-8 text-center absolute inset-0 z-10">
        <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">3D Terrain Not Configured</h3>
        <p className="text-gray-500 mb-4 text-sm max-w-md">Add NEXT_PUBLIC_CESIUM_ION_TOKEN to your environment variables.</p>
        <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded font-mono text-xs text-left w-full max-w-md overflow-x-auto">
          NEXT_PUBLIC_CESIUM_ION_TOKEN=your_token_here
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden rounded-b-xl">
      <div ref={cesiumContainer} className="w-full h-full" />
      
      {/* Custom Map Controls Overlay (to be fully implemented later) */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm shadow-md rounded-lg p-1.5 flex flex-col gap-1 border border-gray-200 pointer-events-auto">
          <button className="p-2 hover:bg-gray-100 rounded text-gray-700" title="Zoom In">+</button>
          <div className="h-px bg-gray-200 w-full" />
          <button className="p-2 hover:bg-gray-100 rounded text-gray-700" title="Zoom Out">-</button>
        </div>
        <div className="bg-white/90 backdrop-blur-sm shadow-md rounded-lg p-1.5 flex flex-col gap-1 border border-gray-200 pointer-events-auto">
          <button className="p-2 hover:bg-gray-100 rounded text-gray-700 font-bold" title="Locate Sikkim">S</button>
        </div>
      </div>
    </div>
  );
}
