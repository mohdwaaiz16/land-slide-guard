'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Activity } from 'lucide-react';

export default function AIRiskEngine() {
  const [riskData, setRiskData] = useState<{
    risk_probability: number;
    risk_level: string;
    confidence: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch live risk prediction from the FastAPI backend
    const fetchRisk = async () => {
      try {
        const res = await fetch('/api/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ location: 'Mangan District' })
        });
        const data = await res.json();
        setRiskData(data);
      } catch (error) {
        console.error("Failed to fetch risk data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRisk();
    
    // Set up polling for live updates every 30 seconds
    const interval = setInterval(fetchRisk, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center justify-between">
        AI Risk Engine
        <span className="bg-primary/20 text-primary-foreground px-2 py-0.5 rounded text-[10px] font-bold">
          {loading ? 'CONNECTING...' : 'LIVE'}
        </span>
      </h3>
      
      <div className="flex items-end gap-4 mb-6">
        <div className="text-5xl font-black text-destructive tracking-tighter">
          {riskData ? `${Math.round(riskData.risk_probability * 100)}%` : '--%'}
        </div>
        <div className="pb-1">
          <div className="text-sm font-bold text-destructive uppercase">
            {riskData ? riskData.risk_level : 'CALCULATING...'}
          </div>
          <div className="text-xs font-medium text-gray-500 flex items-center gap-1">
            <ArrowUpRight size={12} className="text-destructive" /> Increasing
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <RiskFactor label="Rainfall" value={89} />
        <RiskFactor label="Soil Moisture" value={81} />
        <RiskFactor label="Slope" value={72} />
        <RiskFactor label="Historical Events" value={55} />
      </div>

      <button className="w-full mt-5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-bold py-2 rounded-lg border border-gray-200 transition-colors">
        VIEW EXPLANATION
      </button>
    </div>
  );
}

function RiskFactor({ label, value }: { label: string, value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div 
          className="bg-navy h-2 rounded-full transition-all duration-1000" 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
