import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format, addDays, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { services, getAvailableTimeSlots } from '../data/services';
import { useAppointment, Service, TimeSlot } from '../context/AppointmentContext';

const BookingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { appointmentData, setService, setDate, setTimeSlot } = useAppointment();
  
  // Initialize with any service passed from the services page
  const initialService = location.state?.selectedService || null;
  
  const [selectedService, setSelectedService] = useState<Service | null>(initialService);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));
  
  // Update available time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const timeSlots = getAvailableTimeSlots(selectedDate);
      setAvailableTimeSlots(timeSlots);
      setSelectedTimeSlot(null); // Reset selected time slot when date changes
    }
  }, [selectedDate]);
  
  // Set initial service from context if available
  useEffect(() => {
    if (appointmentData.service && !selectedService) {
      setSelectedService(appointmentData.service);
    }
    if (appointmentData.date) {
      setSelectedDate(appointmentData.date);
    }
    if (appointmentData.timeSlot) {
      setSelectedTimeSlot(appointmentData.timeSlot);
    }
  }, [appointmentData, selectedService]);
  
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentStep(2);
  };
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setCurrentStep(3);
  };
  
  const handleTimeSelect = (timeSlot: TimeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  
  const handleContinue = () => {
    if (selectedService && selectedDate && selectedTimeSlot) {
      // Save to context
      setService(selectedService);
      setDate(selectedDate);
      setTimeSlot(selectedTimeSlot);
      
      // Navigate to customer info page
      navigate('/payment');
    }
  };
  
  const isDateSelected = (date: Date) => {
    return selectedDate && isSameDay(date, selectedDate);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Your Appointment</h1>
      
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-center">
          <div className={`flex items-center ${currentStep >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${currentStep >= 1 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-400'}`}>
              1
            </div>
            <span className="ml-2 font-medium">Service</span>
          </div>
          <div className={`w-12 h-1 mx-2 ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center ${currentStep >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${currentStep >= 2 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-400'}`}>
              2
            </div>
            <span className="ml-2 font-medium">Date</span>
          </div>
          <div className={`w-12 h-1 mx-2 ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center ${currentStep >= 3 ? 'text-indigo-600' : 'text-gray-400'}`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${currentStep >= 3 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-400'}`}>
              3
            </div>
            <span className="ml-2 font-medium">Time</span>
          </div>
        </div>
      </div>
      
      {/* Step 1: Service Selection */}
      <div className={`${currentStep === 1 ? 'block' : 'hidden'}`}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select a Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedService?.id === service.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
              onClick={() => handleServiceSelect(service)}
            >
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between">
                <span className="text-gray-700">{service.duration} minutes</span>
                <span className="font-semibold">${service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Step 2: Date Selection */}
      <div className={`${currentStep === 2 ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setCurrentStep(1)}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Services
          </button>
          <h2 className="text-2xl font-semibold text-gray-900">Select a Date</h2>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
        
        <div className="flex overflow-x-auto pb-4 mb-6 space-x-4">
          {dates.map((date, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-24 h-24 rounded-lg flex flex-col items-center justify-center cursor-pointer border-2 ${
                isDateSelected(date)
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
              onClick={() => handleDateSelect(date)}
            >
              <span className="text-sm font-medium text-gray-500">
                {format(date, 'EEE')}
              </span>
              <span className="text-2xl font-bold">
                {format(date, 'd')}
              </span>
              <span className="text-sm text-gray-500">
                {format(date, 'MMM')}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Step 3: Time Selection */}
      <div className={`${currentStep === 3 ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setCurrentStep(2)}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Dates
          </button>
          <h2 className="text-2xl font-semibold text-gray-900">
            Select a Time for {format(selectedDate, 'MMMM d, yyyy')}
          </h2>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {availableTimeSlots.map((timeSlot) => (
            <button
              key={timeSlot.id}
              disabled={!timeSlot.available}
              className={`py-3 px-4 rounded-md text-center ${
                !timeSlot.available
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : selectedTimeSlot?.id === timeSlot.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-indigo-500'
              }`}
              onClick={() => timeSlot.available && handleTimeSelect(timeSlot)}
            >
              {timeSlot.time}
            </button>
          ))}
        </div>
        
        {/* Summary and Continue */}
        {selectedTimeSlot && (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4">Appointment Summary</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{format(selectedDate, 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{selectedTimeSlot.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{selectedService?.duration} minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium">${selectedService?.price}</span>
              </div>
            </div>
            
            <button
              onClick={handleContinue}
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
            >
              Continue to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;