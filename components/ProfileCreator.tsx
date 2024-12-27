import { useState } from 'react';
import { FaPaw } from 'react-icons/fa'; // Importing a paw icon for extra visual appeal

export function ProfileCreator() {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [isProfileCreated, setIsProfileCreated] = useState(false);

  const handleCreateProfile = () => {
    if (!name || !tag) {
      alert("Please fill out all fields.");
      return;
    }

    // Handle profile creation
    console.log('Profile Created:', { name, tag });
    setIsProfileCreated(true);  // Show confirmation
    // Optionally, reset form after a short delay
    setTimeout(() => {
      setName('');
      setTag('');
      setIsProfileCreated(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-green-600 via-blue-500 to-green-600 p-6 rounded-lg shadow-lg mb-8 max-w-md mx-auto sm:max-w-lg lg:max-w-xl">
      <div className="flex justify-center items-center space-x-2">
        <FaPaw size={30} color="yellow" />
        <h3 className="text-3xl font-semibold text-white">Create Animal Profile</h3>
      </div>
      <div className="mt-6 space-y-4">
        <div className="mb-4">
          <label className="block text-lg font-medium text-white mb-1" htmlFor="name">
            
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Animal Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-white mb-1" htmlFor="tag">
            
          </label>
          <input
            id="tag"
            type="text"
            placeholder="Enter Animal Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="border p-3 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleCreateProfile}
          className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105"
        >
          {isProfileCreated ? 'Profile Created!' : 'Create Profile'}
        </button>

        {/* Success message after profile creation */}
        {isProfileCreated && (
          <div className="mt-4 text-center text-green-200">
            <p>Your animal profile has been successfully created!</p>
          </div>
        )}
      </div>
    </div>
  );
}
