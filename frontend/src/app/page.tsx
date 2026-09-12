import React from 'react';
import CesiumMapWrapper from '@/components/map/CesiumMapWrapper';
import AIRiskEngine from '@/components/dashboard/AIRiskEngine';
import { CloudRain, AlertTriangle, ArrowUpRight, ShieldAlert, Activity, Navigation2, Thermometer } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full p-4 gap-4">
      {/* KPI Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0">
        <KpiCard title="CRITICAL AREAS" value="12" trend="↑ 3 since yesterday" status="critical" icon={ShieldAlert} />
        <KpiCard title="HIGH RISK ZONES" value="27" trend="↑ 5 since yesterday" status="high" icon={Activity} />
        <KpiCard title="ACTIVE ALERTS" value="8" trend="2 new today" status="warning" icon={AlertTriangle} />
        <KpiCard title="AFFECTED ROADS" value="14" trend="3 newly blocked" status="info" icon={Navigation2} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* Large 3D Map Area */}
        <div className="flex-[3] relative flex flex-col bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/80 rounded-t-xl shrink-0">
            <h2 className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <MapIcon /> 3D DISASTER INTELLIGENCE MAP
            </h2>
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
              <label className="flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-colors"><input type="checkbox" defaultChecked className="accent-primary" /> Landslide Risk</label>
              <label className="flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-colors"><input type="checkbox" defaultChecked className="accent-primary" /> Rainfall</label>
              <label className="flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-colors"><input type="checkbox" className="accent-primary" /> Soil Moisture</label>
              <label className="flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-colors"><input type="checkbox" defaultChecked className="accent-primary" /> Roads</label>
            </div>
          </div>
          <div className="flex-1 relative">
            <CesiumMapWrapper />
          </div>
        </div>

        {/* Right Side Panels */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1 custom-scrollbar">
          
          {/* AI Risk Engine */}
          <AIRiskEngine />

          {/* Weather Panel */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">WEATHER DATA</h3>
            <p className="text-[10px] font-bold text-orange-500 uppercase mb-4 tracking-wider">Demo / API not connected</p>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <CloudRain size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">28°C</div>
                <div className="text-sm font-medium text-blue-600">Heavy Rain</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500 mb-1">Humidity</div>
                <div className="font-semibold text-gray-900">86%</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Rain Prob.</div>
                <div className="font-semibold text-gray-900">82%</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Wind</div>
                <div className="font-semibold text-gray-900">18 km/h</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Visibility</div>
                <div className="font-semibold text-gray-900">6 km</div>
              </div>
            </div>
          </div>

          {/* Active Alert */}
          <div className="bg-red-50 rounded-xl p-5 shadow-sm border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 rounded-bl-full -mr-4 -mt-4 z-0"></div>
            <h3 className="text-xs font-bold text-red-800 uppercase tracking-wider mb-2 relative z-10 flex items-center gap-2">
              <AlertTriangle size={14} /> CRITICAL ALERT
            </h3>
            <div className="relative z-10">
              <div className="text-lg font-bold text-red-900 mb-1">Mangan District</div>
              <div className="text-sm text-red-800 mb-3 font-medium">Landslide probability: 91%</div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/60 text-red-800 text-xs px-2 py-1 rounded font-semibold">3 villages</span>
                <span className="bg-white/60 text-red-800 text-xs px-2 py-1 rounded font-semibold">2 roads</span>
                <span className="bg-white/60 text-red-800 text-xs px-2 py-1 rounded font-semibold">1 bridge</span>
              </div>
              
              <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 rounded-lg transition-colors shadow-sm">
                VIEW ALERT DETAILS
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Subcomponents

function KpiCard({ title, value, trend, status, icon: Icon }: any) {
  const statusColors = {
    critical: 'text-destructive',
    high: 'text-orange-500',
    warning: 'text-primary-foreground', // Lemon yellow text doesn't show well, maybe use orange or standard text
    info: 'text-blue-500'
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xs font-bold text-gray-500 tracking-wider">{title}</h3>
        <div className={`p-1.5 rounded-lg bg-gray-50`}>
          <Icon size={16} className="text-gray-500" />
        </div>
      </div>
      <div>
        <div className="text-3xl font-black text-gray-900">{value}</div>
        <div className="text-xs font-medium text-gray-500 mt-1">{trend}</div>
      </div>
    </div>
  );
}



function MapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
      <line x1="9" y1="3" x2="9" y2="18"></line>
      <line x1="15" y1="6" x2="15" y2="21"></line>
    </svg>
  );
}
