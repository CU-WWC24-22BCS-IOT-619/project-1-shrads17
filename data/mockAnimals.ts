import { Animal } from '../types';


// Utility function to generate random coordinates near a base location
function generateNearbyLocation(baseLat: number, baseLng: number, index: number) {
  const variance = 0.05; // About 1km radius
  const offset = index * 0.003; // Additional offset to ensure unique locations
  return {
    latitude: baseLat + (Math.random() - 0.5) * variance + offset,
    longitude: baseLng + (Math.random() - 0.5) * variance - offset,
    timestamp: new Date().toISOString(),
  };
}

// Base farm location (New York City coordinates)
const FARM_LAT = 40.7128;
const FARM_LNG = -74.0060;

export const mockAnimals: Animal[] = [
  // Cattle
  {
    id: 'cow-001',
    tag: 'COW-001',
    type: 'cattle',
    breed: 'Holstein',
    status: 'active',
    location: generateNearbyLocation(FARM_LAT, FARM_LNG, 1),
    lastUpdate: new Date().toISOString(),
    health: 'good',
    notes: 'Milk production above average',
    name: undefined
  },
  {
    id: 'cow-002',
    tag: 'COW-002',
    type: 'cattle',
    breed: 'Angus',
    status: 'active',
    location: generateNearbyLocation(FARM_LAT, FARM_LNG, 2),
    lastUpdate: new Date().toISOString(),
    health: 'good',
    notes: 'Scheduled for vaccination',
    name: undefined
  },
  // Sheep
  {
    id: 'sheep-001',
    tag: 'SHP-001',
    type: 'sheep',
    breed: 'Merino',
    status: 'active',
    location: generateNearbyLocation(FARM_LAT, FARM_LNG, 3),
    lastUpdate: new Date().toISOString(),
    health: 'good',
    notes: 'Recent wool shearing',
    name: undefined
  },
  {
    id: 'sheep-002',
    tag: 'SHP-002',
    type: 'sheep',
    breed: 'Suffolk',
    status: 'inactive',
    location: generateNearbyLocation(FARM_LAT, FARM_LNG, 4),
    lastUpdate: new Date().toISOString(),
    health: 'critical',
    notes: 'Under veterinary care',
    name: undefined
  },
  // Goats
  {
    id: 'goat-001',
    tag: 'GT-001',
    type: 'goat',
    breed: 'Nubian',
    status: 'active',
    location: generateNearbyLocation(FARM_LAT, FARM_LNG, 5),
    lastUpdate: new Date().toISOString(),
    health: 'good',
    notes: 'High milk production',
    name: undefined
  },
  // Pigs
  {
    id: 'pig-001',
    tag: 'PIG-001',
    type: 'pig',
    breed: 'Yorkshire',
    status: 'active',
    location: generateNearbyLocation(FARM_LAT, FARM_LNG, 6),
    lastUpdate: new Date().toISOString(),
    health: 'attention',
    notes: 'Weight monitoring required',
    name: undefined
  },
];
