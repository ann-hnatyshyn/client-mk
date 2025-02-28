import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';
import { useAppointment } from '../context/AppointmentContext';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const { appointmentData, resetAppointment } = useAppointment();
  
  // Redirect to booking if no service is selected
  useEffect(() => {
    if (!appointmentData.service || !appointmentData.date || !appointmentData.timeSlot) {
      navigate('/booking');
    }
  }, [appointmentData, navigate]);
  
  const handleBookAnother = () => {
    resetAppointment();
    navigate('/booking');
  };
  
  if (!appointmentData.service || !appointmentData.date || !appointmentData.timeSlot) {
    return null;
  }
  
  // Generate a random confirmation number
  const confirmationNumber = Math.random().toString(36).substring(2, 10).toUpperCase();
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-xl text-gray-600">
          Your appointment has been successfully booked.
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-6 text-center">Appointment Details</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <Calendar className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900">Date & Time</h3>
              <p className="text-gray-700">
                {format(appointmentData.date, 'EEEE, MMMM d, yyyy')} at {appointmentData.timeSlot.time}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900">Service</h3>
              <p className="text-gray-700">
                {appointmentData.service.name} ({appointmentData.service.duration} minutes)
              </p>
              <p className="text-gray-600 text-sm mt-1">
                ${appointmentData.service.price}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900">Location</h3>
              <p className="text-gray-700">
                123 Business Ave, Suite 100<br />
                City, ST 12345
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium text-gray-900 mb-2">Confirmation Number</h3>
            <p className="text-lg font-mono bg-gray-100 p-3 rounded text-center">
              {confirmationNumber}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Please keep this confirmation number for your records.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 mb-8">
        <h3 className="font-semibold text-indigo-900 mb-2">What's Next?</h3>
        <ul className="space-y-2 text-indigo-800">
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 rounded-full bg-indigo-200 text-indigo-600 text-center font-medium mr-2">1</span>
            <span>You'll receive a confirmation email with all the details.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 rounded-full bg-indigo-200 text-indigo-600 text-center font-medium mr-2">2</span>
            <span>We recommend arriving 10 minutes before your appointment time.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block h-5 w-5 rounded-full bg-indigo-200 text-indigo-600 text-center font-medium mr-2">3</span>
            <span>If you need to reschedule, please contact us at least 24 hours in advance.</span>
          </li>
        </ul>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleBookAnother}
          className="flex-1 bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
        >
          Book Another Appointment
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex-1 bg-white text-indigo-600 border border-indigo-600 py-3 rounded-md font-medium hover:bg-indigo-50 transition duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;