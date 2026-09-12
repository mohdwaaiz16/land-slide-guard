import React from 'react';
import { Database, Satellite, Cloud, Map as MapIcon, CheckCircle2 } from 'lucide-react';

export default function SourcesPage() {
  const sources = [
    { name: 'ISRO Bhuvan', type: 'Satellite Imagery & DEM', status: 'Connected', icon: Satellite, desc: 'High-resolution Cartosat Digital Elevation Models (30m) for Sikkim terrain analysis.' },
    { name: 'IMD API', type: 'Weather & Rainfall', status: 'Connected', icon: Cloud, desc: 'Live gridded rainfall data and forecast for North-East region.' },
    { name: 'Cesium Ion', type: '3D Geospatial Engine', status: 'Connected', icon: MapIcon, desc: 'Global 3D terrain streaming and visualization platform.' },
    { name: 'IoT Soil Sensors', type: 'Ground Truth', status: 'Simulated Demo', icon: Database, desc: 'Moisture and tilt sensors placed in Mangan District (Placeholder for demo).' }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
       <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Data Sources & Integrations</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">Live telemetry and APIs powering LandslideGuard AI</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sources.map((source, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-start gap-4 hover:border-blue-200 transition-colors">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-blue-600">
              <source.icon size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900">{source.name}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 ${
                  source.status === 'Connected' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {source.status === 'Connected' && <CheckCircle2 size={10} />}
                  {source.status}
                </span>
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{source.type}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{source.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
