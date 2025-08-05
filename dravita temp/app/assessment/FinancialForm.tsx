'use client';

import { useState } from 'react';

interface FinancialFormProps {
  onComplete: (data: any) => void;
}

export default function FinancialForm({ onComplete }: FinancialFormProps) {
  const [formData, setFormData] = useState({
    annualIncome: '',
    employmentStatus: '',
    monthlyExpenses: '',
    existingInsurance: [],
    budgetForInsurance: '',
    dependents: '',
    emergencyFund: '',
    debtLoad: '',
    financialGoals: [],
    riskTolerance: '',
    investmentExperience: '',
    retirementPlanning: ''
  });

  const insuranceTypes = [
    'Health Insurance', 'Life Insurance', 'Dental Insurance', 'Vision Insurance',
    'Disability Insurance', 'Auto Insurance', 'Home Insurance', 'None'
  ];

  const financialGoals = [
    'Emergency Fund', 'Retirement Savings', 'Home Purchase', 'Education Fund',
    'Debt Reduction', 'Investment Growth', 'Travel Fund', 'Business Investment'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: string, option: string) => {
    setFormData(prev => {
      const currentArray = prev[field as keyof typeof prev] as string[];
      if (option === 'None') {
        return { ...prev, [field]: ['None'] };
      }
      const filteredArray = currentArray.filter(item => item !== 'None');
      if (filteredArray.includes(option)) {
        return { ...prev, [field]: filteredArray.filter(item => item !== option) };
      } else {
        return { ...prev, [field]: [...filteredArray, option] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Profile</h2>
        <p className="text-gray-600">
          Your financial information helps us recommend insurance plans that fit your budget and coverage needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Income and Employment */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income (USD)</label>
            <select
              value={formData.annualIncome}
              onChange={(e) => handleInputChange('annualIncome', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select income range</option>
              <option value="under-25k">Under $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-75k">$50,000 - $75,000</option>
              <option value="75k-100k">$75,000 - $100,000</option>
              <option value="100k-150k">$100,000 - $150,000</option>
              <option value="150k-200k">$150,000 - $200,000</option>
              <option value="over-200k">Over $200,000</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status</label>
            <select
              value={formData.employmentStatus}
              onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select status</option>
              <option value="full-time">Full-time Employee</option>
              <option value="part-time">Part-time Employee</option>
              <option value="self-employed">Self-employed</option>
              <option value="contractor">Independent Contractor</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
              <option value="retired">Retired</option>
            </select>
          </div>
        </div>

        {/* Monthly Expenses and Budget */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Living Expenses</label>
            <select
              value={formData.monthlyExpenses}
              onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select expense range</option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-2k">$1,000 - $2,000</option>
              <option value="2k-3k">$2,000 - $3,000</option>
              <option value="3k-5k">$3,000 - $5,000</option>
              <option value="5k-7k">$5,000 - $7,000</option>
              <option value="over-7k">Over $7,000</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Insurance Budget</label>
            <select
              value={formData.budgetForInsurance}
              onChange={(e) => handleInputChange('budgetForInsurance', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select budget</option>
              <option value="under-100">Under $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200-300">$200 - $300</option>
              <option value="300-500">$300 - $500</option>
              <option value="500-800">$500 - $800</option>
              <option value="over-800">Over $800</option>
            </select>
          </div>
        </div>

        {/* Existing Insurance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Existing Insurance Coverage (Select all that apply)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {insuranceTypes.map(type => (
              <label key={type} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.existingInsurance.includes(type)}
                  onChange={() => handleMultiSelect('existingInsurance', type)}
                  className="mr-3"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Dependents and Financial Situation */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Dependents</label>
            <select
              value={formData.dependents}
              onChange={(e) => handleInputChange('dependents', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select number</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4-plus">4 or more</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Fund Status</label>
            <select
              value={formData.emergencyFund}
              onChange={(e) => handleInputChange('emergencyFund', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select status</option>
              <option value="none">No emergency fund</option>
              <option value="minimal">Less than 1 month expenses</option>
              <option value="moderate">1-3 months expenses</option>
              <option value="good">3-6 months expenses</option>
              <option value="excellent">6+ months expenses</option>
            </select>
          </div>
        </div>

        {/* Debt and Risk Profile */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Debt Load</label>
            <select
              value={formData.debtLoad}
              onChange={(e) => handleInputChange('debtLoad', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select debt level</option>
              <option value="none">No significant debt</option>
              <option value="low">Low debt (under 20% of income)</option>
              <option value="moderate">Moderate debt (20-40% of income)</option>
              <option value="high">High debt (over 40% of income)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Risk Tolerance</label>
            <select
              value={formData.riskTolerance}
              onChange={(e) => handleInputChange('riskTolerance', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select tolerance</option>
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
          </div>
        </div>

        {/* Financial Goals */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Financial Goals (Select all that apply)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {financialGoals.map(goal => (
              <label key={goal} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.financialGoals.includes(goal)}
                  onChange={() => handleMultiSelect('financialGoals', goal)}
                  className="mr-3"
                />
                {goal}
              </label>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Investment Experience</label>
            <select
              value={formData.investmentExperience}
              onChange={(e) => handleInputChange('investmentExperience', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select experience</option>
              <option value="none">No investment experience</option>
              <option value="beginner">Beginner (1-2 years)</option>
              <option value="intermediate">Intermediate (3-5 years)</option>
              <option value="advanced">Advanced (5+ years)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Retirement Planning</label>
            <select
              value={formData.retirementPlanning}
              onChange={(e) => handleInputChange('retirementPlanning', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select status</option>
              <option value="none">No retirement planning</option>
              <option value="minimal">Minimal planning</option>
              <option value="active">Active planning</option>
              <option value="comprehensive">Comprehensive planning</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition cursor-pointer whitespace-nowrap"
          >
            Previous Step
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer whitespace-nowrap"
          >
            Generate AI Analysis
          </button>
        </div>
      </form>
    </div>
  );
}