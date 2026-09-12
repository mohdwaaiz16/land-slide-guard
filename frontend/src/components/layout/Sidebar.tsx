import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  AlertTriangle, 
  FileText, 
  Activity, 
  Settings, 
  Database,
  CloudRain
} from 'lucide-react';

const navItems = [
  { name: 'Overview', href: '/', icon: LayoutDashboard },
  { name: '3D Risk Map', href: '/map', icon: MapIcon },
  { name: 'Alerts', href: '/alerts', icon: AlertTriangle },
  { name: 'Field Reports', href: '/reports', icon: FileText },
  { name: 'Emergency Response', href: '/response', icon: Activity },
  { name: 'Analytics', href: '/analytics', icon: Activity },
  { name: 'Simulator', href: '/simulator', icon: CloudRain },
  { name: 'Data Sources', href: '/sources', icon: Database },
];

export default function Sidebar({ activePath = '/' }: { activePath?: string }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full flex flex-col shrink-0 overflow-y-auto">
      <div className="p-4 py-6">
        <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-3">
          Command Center
        </h2>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = activePath === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors font-medium text-sm ${
                  isActive 
                    ? 'bg-primary/20 text-foreground border-l-4 border-primary' 
                    : 'text-muted-foreground hover:bg-gray-100 hover:text-foreground border-l-4 border-transparent'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-foreground' : 'text-muted-foreground'} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t border-gray-200">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-muted-foreground hover:bg-gray-100 hover:text-foreground font-medium text-sm"
        >
          <Settings size={18} />
          Settings
        </Link>
      </div>
    </aside>
  );
}
