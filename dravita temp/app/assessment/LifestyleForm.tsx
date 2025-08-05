'use client';

import { useState } from 'react';

interface LifestyleFormProps {
  onComplete: (data: any) => void;
}

export default function LifestyleForm({ onComplete }: LifestyleFormProps) {
  const [formData, setFormData] = useState({
    exerciseFrequency: '',
    exerciseType: [] as string[],
    dietType: '',
    sleepHours: '',
    stressLevel: '',
    workEnvironment: '',
    travelFrequency: '',
    hobbies: [] as string[],
    socialSupport: '',
    preventiveCare: '',
    mentalHealthSupport: '',
    workLifeBalance: '',
    riskActivities: [] as string[]
  });

  const exerciseTypes = [
    'Cardio', 'Weight Training', 'Yoga', 'Swimming', 'Running', 'Cycling',
    'Team Sports', 'Walking', 'Hiking', 'Dancing', 'None'
  ];

  const hobbyOptions = [
    'Reading', 'Cooking', 'Gardening', 'Music', 'Art', 'Travel',
    'Sports', 'Gaming', 'Photography', 'Volunteering', 'None'
  ];

  const riskActivities = [
    'Extreme Sports', 'Motorcycle Riding', 'Rock Climbing', 'Skydiving',
    'Scuba Diving', 'Racing', 'Contact Sports', 'None'
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Lifestyle Assessment</h2>
        <p className="text-gray-600">
          Your lifestyle choices help us understand your health risks and recommend appropriate coverage.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Exercise and Physical Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Exercise Frequency</label>
            <select
              value={formData.exerciseFrequency}
              onChange={(e) => handleInputChange('exerciseFrequency', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select frequency</option>
              <option value="never">Never</option>
              <option value="rarely">Rarely (less than once a week)</option>
              <option value="sometimes">Sometimes (1-2 times a week)</option>
              <option value="regularly">Regularly (3-4 times a week)</option>
              <option value="daily">Daily or almost daily</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Average Sleep Hours</label>
            <select
              value={formData.sleepHours}
              onChange={(e) => handleInputChange('sleepHours', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select hours</option>
              <option value="less-than-5">Less than 5 hours</option>
              <option value="5-6">5-6 hours</option>
              <option value="7-8">7-8 hours</option>
              <option value="9-plus">9+ hours</option>
            </select>
          </div>
        </div>

        {/* Exercise Types */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Types of Exercise (Select all that apply)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {exerciseTypes.map(type => (
              <label key={type} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.exerciseType.includes(type)}
                  onChange={() => handleMultiSelect('exerciseType', type)}
                  className="mr-3"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Diet and Stress */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Diet Type</label>
            <select
              value={formData.dietType}
              onChange={(e) => handleInputChange('dietType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select diet type</option>
              <option value="balanced">Balanced diet</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="keto">Ketogenic</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="fast-food">Mostly fast food</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stress Level</label>
            <select
              value={formData.stressLevel}
              onChange={(e) => handleInputChange('stressLevel', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select level</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
              <option value="very-high">Very High</option>
            </select>
          </div>
        </div>

        {/* Work and Environment */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Work Environment</label>
            <select
              value={formData.workEnvironment}
              onChange={(e) => handleInputChange('workEnvironment', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select environment</option>
              <option value="office">Office/Desk job</option>
              <option value="physical">Physical/Manual labor</option>
              <option value="healthcare">Healthcare setting</option>
              <option value="outdoor">Outdoor work</option>
              <option value="hazardous">Hazardous materials</option>
              <option value="remote">Remote work</option>
              <option value="retired">Retired</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Travel Frequency</label>
            <select
              value={formData.travelFrequency}
              onChange={(e) => handleInputChange('travelFrequency', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select frequency</option>
              <option value="never">Never</option>
              <option value="domestic-rare">Domestic travel rarely</option>
              <option value="domestic-frequent">Domestic travel frequently</option>
              <option value="international-rare">International travel rarely</option>
              <option value="international-frequent">International travel frequently</option>
            </select>
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Hobbies and Interests (Select all that apply)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {hobbyOptions.map(hobby => (
              <label key={hobby} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hobbies.includes(hobby)}
                  onChange={() => handleMultiSelect('hobbies', hobby)}
                  className="mr-3"
                />
                {hobby}
              </label>
            ))}
          </div>
        </div>

        {/* Risk Activities */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            High-Risk Activities (Select all that apply)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {riskActivities.map(activity => (
              <label key={activity} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.riskActivities.includes(activity)}
                  onChange={() => handleMultiSelect('riskActivities', activity)}
                  className="mr-3"
                />
                {activity}
              </label>
            ))}
          </div>
        </div>

        {/* Social and Mental Health */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Social Support System</label>
            <select
              value={formData.socialSupport}
              onChange={(e) => handleInputChange('socialSupport', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select level</option>
              <option value="strong">Strong family/friends network</option>
              <option value="moderate">Moderate support</option>
              <option value="limited">Limited support</option>
              <option value="isolated">Socially isolated</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Work-Life Balance</label>
            <select
              value={formData.workLifeBalance}
              onChange={(e) => handleInputChange('workLifeBalance', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              required
            >
              <option value="">Select balance</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
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
            Continue to Financial Profile
          </button>
        </div>
      </form>
    </div>
  );
}