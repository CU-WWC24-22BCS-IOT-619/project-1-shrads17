import React from 'react';
import { Play, Pause } from 'lucide-react';
import type { Animal } from '../../types';

interface TrackingControlsProps {
  trackingEnabled: boolean;
  onToggleTracking: () => void;
  followedAnimal: Animal | null;
  onFollowAnimal: (animal: Animal | null) => void;
  animals: Animal[];
}

export function TrackingControls({
  trackingEnabled,
  onToggleTracking,
  followedAnimal,
  onFollowAnimal,
  animals
}: TrackingControlsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onToggleTracking}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
          trackingEnabled 
            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {trackingEnabled ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        <span>{trackingEnabled ? 'Pause Tracking' : 'Start Tracking'}</span>
      </button>

      <select
        value={followedAnimal?.id || ''}
        onChange={(e) => {
          const animal = animals.find(a => a.id === e.target.value);
          onFollowAnimal(animal || null);
        }}
        className="form-select rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Follow Animal...</option>
        {animals.map((animal) => (
          <option key={animal.id} value={animal.id}>
            {animal.tag} - {animal.breed}
          </option>
        ))}
      </select>
    </div>
  );
}