'use client';

import { useState } from 'react';

interface HealthFormProps {
  onComplete: (data: any) => void;
}

export default function HealthForm({ onComplete }: HealthFormProps) {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    chronicConditions: [] as string[],
    medications: '',
    allergies: '',
    familyHistory: [] as string[],
    smokingStatus: '',
    alcoholConsumption: '',
    exerciseFrequency: '',
    lastCheckup: '',
    bloodPressure: '',
    cholesterolLevel: '',
    diabetesStatus: ''
  });

  const chronicConditionOptions = [
    'Diabetes', 'Hypertension', 'Heart Disease', 'Asthma', 'Cancer History',
    'Kidney Disease', 'Liver Disease', 'Mental Health Conditions', 'Arthritis',
    'Thyroid Disorders', 'None'
  ];

  const familyHistoryOptions = [
    'Heart Disease', 'Cancer', 'Diabetes', 'Stroke', 'Alzheimer\'s',
    'Mental Health Issues', 'Kidney Disease', 'None'
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Information</h2>
        <p className="text-gray-600">
          Please provide accurate health information for our AI to analyze your medical risk profile.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <div className="flex gap-4">
              {['Male', 'Female', 'Other'].map(option => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
            <input
              type="number"
              value={formData.height}
              onChange={(e) => handleInputChange('height', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Chronic Conditions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Existing Chronic Conditions (Select all that apply)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {chronicConditionOptions.map(condition => (
              <label key={condition} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.chronicConditions.includes(condition)}
                  onChange={() => handleMultiSelect('chronicConditions', condition)}
                  className="mr-3"
                />
                {condition}
              </label>
            ))}
          </div>
        </div>

        {/* Family History */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Family Medical History (Select all that apply)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {familyHistoryOptions.map(condition => (
              <label key={condition} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.familyHistory.includes(condition)}
                  onChange={() => handleMultiSelect('familyHistory', condition)}
                  className="mr-3"
                />
                {condition}
              </label>
            ))}
          </div>
        </div>

        {/* Lifestyle Factors */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Smoking Status</label>
            <select
              value={formData.smokingStatus}
              onChange={(e) => handleInputChange('smokingStatus', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select status</option>
              <option value="never">Never smoked</option>
              <option value="former">Former smoker</option>
              <option value="current">Current smoker</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alcohol Consumption</label>
            <select
              value={formData.alcoholConsumption}
              onChange={(e) => handleInputChange('alcoholConsumption', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select frequency</option>
              <option value="none">None</option>
              <option value="occasional">Occasional (1-2 drinks/week)</option>
              <option value="moderate">Moderate (3-7 drinks/week)</option>
              <option value="heavy">Heavy (8+ drinks/week)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
          <textarea
            value={formData.medications}
            onChange={(e) => handleInputChange('medications', e.target.value)}
            rows={3}
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="List any medications you're currently taking..."
          />
          <p className="text-xs text-gray-500 mt-1">{formData.medications.length}/500 characters</p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer whitespace-nowrap"
          >
            Continue to Lifestyle Assessment
          </button>
        </div>
      </form>
    </div>
  );
}