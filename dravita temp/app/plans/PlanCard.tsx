'use client';

import { useState } from 'react';

interface Plan {
  id: number;
  name: string;
  provider: string;
  category: string;
  monthlyPremium: number;
  deductible: number;
  coverage: string;
  maxOutOfPocket: number;
  networkSize: string;
  rating: number;
  keyBenefits: string[];
  reimbursementRating: number;
  claimsProcessTime: string;
}

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'basic': return 'ri-shield-line';
      case 'comprehensive': return 'ri-shield-check-line';
      case 'premium': return 'ri-vip-crown-line';
      case 'family': return 'ri-group-line';
      default: return 'ri-heart-line';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'basic': return 'bg-green-100 text-green-800';
      case 'comprehensive': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'family': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
            <p className="text-gray-600">{plan.provider}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(plan.category)} flex items-center`}>
            <div className="w-4 h-4 flex items-center justify-center mr-1">
              <i className={getCategoryIcon(plan.category)}></i>
            </div>
            {plan.category.charAt(0).toUpperCase() + plan.category.slice(1)}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-indigo-600">${plan.monthlyPremium}</span>
            <span className="text-gray-600 ml-1">/month</span>
          </div>
          <p className="text-sm text-gray-500">Deductible: ${plan.deductible.toLocaleString()}</p>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center">
            <div className="flex items-center text-yellow-400 mr-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-star-fill"></i>
              </div>
              <span className="text-sm font-semibold text-gray-900 ml-1">{plan.rating}</span>
            </div>
            <span className="text-xs text-gray-500">Overall</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-green-500 mr-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-money-dollar-circle-fill"></i>
              </div>
              <span className="text-sm font-semibold text-gray-900 ml-1">{plan.reimbursementRating}</span>
            </div>
            <span className="text-xs text-gray-500">Reimbursement</span>
          </div>
        </div>

        {/* Coverage */}
        <p className="text-gray-600 text-sm mb-4">{plan.coverage}</p>

        {/* Key Benefits */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {plan.keyBenefits.slice(0, 4).map((benefit, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                {benefit}
              </span>
            ))}
            {plan.keyBenefits.length > 4 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                +{plan.keyBenefits.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Network Size</span>
            <p className="font-semibold text-gray-900">{plan.networkSize}</p>
          </div>
          <div>
            <span className="text-gray-500">Max Out-of-Pocket</span>
            <p className="font-semibold text-gray-900">${plan.maxOutOfPocket.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Expandable Details */}
      {showDetails && (
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Claims Processing</h4>
              <div className="flex items-center text-sm">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-time-line text-gray-400"></i>
                </div>
                <span className="text-gray-600">Average processing time: {plan.claimsProcessTime}</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">All Benefits</h4>
              <div className="flex flex-wrap gap-1">
                {plan.keyBenefits.map((benefit, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Why This Provider?</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  <span>Fast reimbursement process ({plan.claimsProcessTime})</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  <span>High customer satisfaction rating ({plan.reimbursementRating}/5.0)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  <span>Extensive provider network ({plan.networkSize})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="p-6 bg-white">
        <div className="flex gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer whitespace-nowrap"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
}