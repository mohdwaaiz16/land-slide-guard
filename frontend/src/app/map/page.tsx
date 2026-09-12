import React from 'react';
import CesiumMapWrapper from '@/components/map/CesiumMapWrapper';
import { Layers, Maximize, MapPin, Database } from 'lucide-react';

export default function MapPage() {
  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 w-80">
        <h1 className="text-lg font-bold text-gray-900 mb-1">Sikkim 3D Risk Map</h1>
        <p className="text-xs text-gray-500 mb-4">High-resolution geospatial intelligence</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-bold text-gray-700 uppercase mb-2 flex items-center gap-2">
              <Layers size={14} /> Active Layers
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-blue-600 rounded" />
                Landslide Probability Heatmap
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-blue-600 rounded" />
                Topographic Relief
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer">
                <input type="checkbox" className="accent-blue-600 rounded" />
                Live Weather Radar
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-blue-600 rounded" />
                Critical Infrastructure (Roads/Bridges)
              </label>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-xs font-bold text-gray-700 uppercase mb-2 flex items-center gap-2">
              <MapPin size={14} /> Focus Areas
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="px-3 py-1.5 text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-left">
                Mangan District
              </button>
              <button className="px-3 py-1.5 text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-left">
                Gangtok
              </button>
              <button className="px-3 py-1.5 text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-left">
                Namchi
              </button>
              <button className="px-3 py-1.5 text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-left">
                Gyalshing
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-xs font-bold text-gray-700 uppercase mb-2 flex items-center gap-2">
              <Database size={14} /> Data Source
            </h3>
            <p className="text-[10px] text-gray-500 font-medium">ISRO Bhuvan CartoDEM (30m) & IMD Gridded Rainfall Data</p>
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-blue-600 hover:bg-white transition-all">
          <Maximize size={18} />
        </button>
      </div>

      <div className="flex-1 w-full h-full relative">
        <CesiumMapWrapper />
      </div>
    </div>
  );
}
