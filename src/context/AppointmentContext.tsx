import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Appointment, AppointmentFormData } from '../types';

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (appointmentData: AppointmentFormData) => string;
  getAppointmentsByDoctor: (doctorId: string) => Appointment[];
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
};

interface AppointmentProviderProps {
  children: ReactNode;
}

export const AppointmentProvider: React.FC<AppointmentProviderProps> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointmentData: AppointmentFormData): string => {
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      ...appointmentData,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    setAppointments(prev => [...prev, newAppointment]);
    return newAppointment.id;
  };

  const getAppointmentsByDoctor = (doctorId: string): Appointment[] => {
    return appointments.filter(appointment => appointment.doctorId === doctorId);
  };

  return (
    <AppointmentContext.Provider value={{
      appointments,
      addAppointment,
      getAppointmentsByDoctor
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};