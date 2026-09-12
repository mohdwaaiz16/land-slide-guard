"use client";

import React from 'react';
import Image from 'next/image';
import { Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10 shadow-sm">
      {/* Left: LBB Logo and Title */}
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
          <Image 
            src="/logo.png" 
            alt="LBB Logo" 
            fill 
            className="object-cover" 
            onError={(e) => {
              // Fallback if logo not yet placed
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('bg-primary', 'flex', 'items-center', 'justify-center');
              if (e.currentTarget.parentElement) {
                e.currentTarget.parentElement.innerHTML = '<span class="font-bold text-primary-foreground text-xs">LBB</span>';
              }
            }}
          />
        </div>
        <h1 className="text-xl font-bold text-foreground tracking-tight">LANDSLIDEGUARD AI</h1>
      </div>

      {/* Center: State Selector & Status */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200">
          <span className="text-sm font-medium text-muted-foreground">Region:</span>
          <select className="bg-transparent text-sm font-semibold text-foreground focus:outline-none cursor-pointer">
            <option value="Sikkim">Sikkim</option>
            <option value="Arunachal Pradesh" disabled>Arunachal Pradesh (Expansion)</option>
            <option value="Assam" disabled>Assam (Expansion)</option>
            <option value="Manipur" disabled>Manipur (Expansion)</option>
            <option value="Meghalaya" disabled>Meghalaya (Expansion)</option>
            <option value="Mizoram" disabled>Mizoram (Expansion)</option>
            <option value="Nagaland" disabled>Nagaland (Expansion)</option>
            <option value="Tripura" disabled>Tripura (Expansion)</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <span className="text-sm font-semibold tracking-wide text-foreground">LIVE</span>
        </div>
      </div>

      {/* Right: Actions and SIH Logo */}
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-gray-100 rounded-full">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-gray-100 rounded-full">
          <User size={20} />
        </button>
        
        <div className="h-8 w-[2px] bg-gray-200"></div>
        
        <div className="flex items-center gap-2">
          <div className="font-bold text-primary text-lg tracking-tight px-3 py-1 bg-navy text-primary-foreground rounded-md uppercase">
            SIH 2026
          </div>
        </div>
      </div>
    </header>
  );
}
