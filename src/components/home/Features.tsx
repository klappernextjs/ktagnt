import React from 'react';
import { Brain, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI',
    description: 'Powered by cutting-edge artificial intelligence for natural interactions and learning capabilities.'
  },
  {
    icon: Sparkles,
    title: 'Unique Personalities',
    description: 'Each cat agent has its own distinct personality traits, making them truly one-of-a-kind.'
  },
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Built on blockchain technology for secure and transparent agent ownership and trading.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Cat Agents?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of digital assistance with our unique blend of AI and feline charm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}