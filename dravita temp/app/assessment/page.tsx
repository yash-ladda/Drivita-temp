'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HealthForm from './HealthForm';
import LifestyleForm from './LifestyleForm';
import FinancialForm from './FinancialForm';
import ResultsDisplay from './ResultsDisplay';

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    health: {},
    lifestyle: {},
    financial: {}
  });

  const handleStepComplete = (stepData: any, step: number) => {
    const stepKey = step === 1 ? 'health' : step === 2 ? 'lifestyle' : 'financial';
    setAssessmentData(prev => ({
      ...prev,
      [stepKey]: stepData
    }));
    
    if (step < 4) {
      setCurrentStep(step + 1);
    }
  };

  const steps = [
    { id: 1, title: 'Health Information', icon: 'ri-heart-pulse-line' },
    { id: 2, title: 'Lifestyle Assessment', icon: 'ri-user-heart-line' },
    { id: 3, title: 'Financial Profile', icon: 'ri-money-dollar-circle-line' },
    { id: 4, title: 'AI Analysis Results', icon: 'ri-brain-line' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <i className={`${step.icon} text-lg`}></i>
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'}`}>
                    Step {step.id}
                  </p>
                  <p className={`text-xs ${currentStep >= step.id ? 'text-blue-800' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 ml-8 mr-8 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {currentStep === 1 && (
            <HealthForm onComplete={(data) => handleStepComplete(data, 1)} />
          )}
          {currentStep === 2 && (
            <LifestyleForm onComplete={(data) => handleStepComplete(data, 2)} />
          )}
          {currentStep === 3 && (
            <FinancialForm onComplete={(data) => handleStepComplete(data, 3)} />
          )}
          {currentStep === 4 && (
            <ResultsDisplay assessmentData={assessmentData} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}