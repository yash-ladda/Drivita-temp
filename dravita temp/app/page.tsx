'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20healthcare%20technology%20background%20with%20digital%20medical%20data%20visualization%2C%20AI%20analytics%20dashboard%2C%20health%20insurance%20concept%20with%20professional%20medical%20environment%2C%20clean%20minimalist%20design%20with%20blue%20and%20white%20color%20scheme%2C%20futuristic%20medical%20technology%20interface&width=1200&height=600&seq=hero1&orientation=landscape"
            alt="AI Healthcare Technology" 
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Smart Health Insurance
                <span className="block text-indigo-200">Powered by AI</span>
              </h1>
              <p className="text-xl text-indigo-100">
                Get personalized insurance recommendations based on your health data, lifestyle, and financial situation. Our AI analyzes your medical risks to find the perfect coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition cursor-pointer whitespace-nowrap">
                  Start Risk Assessment
                </Link>
                <Link href="/plans" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition cursor-pointer whitespace-nowrap">
                  View Insurance Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI-Powered Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary insurance selection using advanced analytics and machine learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-brain-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Risk Analysis</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms analyze your health records and lifestyle to predict future medical risks
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Get tailored insurance suggestions based on your unique health profile and financial situation
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Providers</h3>
              <p className="text-gray-600">
                We prioritize insurance companies with proven track records of hassle-free reimbursement processes
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Analytics</h3>
              <p className="text-gray-600">
                Comprehensive data analysis of lifestyle patterns and health trends for accurate predictions
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-money-dollar-circle-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Optimization</h3>
              <p className="text-gray-600">
                Find the best coverage that fits your budget without compromising on essential benefits
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance for all your insurance questions and claim processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our AI System Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get your personalized insurance recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health Assessment</h3>
              <p className="text-gray-600">
                Complete a comprehensive health and lifestyle questionnaire
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our ML algorithms analyze your data to predict future health risks
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plan Matching</h3>
              <p className="text-gray-600">
                Get personalized recommendations from trusted insurance providers
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Purchase</h3>
              <p className="text-gray-600">
                Compare plans and purchase directly through our secure platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <p className="text-gray-600">Insurance Partners</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">$2M+</div>
              <p className="text-gray-600">Claims Processed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Insurance Plan?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of satisfied customers who found their ideal health insurance through our AI-powered platform
          </p>
          <Link href="/assessment" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition cursor-pointer whitespace-nowrap">
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}