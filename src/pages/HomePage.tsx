import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/mockData';
import { Users, Award, Clock, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = useMemo(() => {
    if (!searchTerm.trim()) return doctors;
    
    return doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const stats = [
    { icon: Users, label: 'Qualified Doctors', value: '50+' },
    { icon: Award, label: 'Years of Experience', value: '15+' },
    { icon: Clock, label: 'Available 24/7', value: 'Always' },
    { icon: Heart, label: 'Happy Patients', value: '10K+' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Your <span className="text-blue-600">Perfect Doctor</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Book appointments with top-rated healthcare professionals in your area.
          Quality care is just a click away.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mb-2">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 text-center">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Search */}
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search doctors by name or specialization..."
      />

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {searchTerm ? 'Search Results' : 'Available Doctors'}
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>
      </div>

      {/* Doctors Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Users className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
          <p className="text-gray-600">
            Try adjusting your search terms or browse all available doctors.
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Show All Doctors
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;