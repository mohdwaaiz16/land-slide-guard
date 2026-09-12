import React from 'react';
import { User, Bell, Shield, Key } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto h-full overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">System Settings</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">Manage your Command Center preferences</p>
      </div>

      <div className="space-y-6">
        
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
            <User size={18} className="text-gray-500" />
            <h2 className="font-bold text-gray-800">Account Profile</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
              <div>
                <div className="text-sm font-bold text-gray-900">Name</div>
                <div className="text-sm text-gray-500">Command Admin (SIH Demo)</div>
              </div>
              <button className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded hover:bg-blue-100 transition-colors">Edit</button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
              <div>
                <div className="text-sm font-bold text-gray-900">Email</div>
                <div className="text-sm text-gray-500">admin@landslideguard.ai</div>
              </div>
              <button className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded hover:bg-blue-100 transition-colors">Edit</button>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
            <Bell size={18} className="text-gray-500" />
            <h2 className="font-bold text-gray-800">Alert Notifications</h2>
          </div>
          <div className="p-6 space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="text-sm font-bold text-gray-900">SMS Alerts for Critical Zones</div>
                <div className="text-xs text-gray-500 mt-1">Receive text messages when risk > 80%</div>
              </div>
              <input type="checkbox" defaultChecked className="accent-blue-600 w-4 h-4" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="text-sm font-bold text-gray-900">Email Daily Digest</div>
                <div className="text-xs text-gray-500 mt-1">Receive a summary of Sikkim risk levels every morning</div>
              </div>
              <input type="checkbox" className="accent-blue-600 w-4 h-4" />
            </label>
          </div>
        </div>

        {/* API Keys Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
            <Key size={18} className="text-gray-500" />
            <h2 className="font-bold text-gray-800">API Keys</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Cesium Ion Token</div>
              <input type="password" value="****************************************" readOnly className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-500 font-mono outline-none" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">IMD Weather API Key</div>
              <input type="password" value="************************" readOnly className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-500 font-mono outline-none" />
            </div>
            <p className="text-xs text-gray-500 italic mt-2">Manage these in your Vercel Environment Variables.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
