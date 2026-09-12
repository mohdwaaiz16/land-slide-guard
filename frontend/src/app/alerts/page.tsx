import React from 'react';
import { AlertTriangle, Clock, MapPin, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function AlertsPage() {
  const alerts = [
    {
      id: "ALT-8921",
      level: "CRITICAL",
      location: "Mangan District - NH310A",
      probability: "94%",
      time: "10 mins ago",
      description: "Severe slope instability detected along North Sikkim Highway due to continuous heavy rainfall (120mm/24hr). High risk of immediate rockfall.",
      impact: "3 Villages, 1 Major Highway",
      status: "ACTIVE"
    },
    {
      id: "ALT-8920",
      level: "HIGH",
      location: "Gangtok - Bypass Road",
      probability: "78%",
      time: "2 hours ago",
      description: "Soil moisture saturation exceeded critical threshold (85%). Moderate risk of debris flow in the next 12 hours.",
      impact: "Residential Area",
      status: "ACTIVE"
    },
    {
      id: "ALT-8919",
      level: "WARNING",
      location: "Namchi - Damthang",
      probability: "55%",
      time: "5 hours ago",
      description: "Minor tension cracks observed in drone survey imagery. Monitoring slope movement via satellite InSAR.",
      impact: "Local Roads",
      status: "MONITORING"
    },
    {
      id: "ALT-8915",
      level: "RESOLVED",
      location: "Gyalshing - Pelling",
      probability: "15%",
      time: "1 day ago",
      description: "Rainfall subsided. Soil moisture levels returning to normal. Preventive clearance complete.",
      impact: "None",
      status: "RESOLVED"
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Active Alerts</h1>
          <p className="text-sm text-gray-500 mt-1 font-medium">Real-time risk warnings for Sikkim region</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors">
          Export Alert Log
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 flex items-center gap-4">
          <div className="bg-red-100 text-red-600 p-3 rounded-full"><ShieldAlert size={24} /></div>
          <div>
            <div className="text-3xl font-black text-red-700">1</div>
            <div className="text-xs font-bold text-red-900/60 uppercase tracking-wider">Critical Alerts</div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 flex items-center gap-4">
          <div className="bg-orange-100 text-orange-600 p-3 rounded-full"><AlertTriangle size={24} /></div>
          <div>
            <div className="text-3xl font-black text-orange-700">1</div>
            <div className="text-xs font-bold text-orange-900/60 uppercase tracking-wider">High Risk Zones</div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-5 flex items-center gap-4">
          <div className="bg-green-100 text-green-600 p-3 rounded-full"><CheckCircle2 size={24} /></div>
          <div>
            <div className="text-3xl font-black text-green-700">14</div>
            <div className="text-xs font-bold text-green-900/60 uppercase tracking-wider">Cleared / Resolved</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                <th className="p-4">Level</th>
                <th className="p-4">Location</th>
                <th className="p-4">Risk %</th>
                <th className="p-4">Time</th>
                <th className="p-4 w-1/3">Description</th>
                <th className="p-4">Impact</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {alerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold
                      ${alert.level === 'CRITICAL' ? 'bg-red-100 text-red-800' : 
                        alert.level === 'HIGH' ? 'bg-orange-100 text-orange-800' : 
                        alert.level === 'WARNING' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {alert.level}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-gray-900 flex items-center gap-2">
                    <MapPin size={14} className="text-gray-400" /> {alert.location}
                  </td>
                  <td className="p-4 font-black text-gray-700">{alert.probability}</td>
                  <td className="p-4 text-gray-500 flex items-center gap-1.5 text-xs font-medium">
                    <Clock size={12} /> {alert.time}
                  </td>
                  <td className="p-4 text-gray-600 leading-snug">{alert.description}</td>
                  <td className="p-4 font-medium text-gray-800">{alert.impact}</td>
                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-bold text-xs inline-flex items-center gap-1">
                      Details <ArrowRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
