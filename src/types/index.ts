export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  experience: number;
  education: string;
  about: string;
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    nextAvailable: string;
    timeSlots: string[];
  };
  location: string;
  consultationFee: number;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  email: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface AppointmentFormData {
  doctorId: string;
  patientName: string;
  email: string;
  date: string;
  time: string;
}