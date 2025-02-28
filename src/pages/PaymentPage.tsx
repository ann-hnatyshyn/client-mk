import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAppointment } from '../context/AppointmentContext';
import { ChevronLeft } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { appointmentData, setCustomerInfo, setNotes } = useAppointment();
  
  const [name, setName] = useState(appointmentData.customerName);
  const [email, setEmail] = useState(appointmentData.customerEmail);
  const [phone, setPhone] = useState(appointmentData.customerPhone);
  const [notes, setNotesValue] = useState(appointmentData.notes);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  // Redirect to booking if no service is selected
  if (!appointmentData.service || !appointmentData.date || !appointmentData.timeSlot) {
    navigate('/booking');
    return null;
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }
    
    // Save customer info to context
    setCustomerInfo(name, email, phone);
    setNotes(notes);
    
    // Start processing
    setIsProcessing(true);
    setPaymentError(null);
    
    // In a real application, you would create a payment intent on your server
    // and confirm the payment here. For this demo, we'll simulate a successful payment.
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      // Navigate to confirmation page
      navigate('/confirmation');
    }, 2000);
    
    // Example of how you would handle a real payment:
    /*
    const cardElement = elements.getElement(CardElement);
    
    if (!cardElement) {
      setPaymentError('An error occurred with the payment form.');
      setIsProcessing(false);
      return;
    }
    
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name,
          email,
          phone,
        },
      });
      
      if (error) {
        setPaymentError(error.message || 'An error occurred with your payment.');
        setIsProcessing(false);
        return;
      }
      
      // Send paymentMethod.id to your server to complete the payment
      // const response = await fetch('/api/payments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     paymentMethodId: paymentMethod.id,
      //     amount: appointmentData.service.price * 100, // in cents
      //     serviceId: appointmentData.service.id,
      //     date: appointmentData.date,
      //     timeSlot: appointmentData.timeSlot,
      //     customerName: name,
      //     customerEmail: email,
      //     customerPhone: phone,
      //     notes,
      //   }),
      // });
      
      // const result = await response.json();
      
      // if (result.success) {
      //   navigate('/confirmation');
      // } else {
      //   setPaymentError(result.error || 'An error occurred with your payment.');
      // }
    } catch (err) {
      setPaymentError('An unexpected error occurred.');
    } finally {
      setIsProcessing(false);
    }
    */
  };
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <button
          onClick={() => navigate('/booking')}
          className="flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Booking
        </button>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Booking</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
        <h2 className="text-xl font-semibold mb-4">Appointment Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium">{appointmentData.service.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">
              {appointmentData.date && format(appointmentData.date, 'MMMM d, yyyy')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time:</span>
            <span className="font-medium">{appointmentData.timeSlot?.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Duration:</span>
            <span className="font-medium">{appointmentData.service.duration} minutes</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
            <span className="text-gray-800 font-semibold">Total:</span>
            <span className="font-bold text-lg">${appointmentData.service.price}</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotesValue(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          
          <div className="mb-6">
            <label htmlFor="card-element" className="block text-sm font-medium text-gray-700 mb-2">
              Credit or Debit Card
            </label>
            <div className="p-4 border border-gray-300 rounded-md bg-white">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />
            </div>
          </div>
          
          {paymentError && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
              {paymentError}
            </div>
          )}
          
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className={`w-full py-3 rounded-md font-medium text-white ${
              isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isProcessing ? 'Processing...' : `Pay $${appointmentData.service.price}`}
          </button>
          
          <p className="mt-4 text-sm text-gray-600 text-center">
            Your payment information is secure and encrypted.
          </p>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;