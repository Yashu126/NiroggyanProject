import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Bhavani',
    specialization: 'Dermatologist',
    image: 'https://images.pexels.com/photos/7578806/pexels-photo-7578806.jpeg',
    rating: 4.8,
    experience: 12,
    education: 'MD, Johns Hopkins University',
    about: 'Dr. Bhavani is an expert dermatologist specializing in both medical and cosmetic dermatology. She has extensive experience in treating skin conditions and aesthetic procedures.',
    availability: {
      status: 'busy',
      nextAvailable: 'Tomorrow, 11:00 AM',
      timeSlots: ['11:00 AM', '1:00 PM', '3:00 PM']
    },
    location: 'Skin Care Clinic, Los Angeles',
    consultationFee: 180
  },
  {
    id: '2',
    name: 'Dr. Abhinyareddy',
    specialization: 'Cardiologist',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    experience: 15,
    education: 'MD, Harvard Medical School',
    about: 'Dr. Abhinyareddy is a renowned cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and interventional procedures.',
    availability: {
      status: 'available',
      nextAvailable: 'Today, 2:00 PM',
      timeSlots: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
    },
    location: 'Heart Care Center, New York',
    consultationFee: 200
  },
  {
    id: '3',
    name: 'Dr. Krishna Teja',
    specialization: 'Pediatrician',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    experience: 10,
    education: 'MD, Stanford University',
    about: 'Dr. Krishna Teja is a compassionate pediatrician dedicated to providing comprehensive healthcare for children and adolescents. He focuses on preventive care and child development.',
    availability: {
      status: 'available',
      nextAvailable: 'Today, 1:00 PM',
      timeSlots: ['9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM', '4:00 PM']
    },
    location: 'Children\'s Health Center, Chicago',
    consultationFee: 150
  },
  {
    id: '4',
    name: 'Dr. Divya',
    specialization: 'Orthopedic Surgeon',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    experience: 18,
    education: 'MD, Mayo Clinic',
    about: 'Dr. Divya is a skilled orthopedic surgeon with expertise in joint replacements, sports medicine, and trauma surgery. She uses the latest minimally invasive techniques.',
    availability: {
      status: 'unavailable',
      nextAvailable: 'Next week, Monday',
      timeSlots: []
    },
    location: 'Orthopedic Institute, Boston',
    consultationFee: 250
  },
  {
    id: '5',
    name: 'Dr. Nikhil',
    specialization: 'Neurologist',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    experience: 14,
    education: 'MD, PhD, Yale University',
    about: 'Dr. Nikhil is a distinguished neurologist specializing in movement disorders, epilepsy, and neurodegenerative diseases. He combines clinical expertise with research.',
    availability: {
      status: 'available',
      nextAvailable: 'Today, 3:00 PM',
      timeSlots: ['10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM']
    },
    location: 'Neurology Center, San Francisco',
    consultationFee: 220
  },
  {
    id: '6',
    name: 'Dr. Sahithi',
    specialization: 'General Practitioner',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    experience: 8,
    education: 'MD, University of California',
    about: 'Dr. Sahithi is a dedicated general practitioner providing comprehensive primary care services. She focuses on preventive medicine and building long-term patient relationships.',
    availability: {
      status: 'available',
      nextAvailable: 'Today, 12:00 PM',
      timeSlots: ['9:00 AM', '10:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM']
    },
    location: 'Family Medicine Clinic, Seattle',
    consultationFee: 120
  },
  {
    id: '7',
    name: 'Dr. Srija',
    specialization: 'Gynecologist',
    image: 'https://images.pexels.com/photos/8460048/pexels-photo-8460048.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    experience: 11,
    education: 'MD, University of Michigan',
    about: 'Dr. Srija specializes in women’s health, prenatal care, and minimally invasive gynecologic surgery. She is known for her compassionate patient care.',
    availability: {
      status: 'available',
      nextAvailable: 'Today, 2:30 PM',
      timeSlots: ['11:00 AM', '2:30 PM', '4:00 PM']
    },
    location: 'Women’s Health Center, Houston',
    consultationFee: 160
  },
  {
    id: '8',
    name: 'Dr. Sai Apoorva',
    specialization: 'ENT Specialist',
    image: 'https://images.pexels.com/photos/6749770/pexels-photo-6749770.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    experience: 9,
    education: 'MD, University of Washington',
    about: 'Dr. Sai Apoorva is an experienced ENT specialist focused on treating allergies, sinus issues, and hearing disorders using both medical and surgical approaches.',
    availability: {
      status: 'busy',
      nextAvailable: 'Tomorrow, 10:00 AM',
      timeSlots: ['10:00 AM', '11:30 AM', '1:30 PM']
    },
    location: 'ENT Care Clinic, Denver',
    consultationFee: 140
  },
  {
    id: '9',
    name: 'Dr. Pranay Kishore',
    specialization: 'Psychiatrist',
    image: 'https://images.pexels.com/photos/7580251/pexels-photo-7580251.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    experience: 13,
    education: 'MD, Columbia University',
    about: 'Dr. Pranay Kishore is a leading psychiatrist with deep experience in treating anxiety, depression, and mood disorders with a holistic and evidence-based approach.',
    availability: {
      status: 'available',
      nextAvailable: 'Today, 5:00 PM',
      timeSlots: ['2:00 PM', '3:30 PM', '5:00 PM', '6:00 PM']
    },
    location: 'Mental Wellness Center, Austin',
    consultationFee: 190
  }
];