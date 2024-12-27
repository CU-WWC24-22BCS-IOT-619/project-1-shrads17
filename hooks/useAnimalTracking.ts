import { useState, useEffect } from 'react';
import type { Animal } from '../types';
import { updateAnimalLocation } from '../utils/locationUtils';

export function useAnimalTracking(initialAnimals: Animal[]) {
  const [trackingEnabled, setTrackingEnabled] = useState(true);
  const [followedAnimal, setFollowedAnimal] = useState<Animal | null>(null);
  const [animalLocations, setAnimalLocations] = useState<Animal[]>(initialAnimals);

  useEffect(() => {
    if (!trackingEnabled) return;

    const interval = setInterval(() => {
      setAnimalLocations(animals => 
        animals.map(animal => ({
          ...animal,
          location: updateAnimalLocation(animal.location)
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [trackingEnabled]);

  const toggleTracking = () => setTrackingEnabled(prev => !prev);

  return {
    trackingEnabled,
    toggleTracking,
    followedAnimal,
    setFollowedAnimal,
    animalLocations
  };
}