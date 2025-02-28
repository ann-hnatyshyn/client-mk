import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We offer a 15 minutes phone consultation, for free
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap mb-6">
                  <div className="flex items-center mr-6 mb-2">
                    <Clock className="h-5 w-5 text-sky-600 mr-2" />
                    <span className="text-gray-700">{service.duration} minutes</span>
                  </div>
                  {/* <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-gray-700">${service.price}</span>
                  </div> */}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Professional consultation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Personalized recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Follow-up support</span>
                    </li>
                  </ul>
                </div>
                
                <Link
                  to="/booking"
                  state={{ selectedService: service }}
                  className="block w-full bg-sky-600 text-white text-center py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer in person sessions or virtual?</h3>
                <p className="text-gray-700">
                  We only offer Virtual care. Research shows that it is equally as effective as in-person. 
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-700">
                  We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I reschedule my appointment?</h3>
                <p className="text-gray-700">
                  Yes, you can reschedule your appointment up to 24 hours before your scheduled time. Please contact us directly to make changes to your booking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer professional consultation?</h3>
                <p className="text-gray-700">
                  Yes, we offer clinical consultation to healthcare practitoners by phone or virtually. Specifically, our expertise includes cognitive-behavioural therapy and dialectical behaviour therapy for a variety of mental health difficulties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I use my insurance to pay?</h3>
                <p className="text-gray-700">
                Meghan Kennedy is a registered social worker and clinical counselor. You can submit your receipt to your insurance company for reimbursement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I pay for my session?</h3>
                <p className="text-gray-700">
                To pay by credit card, please provide your card information in advance; your card will be charged once the session is complete. For e-transfer payments, we require payment prior to the session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your appointment today and experience our professional services firsthand.
          </p>
          <Link
            to="/booking"
            className="bg-white text-indigo-600 px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-100 transition duration-300 inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;