import { Service } from '../context/AppointmentContext';

export const services: Service[] = [
  {
    id: '1',
    name: 'Initial Consultation',
    description: 'A comprehensive assessment of your needs and goals.',
    duration: 60,
    price: 100,
  },
  {
    id: '2',
    name: 'Standard Session',
    description: 'Regular follow-up session to continue your progress.',
    duration: 45,
    price: 85,
  },
  {
    id: '3',
    name: 'Premium Package',
    description: 'Extended session with additional resources and support.',
    duration: 90,
    price: 150,
  },
  {
    id: '4',
    name: 'Quick Check-in',
    description: 'Brief session to address specific concerns or questions.',
    duration: 30,
    price: 60,
  },
];

export const getAvailableTimeSlots = (date: Date) => {
  // In a real application, this would fetch from an API
  // For demo purposes, we'll generate some time slots
  const timeSlots = [
    { id: '1', time: '9:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '1:00 PM', available: true },
    { id: '5', time: '2:00 PM', available: true },
    { id: '6', time: '3:00 PM', available: false },
    { id: '7', time: '4:00 PM', available: true },
  ];
  
  // Simulate different availability based on day of week
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    // Weekend has fewer slots
    return timeSlots.slice(0, 4);
  }
  
  return timeSlots;
};