import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Cat Agents for Your Digital World
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Generate unique cat agents with distinct personalities and abilities. Train them, trade them, and let them assist you in your digital journey.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/generate"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-purple-900 font-semibold hover:bg-purple-50 transition-colors"
            >
              Create Your Agent <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
    </div>
  );
}