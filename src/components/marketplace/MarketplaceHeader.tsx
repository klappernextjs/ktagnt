import React from 'react';
import { useAccount } from 'wagmi';

export default function MarketplaceHeader() {
  const { address } = useAccount();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Cat Agent Marketplace
          </h1>
          <p className="mt-6 max-w-3xl text-xl">
            Discover and collect unique AI-powered cat agents with distinct personalities and abilities.
          </p>
          
          <div className="mt-8 flex space-x-4">
            {address && (
              <button className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-6 py-3 rounded-lg hover:bg-opacity-30 transition-all">
                My Collection
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}