import { useEffect, useRef } from 'react';
//import { MapPin } from 'lucide-react'; 
import type { Animal } from '../../types'; 
import { getAnimalIcon } from '../../utils/animalIcons'; 

interface MapComponentProps {
  animals: Animal[];
  followedAnimal: Animal | null;
  onAnimalSelect: (animal: Animal) => void;
}

export function MapComponent({ animals, followedAnimal, onAnimalSelect }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (followedAnimal && mapRef.current) {
      // Center map on followed animal
      const element = mapRef.current.querySelector(`[data-animal-id="${followedAnimal.id}"]`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [followedAnimal?.location]);

  return (
    <div 
      ref={mapRef}
      className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden mt-4"
    >
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578507065211-f471d7991f4f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50" />
      
      {animals.map((animal) => {
        const Icon = getAnimalIcon(animal.type);

        
        let colorClass = 'blue';
        switch(animal.health) {
          case 'good':
            colorClass = 'text-green-500'; // Healthy
          
            break;
          case 'attention':
            colorClass = 'text-yellow-500'; // Attention needed
            break;
          case 'critical':
            colorClass = 'text-pink-500'; // Critical status
            break;
          default:
            colorClass = 'text-gray-500'; // Default if health status is unknown or not defined
        }

        return (
          <button
            key={animal.id}
            data-animal-id={animal.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 group ${followedAnimal?.id === animal.id ? 'z-10' : ''}`}
            style={{
              left: `${(animal.location.longitude + 180) * (100 / 360)}%`,
              top: `${(90 - animal.location.latitude) * (100 / 180)}%`,
              transition: 'all 0.5s ease-out',
            }}
            onClick={() => onAnimalSelect(animal)}
          >
            <div className="relative">
              <Icon className={`w-6 h-6 ${colorClass}`} />
              {followedAnimal?.id === animal.id && (
                <span className="absolute -top-2 -right-2 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              )}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-75 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                {animal.tag} - {animal.breed}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
