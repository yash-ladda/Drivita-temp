'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ResultsDisplayProps {
  assessmentData: {
    health: any;
    lifestyle: any;
    financial: any;
  };
}

export default function ResultsDisplay({ assessmentData }: ResultsDisplayProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [riskScore, setRiskScore] = useState(0);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      const calculatedRisk = calculateRiskScore(assessmentData);
      setRiskScore(calculatedRisk);
      setRecommendations(generateRecommendations(calculatedRisk, assessmentData));
      setIsAnalyzing(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [assessmentData]);

  const calculateRiskScore = (data: any) => {
    let score = 50; // Base score

    // Health factors
    if (data.health.age) {
      const age = parseInt(data.health.age);
      if (age > 65) score += 20;
      else if (age > 50) score += 10;
      else if (age < 30) score -= 5;
    }

    // Chronic conditions
    if (data.health.chronicConditions && !data.health.chronicConditions.includes('None')) {
      score += data.health.chronicConditions.length * 8;
    }

    // Lifestyle factors
    if (data.lifestyle.smokingStatus === 'current') score += 15;
    if (data.lifestyle.exerciseFrequency === 'never') score += 10;
    if (data.lifestyle.stressLevel === 'high' || data.lifestyle.stressLevel === 'very-high') score += 8;

    // Risk activities
    if (data.lifestyle.riskActivities && !data.lifestyle.riskActivities.includes('None')) {
      score += data.lifestyle.riskActivities.length * 5;
    }

    return Math.min(Math.max(score, 0), 100);
  };

  const generateRecommendations = (risk: number, data: any) => {
    const budget = data.financial.budgetForInsurance;
    const dependents = parseInt(data.financial.dependents) || 0;
    
    const plans = [
      {
        id: 1,
        name: 'Essential Health Plan',
        provider: 'SecureHealth Insurance',
        monthlyPremium: 180,
        deductible: 2500,
        coverage: 'Basic medical coverage with preventive care',
        reimbursementRating: 4.2,
        features: ['Preventive Care', 'Emergency Services', 'Prescription Drugs', 'Mental Health'],
        match: risk < 40 ? 95 : 75
      },
      {
        id: 2,
        name: 'Comprehensive Care Plan',
        provider: 'HealthFirst Premium',
        monthlyPremium: 320,
        deductible: 1500,
        coverage: 'Comprehensive medical with specialist care',
        reimbursementRating: 4.6,
        features: ['All Essential Features', 'Specialist Care', 'Physical Therapy', 'Dental & Vision'],
        match: risk > 30 && risk < 70 ? 92 : 80
      },
      {
        id: 3,
        name: 'Premium Protection Plan',
        provider: 'Elite Medical Coverage',
        monthlyPremium: 480,
        deductible: 500,
        coverage: 'Premium coverage with concierge services',
        reimbursementRating: 4.8,
        features: ['All Comprehensive Features', 'Concierge Services', 'International Coverage', 'Alternative Medicine'],
        match: risk > 60 ? 96 : 70
      }
    ];

    return plans.sort((a, b) => b.match - a.match).slice(0, 3);
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: 'Low', color: 'text-green-600', bg: 'bg-green-100' };
    if (score < 60) return { level: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { level: 'High', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const riskInfo = getRiskLevel(riskScore);

  if (isAnalyzing) {
    return (
      <div className="text-center py-16">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border-t-4 border-blue-600 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Analysis in Progress</h2>
          <p className="text-gray-600 mb-8">
            Our advanced algorithms are analyzing your health, lifestyle, and financial data to provide personalized recommendations...
          </p>
        </div>
        
        <div className="max-w-md mx-auto space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Analyzing health profile</span>
            <i className="ri-check-line text-green-500"></i>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Processing lifestyle factors</span>
            <i className="ri-check-line text-green-500"></i>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Evaluating financial capacity</span>
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Generating recommendations</span>
            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Insurance Analysis</h2>
        <p className="text-gray-600">
          Based on your comprehensive assessment, our AI has generated personalized recommendations.
        </p>
      </div>

      {/* Risk Assessment Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Assessment Summary</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e7eb" strokeWidth="8"/>
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke={riskScore < 30 ? '#10b981' : riskScore < 60 ? '#f59e0b' : '#ef4444'}
                  strokeWidth="8"
                  strokeDasharray={`${(riskScore / 100) * 251.2} 251.2`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">{riskScore}</span>
              </div>
            </div>
            <p className={`font-semibold ${riskInfo.color}`}>Risk Score</p>
          </div>

          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${riskInfo.bg} ${riskInfo.color} font-semibold mb-4`}>
              {riskInfo.level} Risk
            </div>
            <p className="text-sm text-gray-600">
              Your overall health and lifestyle risk level
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{recommendations.length}</div>
            <p className="text-sm text-gray-600 font-semibold">Recommended Plans</p>
            <p className="text-xs text-gray-500">Tailored to your profile</p>
          </div>
        </div>
      </div>

      {/* Key Factors */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Key Risk Factors Identified</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Health Factors</h4>
            <div className="space-y-2">
              {assessmentData.health.age && (
                <div className="flex items-center text-sm">
                  <i className="ri-user-line w-4 h-4 mr-2 text-blue-500"></i>
                  Age: {assessmentData.health.age} years
                </div>
              )}
              {assessmentData.health.chronicConditions && !assessmentData.health.chronicConditions.includes('None') && (
                <div className="flex items-center text-sm">
                  <i className="ri-heart-pulse-line w-4 h-4 mr-2 text-red-500"></i>
                  {assessmentData.health.chronicConditions.length} chronic condition(s)
                </div>
              )}
              {assessmentData.health.smokingStatus === 'current' && (
                <div className="flex items-center text-sm">
                  <i className="ri-error-warning-line w-4 h-4 mr-2 text-red-500"></i>
                  Current smoker
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Lifestyle Factors</h4>
            <div className="space-y-2">
              {assessmentData.lifestyle.exerciseFrequency && (
                <div className="flex items-center text-sm">
                  <i className="ri-run-line w-4 h-4 mr-2 text-green-500"></i>
                  Exercise: {assessmentData.lifestyle.exerciseFrequency}
                </div>
              )}
              {assessmentData.lifestyle.stressLevel && (
                <div className="flex items-center text-sm">
                  <i className="ri-mind-map w-4 h-4 mr-2 text-yellow-500"></i>
                  Stress level: {assessmentData.lifestyle.stressLevel}
                </div>
              )}
              {assessmentData.lifestyle.riskActivities && !assessmentData.lifestyle.riskActivities.includes('None') && (
                <div className="flex items-center text-sm">
                  <i className="ri-alert-line w-4 h-4 mr-2 text-orange-500"></i>
                  {assessmentData.lifestyle.riskActivities.length} high-risk activities
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Plans */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">AI-Recommended Insurance Plans</h3>
        
        <div className="space-y-6">
          {recommendations.map((plan, index) => (
            <div key={plan.id} className={`relative border rounded-xl p-6 ${
              index === 0 ? 'border-blue-500 bg-blue-50/30' : 'border-gray-200 bg-white'
            }`}>
              {index === 0 && (
                <div className="absolute -top-3 left-6 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Best Match
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                  <p className="text-sm text-gray-600">{plan.provider}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400 mr-1"></i>
                      <span className="text-sm font-semibold">{plan.reimbursementRating}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">Reimbursement Rating</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">${plan.monthlyPremium}</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className={`mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                    index === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {plan.match}% match
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Deductible</p>
                  <p className="font-semibold">${plan.deductible.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Coverage</p>
                  <p className="font-semibold">{plan.coverage}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {plan.features.map((feature: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/plans"
                  className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer whitespace-nowrap"
                >
                  View Details
                </Link>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer whitespace-nowrap">
                  Compare Plans
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-file-list-3-line text-white text-lg"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Review Plans</h4>
            <p className="text-sm text-gray-600">
              Compare detailed features and benefits of recommended plans
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-customer-service-2-line text-white text-lg"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Consult Expert</h4>
            <p className="text-sm text-gray-600">
              Speak with our insurance advisors for personalized guidance
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-secure-payment-line text-white text-lg"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Enroll Online</h4>
            <p className="text-sm text-gray-600">
              Complete your enrollment securely in just a few minutes
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/plans"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer whitespace-nowrap mr-4"
          >
            Explore All Plans
          </Link>
          <button className="inline-block border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer whitespace-nowrap">
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
}