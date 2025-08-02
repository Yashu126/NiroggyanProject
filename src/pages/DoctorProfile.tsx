import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, DollarSign, GraduationCap, Calendar } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';
import { doctors } from '../data/mockData';

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h2>
        <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Doctors
        </Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800';
      case 'unavailable':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available Today';
      case 'busy':
        return 'Busy';
      case 'unavailable':
        return 'Unavailable';
      default:
        return 'Unknown';
    }
  };

  return (
    <div>
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Doctors
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Doctor Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-gray-100 mx-auto sm:mx-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{doctor.name}</h1>
                      <p className="text-lg text-blue-600 font-medium">{doctor.specialization}</p>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0 ${getStatusColor(doctor.availability.status)}`}>
                      {getStatusText(doctor.availability.status)}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{doctor.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 text-gray-400 mr-1" />
                      <span>{doctor.experience} years experience</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                      <span>${doctor.consultationFee}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 space-y-8">
              {/* About */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="h-5 w-5 mr-3 text-gray-400" />
                  <span>{doctor.education}</span>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Location</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                  <span>{doctor.location}</span>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-gray-400" />
                    <span>Next available: {doctor.availability.nextAvailable}</span>
                  </div>
                  
                  {doctor.availability.timeSlots.length > 0 && (
                    <div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                        <span>Available time slots today:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-8">
                        {doctor.availability.timeSlots.map((slot, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700"
                          >
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <AppointmentForm doctor={doctor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;