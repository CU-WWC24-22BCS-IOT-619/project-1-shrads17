//import React from 'react';
import type { Animal } from '../types';

interface AnimalDetailsProps {
  animal: Animal;
  onClose: () => void;
}

export function AnimalDetails({ animal, onClose }: AnimalDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Animal Details</h2>
        <dl className="space-y-2">
          <dt className="font-medium">Tag</dt>
          <dd>{animal.tag}</dd>
          <dt className="font-medium">Type</dt>
          <dd className="capitalize">{animal.type}</dd>
          {animal.breed && (
            <>
              <dt className="font-medium">Breed</dt>
              <dd className="capitalize">{animal.breed}</dd>
            </>
          )}
          <dt className="font-medium">Health Status</dt>
          <dd className="capitalize">{animal.health}</dd>
          <dt className="font-medium">Status</dt>
          <dd className="capitalize">{animal.status}</dd>
          <dt className="font-medium">Last Updated</dt>
          <dd>{new Date(animal.lastUpdate).toLocaleString()}</dd>
          {animal.notes && (
            <>
              <dt className="font-medium">Notes</dt>
              <dd>{animal.notes}</dd>
            </>
          )}
        </dl>
        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}