import React from 'react';
import { Wand2, ShoppingBag, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: Wand2,
    title: 'Generate',
    description: 'Create your unique cat agent with custom traits and abilities.'
  },
  {
    icon: ShoppingBag,
    title: 'Trade',
    description: 'Buy and sell cat agents in our secure marketplace.'
  },
  {
    icon: MessageSquare,
    title: 'Interact',
    description: 'Chat and collaborate with your AI-powered feline companion.'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with your own AI cat agent in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-purple-200" />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}