import type { GeoLocation } from '../types';

const MOVEMENT_RADIUS = 0.0550; // Approximately 50 meters

export function updateAnimalLocation(
  currentLocation: GeoLocation,
  uniqueOffset: number // Unique identifier for the animal (e.g., index or ID hash)
): GeoLocation {
  // Introduce a unique offset multiplier for each animal
  const offsetMultiplier = (uniqueOffset % 100) * 0.00001; // Ensures unique yet small variation

  return {
    latitude:
      currentLocation.latitude +
      (Math.random() - 0.5) * MOVEMENT_RADIUS +
      offsetMultiplier,
    longitude:
      currentLocation.longitude +
      (Math.random() - 0.5) * MOVEMENT_RADIUS -
      offsetMultiplier,
    timestamp: new Date().toISOString(),
  };
}
