import { MapPin } from 'lucide-react';
import type { Animal } from '../types';

interface MapProps {
  animals: Animal[];
  onAnimalSelect: (animal: Animal) => void;
}

export function Map({ animals, onAnimalSelect }: MapProps) {
  return (
    <div className="relative w-full h-[600px] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
      
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Real-Time Marker Layer */}
      <div className="absolute inset-0 z-10">
        {animals.map((animal) => (
          <button
            key={animal.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300"
            style={{
              left: `${(animal.location.longitude + 180) * (100 / 360)}%`,
              top: `${(90 - animal.location.latitude) * (100 / 180)}%`,
            }}
            onClick={() => onAnimalSelect(animal)}
            aria-label={`Select ${animal.name}`} // Accessibility improvement
          >
            <MapPin
              className={`w-8 h-8 ${
                animal.health === 'good'
                  ? 'text-green-500 animate-bounce'
                  : animal.health === 'attention'
                  ? 'text-yellow-500 animate-pulse'
                  : 'text-red-500 animate-spin'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Live Tracking Title and Info */}
      <div className="absolute top-4 left-4 z-20 text-white">
        <h2 className="text-3xl font-bold drop-shadow-lg">
          Real-Time Livestock Tracker
        </h2>
        <p className="mt-2 text-sm font-medium max-w-lg leading-relaxed drop-shadow-md">
          Track your livestock live with accurate location updates and real-time health status, powered by GPS and cloud technology.
        </p>
      </div>
    </div>
  );
}
