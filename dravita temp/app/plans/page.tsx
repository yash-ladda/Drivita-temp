'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PlanCard from './PlanCard';

export default function PlansPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const categories = [
    { id: 'all', name: 'All Plans', icon: 'ri-heart-line' },
    { id: 'basic', name: 'Basic Coverage', icon: 'ri-shield-line' },
    { id: 'comprehensive', name: 'Comprehensive', icon: 'ri-shield-check-line' },
    { id: 'premium', name: 'Premium Plans', icon: 'ri-vip-crown-line' },
    { id: 'family', name: 'Family Plans', icon: 'ri-group-line' }
  ];

  const insurancePlans = [
    {
      id: 1,
      name: 'HealthGuard Basic',
      provider: 'SecureHealth Insurance',
      category: 'basic',
      monthlyPremium: 89,
      deductible: 2500,
      coverage: 'Essential medical care, emergency services, prescription drugs',
      maxOutOfPocket: 8000,
      networkSize: '15K+ providers',
      rating: 4.2,
      keyBenefits: ['Emergency care', 'Prescription coverage', 'Preventive care', 'Telehealth'],
      reimbursementRating: 4.1,
      claimsProcessTime: '3-5 days'
    },
    {
      id: 2,
      name: 'Complete Care Plus',
      provider: 'TrustWell Health',
      category: 'comprehensive',
      monthlyPremium: 149,
      deductible: 1500,
      coverage: 'Comprehensive medical, dental, vision, mental health services',
      maxOutOfPocket: 6000,
      networkSize: '25K+ providers',
      rating: 4.6,
      keyBenefits: ['All medical services', 'Dental & Vision', 'Mental health', 'Specialist care', 'Maternity'],
      reimbursementRating: 4.7,
      claimsProcessTime: '2-3 days'
    },
    {
      id: 3,
      name: 'Premium Elite',
      provider: 'EliteHealth Solutions',
      category: 'premium',
      monthlyPremium: 299,
      deductible: 500,
      coverage: 'Premium healthcare with concierge services and global coverage',
      maxOutOfPocket: 3000,
      networkSize: '50K+ providers',
      rating: 4.9,
      keyBenefits: ['Concierge service', 'Global coverage', 'No referrals needed', 'Premium facilities', '24/7 support'],
      reimbursementRating: 4.9,
      claimsProcessTime: '1-2 days'
    },
    {
      id: 4,
      name: 'Family Protection',
      provider: 'FamilyFirst Insurance',
      category: 'family',
      monthlyPremium: 349,
      deductible: 2000,
      coverage: 'Comprehensive family coverage for up to 6 members',
      maxOutOfPocket: 12000,
      networkSize: '30K+ providers',
      rating: 4.5,
      keyBenefits: ['Covers 6 family members', 'Pediatric care', 'Maternity care', 'Family wellness', 'Emergency care'],
      reimbursementRating: 4.4,
      claimsProcessTime: '2-4 days'
    },
    {
      id: 5,
      name: 'SmartChoice Basic',
      provider: 'ValueHealth Corp',
      category: 'basic',
      monthlyPremium: 69,
      deductible: 3000,
      coverage: 'Basic medical coverage with essential services',
      maxOutOfPocket: 9000,
      networkSize: '12K+ providers',
      rating: 3.9,
      keyBenefits: ['Emergency care', 'Primary care', 'Generic prescriptions', 'Preventive services'],
      reimbursementRating: 3.8,
      claimsProcessTime: '4-6 days'
    },
    {
      id: 6,
      name: 'MediComplete Pro',
      provider: 'ProHealth Alliance',
      category: 'comprehensive',
      monthlyPremium: 189,
      deductible: 1000,
      coverage: 'Professional-grade healthcare with advanced diagnostics',
      maxOutOfPocket: 5000,
      networkSize: '35K+ providers',
      rating: 4.7,
      keyBenefits: ['Advanced diagnostics', 'Specialist access', 'Surgery coverage', 'Rehabilitation', 'Mental health'],
      reimbursementRating: 4.6,
      claimsProcessTime: '1-3 days'
    }
  ];

  const filteredPlans = insurancePlans.filter(plan => 
    selectedCategory === 'all' || plan.category === selectedCategory
  );

  const sortedPlans = [...filteredPlans].sort((a, b) => {
    if (sortBy === 'price') return a.monthlyPremium - b.monthlyPremium;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'deductible') return a.deductible - b.deductible;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Insurance Plan</h1>
          <p className="text-xl text-blue-100 mb-8">
            Compare plans from trusted providers with excellent reimbursement records
          </p>
          <Link href="/assessment" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition cursor-pointer whitespace-nowrap">
            Get Personalized Recommendations
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full border transition cursor-pointer whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    <i className={`${category.icon} mr-2`}></i>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Sort by</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="price">Monthly Premium</option>
                <option value="rating">Customer Rating</option>
                <option value="deductible">Deductible Amount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {sortedPlans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl text-white p-8 mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-indigo-100 mb-6">
            Our AI-powered assessment can recommend the best plans for your specific needs
          </p>
          <Link href="/assessment" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition cursor-pointer whitespace-nowrap">
            Start Free Assessment
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}