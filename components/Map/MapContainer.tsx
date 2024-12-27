import React from 'react';
import { MapComponent } from './MapComponent';
import { TrackingControls } from './TrackingControls';
import { useAnimalTracking } from '../../hooks/useAnimalTracking';
import type { Animal } from '../../types';

interface MapContainerProps {
  animals: Animal[];
  onAnimalSelect: (animal: Animal) => void;
}

export function MapContainer({ animals, onAnimalSelect }: MapContainerProps) {
  const { 
    trackingEnabled,
    toggleTracking,
    followedAnimal,
    setFollowedAnimal,
    animalLocations 
  } = useAnimalTracking(animals);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <TrackingControls
        trackingEnabled={trackingEnabled}
        onToggleTracking={toggleTracking}
        followedAnimal={followedAnimal}
        onFollowAnimal={setFollowedAnimal}
        animals={animals}
      />
      <MapComponent
        animals={animalLocations}
        followedAnimal={followedAnimal}
        onAnimalSelect={onAnimalSelect}
      />
    </div>
  );
}