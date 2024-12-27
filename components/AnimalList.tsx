//import React from 'react';
import { AlertTriangle, Check } from 'lucide-react';
import type { Animal } from '../types';

interface AnimalListProps {
  animals: Animal[];
  onAnimalSelect: (animal: Animal) => void;
}

export function AnimalList({ animals, onAnimalSelect }: AnimalListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Livestock Overview</h2>
      </div>
      <div className="divide-y">
        {animals.map((animal) => (
          <button
            key={animal.id}
            className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
            onClick={() => onAnimalSelect(animal)}
          >
            <div>
              <p className="font-medium text-gray-800">Tag: {animal.tag}</p>
              <p className="text-sm text-gray-500">
                Last updated: {new Date(animal.lastUpdate).toLocaleString()}
              </p>
            </div>
            {animal.health === 'good' ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}