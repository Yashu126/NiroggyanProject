import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Mail, CheckCircle } from 'lucide-react';
import { Doctor, AppointmentFormData } from '../types';
import { useAppointments } from '../context/AppointmentContext';

interface AppointmentFormProps {
  doctor: Doctor;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ doctor }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointmentId, setAppointmentId] = useState<string>('');
  const { addAppointment } = useAppointments();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AppointmentFormData>();

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const appointmentData = {
        ...data,
        doctorId: doctor.id
      };
      
      const newAppointmentId = addAppointment(appointmentData);
      setAppointmentId(newAppointmentId);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
      if (hour < 17) {
        slots.push(`${hour}:30`);
      }
    }
    return slots;
  };

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Appointment Confirmed!
          </h3>
          <p className="text-gray-600 mb-4">
            Your appointment has been successfully booked with {doctor.name}.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              Appointment ID: <span className="font-mono font-medium">{appointmentId}</span>
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Book Appointment</h3>
        <p className="text-sm text-gray-600 mt-1">
          Schedule your consultation with {doctor.name}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
        {/* Patient Name */}
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline h-4 w-4 mr-1.5" />
            Patient Name
          </label>
          <input
            type="text"
            id="patientName"
            {...register('patientName', {
              required: 'Patient name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.patientName ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.patientName && (
            <p className="mt-1 text-sm text-red-600">{errors.patientName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline h-4 w-4 mr-1.5" />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline h-4 w-4 mr-1.5" />
            Preferred Date
          </label>
          <select
            id="date"
            {...register('date', { required: 'Please select a date' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.date ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Select a date</option>
            {generateDateOptions().map((date) => {
              const dateObj = new Date(date);
              const formatted = dateObj.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              return (
                <option key={date} value={date}>
                  {formatted}
                </option>
              );
            })}
          </select>
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="inline h-4 w-4 mr-1.5" />
            Preferred Time
          </label>
          <select
            id="time"
            {...register('time', { required: 'Please select a time' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.time ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Select a time</option>
            {generateTimeSlots().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By booking this appointment, you agree to our terms of service and privacy policy.
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;