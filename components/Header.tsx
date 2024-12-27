
// import React from 'react';
import { Beef } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-green-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-full bg-white hover:bg-gray-100 transition duration-300">
            <Beef className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            LiveStock Tracker
          </h1>
        </div>
      </div>
    </header>
  );
}

export function App() {
  return (
    <div
      style={{
        backgroundColor: '#f5f5dc', // Beige background
        minHeight: '100vh', // Full page height
      }}
    >
      <Header />

      {/* Outcomes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Key Benefits of Using LiveStock Tracker
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>
            <strong>Herd Tracking:</strong> Monitor livestock location and activity.
          </li>
          <li>
            <strong>Security:</strong> Prevent theft or loss.
          </li>
          <li>
            <strong>Efficient Herd Management:</strong> Optimize grazing and feeding schedules.
          </li>
          <li>
            <strong>Data-Driven Decisions:</strong> Use tracking data for better farm management.
          </li>
          <li>
            <strong>Enhanced Livestock Security:</strong> Ensure the safety of animals.
          </li>
        </ul>
      </section>
    </div>
  );
}


