import React from 'react';
import { Shield, Users, Award, Clock, RefreshCw, Eye, Gauge } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Skills to Help You Cope, Communicate, and Thrive.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">From Experience to Expertise</h2>
              <p className="text-gray-700 mb-4">
              With a Master’s degree in Social Work and over a decade of experience as a clinical counselor, we have worked within health authorities across four different provinces, providing compassionate and evidence-based care.
              </p>
              <p className="text-gray-700 mb-4">
              Specializing in Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT), we help individuals develop practical skills to manage anxiety, depression, and emotional distress.
              </p>
              <p className="text-gray-700">
              Our approach focuses on teaching mindfulness, emotional regulation, distress tolerance, and effective communication—empowering clients to build resilience and create meaningful change in their lives. Whether you're navigating life’s challenges or seeking tools for personal growth, we are here to support you every step of the way.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dialectical Behavior Therapy (DBT) is based on several core values and principles that guide its approach to treatment. These include
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Balance Between Acceptance and Change</h3>
              <p className="text-gray-600">
              DBT teaches individuals to accept their emotions and experiences while also working towards positive change. This balance is key to fostering personal growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4"> Mindfulness</h3>
              <p className="text-gray-600">
              A core DBT skill, mindfulness helps individuals stay present, reduce emotional reactivity, and develop greater self-awareness in their daily lives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Gauge className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Emotional Regulation</h3>
              <p className="text-gray-600">
              DBT provides practical skills to manage intense emotions, reduce impulsive reactions, and build emotional resilience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Distress Tolerance</h3>
              <p className="text-gray-600">
              Rather than avoiding or suppressing distress, DBT helps individuals tolerate difficult emotions and situations in healthy ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals behind AppointEase who make it all possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">David Mitchell</h3>
              <p className="text-indigo-600 mb-4">CEO & Founder</p>
              <p className="text-gray-600">
                With over 15 years of experience in tech and business management, David leads our company vision and strategy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Jennifer Lee</h3>
              <p className="text-indigo-600 mb-4">CTO</p>
              <p className="text-gray-600">
                Jennifer oversees our technical operations and ensures our platform remains cutting-edge and reliable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Marcus Johnson</h3>
              <p className="text-indigo-600 mb-4">Head of Customer Success</p>
              <p className="text-gray-600">
                Marcus and his team ensure that our clients receive the support they need to make the most of our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;