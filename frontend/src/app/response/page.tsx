import React from 'react';
import { Truck, Users, Shield, Plus, ShieldCheck, MapPin } from 'lucide-react';

export default function ResponsePage() {
  const teams = [
    { name: 'NDRF Battalion 2', type: 'Search & Rescue', location: 'Mangan Base Camp', status: 'DEPLOYED', eta: 'On Site' },
    { name: 'SDRF Quick Response', type: 'Medical / Evacuation', location: 'Gangtok HQ', status: 'STANDBY', eta: '45 mins' },
    { name: 'Army Engineering Task Force', type: 'Road Clearance', location: 'Chungthang', status: 'IN TRANSIT', eta: '120 mins' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Emergency Response</h1>
          <p className="text-sm text-gray-500 mt-1 font-medium">Tactical deployment and resource tracking across Sikkim</p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors flex items-center gap-2">
          <Plus size={16} /> Request Backup
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-900 text-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-blue-200"><Users size={16} /> Total Personnel</div>
          <div className="text-3xl font-black">240</div>
        </div>
        <div className="bg-blue-800 text-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-blue-200"><Truck size={16} /> Active Vehicles</div>
          <div className="text-3xl font-black">18</div>
        </div>
        <div className="bg-emerald-700 text-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-emerald-200"><ShieldCheck size={16} /> Safe Zones Cap.</div>
          <div className="text-3xl font-black">1,500</div>
        </div>
        <div className="bg-orange-600 text-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-orange-200"><Shield size={16} /> Evacuations Req.</div>
          <div className="text-3xl font-black">350</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Deployed Units Status</h2>
        <div className="space-y-4">
          {teams.map((team, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className={`p-3 rounded-full ${
                  team.status === 'DEPLOYED' ? 'bg-red-100 text-red-600' : 
                  team.status === 'IN TRANSIT' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  <Shield size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{team.name}</div>
                  <div className="text-xs font-medium text-gray-500">{team.type}</div>
                </div>
              </div>
              <div className="flex items-center gap-8 w-full md:w-auto">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-sm font-semibold text-gray-800 flex items-center gap-1"><MapPin size={14} className="text-blue-500" /> {team.location}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</div>
                  <div className={`text-xs font-bold px-2.5 py-1 rounded-full text-center ${
                    team.status === 'DEPLOYED' ? 'bg-red-100 text-red-800' : 
                    team.status === 'IN TRANSIT' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {team.status}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">ETA</div>
                  <div className="text-sm font-bold text-gray-900">{team.eta}</div>
                </div>
                <button className="text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
