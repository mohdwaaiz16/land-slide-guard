'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, CloudRain, Droplets, Zap } from 'lucide-react';

export default function SimulatorPage() {
  const [rainfall, setRainfall] = useState(50);
  const [moisture, setMoisture] = useState(60);

  // Simple mock formula for simulator
  const riskScore = Math.min(100, Math.round((rainfall * 0.6) + (moisture * 0.4)));

  return (
    <div className="p-6 max-w-4xl mx-auto h-full overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
          <Zap className="text-yellow-500" /> Scenario Simulator
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">Predict risk outcomes based on hypothetical extreme weather events in Sikkim</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <CloudRain size={16} className="text-blue-500" /> Simulated Rainfall (24hr)
                </label>
                <span className="text-lg font-black text-blue-600">{rainfall} mm</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="300" 
                value={rainfall}
                onChange={(e) => setRainfall(Number(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold">
                <span>0 mm</span>
                <span>Extreme (300mm+)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Droplets size={16} className="text-emerald-500" /> Soil Moisture Saturation
                </label>
                <span className="text-lg font-black text-emerald-600">{moisture} %</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={moisture}
                onChange={(e) => setMoisture(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold">
                <span>Dry (0%)</span>
                <span>Fully Saturated (100%)</span>
              </div>
            </div>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <SlidersHorizontal size={18} /> Reset to Current Live Data
            </button>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 p-8">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Predicted Landslide Risk</h3>
            <div className={`text-7xl font-black mb-4 transition-colors duration-300 ${
              riskScore > 80 ? 'text-red-600' : riskScore > 50 ? 'text-orange-500' : 'text-green-500'
            }`}>
              {riskScore}%
            </div>
            
            <div className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${
              riskScore > 80 ? 'bg-red-100 text-red-800' : riskScore > 50 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
            }`}>
              {riskScore > 80 ? 'CRITICAL DANGER' : riskScore > 50 ? 'HIGH RISK' : 'SAFE / NORMAL'}
            </div>

            <p className="text-center text-sm text-gray-500 mt-6 font-medium max-w-xs">
              Based on the simulated parameters, Mangan District would likely experience {
                riskScore > 80 ? 'severe slope failures and immediate road blockages.' : 
                riskScore > 50 ? 'localized mudslides and minor disruptions.' : 
                'no significant geological events.'
              }
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
