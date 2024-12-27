import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { MapContainer } from './components/Map/MapContainer';
import { AnimalList } from './components/AnimalList';
import { Header } from './components/Header';
import { AnimalDetails } from './components/AnimalDetails';
import { ProfileCreator } from './components/ProfileCreator';
import { Footer } from './components/Footer';
import { mockAnimals } from './data/mockAnimals';
import type { Animal } from './types';

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const stats = {
    total: mockAnimals.length,
    active: mockAnimals.filter(a => a.status === 'active').length,
    needsAttention: mockAnimals.filter(a => a.health !== 'good').length,
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f5dc' }}>
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard stats={stats} />

        {/* Profile Creator Section */}
        <ProfileCreator />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <MapContainer animals={mockAnimals} onAnimalSelect={setSelectedAnimal} />
          </div>

          <div>
            <AnimalList animals={mockAnimals} onAnimalSelect={setSelectedAnimal} />
          </div>
        </div>

        {selectedAnimal && (
          <AnimalDetails animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
