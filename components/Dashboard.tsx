import { Activity, AlertTriangle, Check } from 'lucide-react';
import type { HerdStats } from '../types';

interface DashboardProps {
  stats: HerdStats;
}

export function Dashboard({ stats }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Animals Card */}
      <div className="relative bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex justify-center items-center shadow-md">
          <Activity className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-gray-600 text-lg font-semibold ml-16">Total Animals</h3>
        <p className="text-4xl font-bold text-gray-800 mt-4">{stats.total}</p>
        <div className="absolute bottom-2 right-2 text-blue-400 text-xs">View Details</div>
      </div>

      {/* Active Tracking Card */}
      <div className="relative bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-100 rounded-full flex justify-center items-center shadow-md">
          <Check className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="text-gray-600 text-lg font-semibold ml-16">Active Tracking</h3>
        <p className="text-4xl font-bold text-gray-800 mt-4">{stats.active}</p>
        <div className="absolute bottom-2 right-2 text-green-400 text-xs">View Details</div>
      </div>

      {/* Needs Attention Card */}
      <div className="relative bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-100 rounded-full flex justify-center items-center shadow-md">
          <AlertTriangle className="w-6 h-6 text-yellow-500" />
        </div>
        <h3 className="text-gray-600 text-lg font-semibold ml-16">Needs Attention</h3>
        <p className="text-4xl font-bold text-gray-800 mt-4">{stats.needsAttention}</p>
        <div className="absolute bottom-2 right-2 text-yellow-400 text-xs">View Details</div>
      </div>
    </div>
  );
}
