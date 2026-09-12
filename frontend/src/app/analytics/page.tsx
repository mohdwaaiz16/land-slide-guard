import React from 'react';
import { TrendingUp, BarChart3, CloudRain, Droplets } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto h-full overflow-y-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Risk Analytics</h1>
          <p className="text-sm text-gray-500 mt-1 font-medium">Historical trends and AI correlation data for Sikkim</p>
        </div>
        <select className="bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded-lg font-bold text-sm shadow-sm outline-none focus:border-blue-500">
          <option>Past 30 Days</option>
          <option>Past 7 Days</option>
          <option>Past 24 Hours</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-800 flex items-center gap-2"><TrendingUp size={18} className="text-blue-500"/> Risk Probability Trend</h2>
            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded">Sikkim Average</span>
          </div>
          {/* Mock Chart Area using CSS bars */}
          <div className="h-48 flex items-end justify-between gap-2 pt-4 border-b border-l border-gray-100 pb-1 pl-1">
            {[30, 45, 35, 60, 85, 90, 75, 50, 40, 20].map((h, i) => (
              <div key={i} className="w-full relative group flex justify-center">
                <div 
                  className={`w-full rounded-t-sm transition-all duration-500 ${h > 70 ? 'bg-red-500' : h > 40 ? 'bg-orange-400' : 'bg-blue-400'}`} 
                  style={{ height: `${h}%` }}
                ></div>
                <span className="absolute -top-6 opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-gray-800 text-white px-1.5 py-0.5 rounded transition-opacity">
                  {h}%
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400 uppercase">
            <span>Aug 1</span>
            <span>Aug 15</span>
            <span>Aug 30</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-800 flex items-center gap-2"><BarChart3 size={18} className="text-purple-500"/> District Vulnerability Index</h2>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>Mangan District</span>
                <span className="text-red-600">High (0.89)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>Gangtok</span>
                <span className="text-orange-600">Moderate (0.65)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>Namchi</span>
                <span className="text-yellow-600">Low (0.42)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>Gyalshing</span>
                <span className="text-green-600">Safe (0.21)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '21%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
          <CloudRain size={32} className="mx-auto text-blue-500 mb-3" />
          <div className="text-xs font-bold text-blue-900/60 uppercase tracking-wider mb-1">Avg Rainfall (30d)</div>
          <div className="text-2xl font-black text-blue-900">450 mm</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-center">
          <Droplets size={32} className="mx-auto text-emerald-500 mb-3" />
          <div className="text-xs font-bold text-emerald-900/60 uppercase tracking-wider mb-1">Avg Soil Saturation</div>
          <div className="text-2xl font-black text-emerald-900">76%</div>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 text-center">
          <Activity size={32} className="mx-auto text-indigo-500 mb-3" />
          <div className="text-xs font-bold text-indigo-900/60 uppercase tracking-wider mb-1">AI Accuracy Score</div>
          <div className="text-2xl font-black text-indigo-900">94.2%</div>
        </div>
      </div>
    </div>
  );
}
