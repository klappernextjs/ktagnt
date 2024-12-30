import React, { useState } from 'react';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader';
import MarketplaceStats from '../components/marketplace/MarketplaceStats';
import MarketplaceFilters from '../components/marketplace/MarketplaceFilters';
import CatAgentCard from '../components/marketplace/CatAgentCard';
import type { CatAgent } from '../types/CatAgent';
import { generateCatAvatar } from '../utils/avatar';

const SAMPLE_AGENTS: CatAgent[] = [
  {
    id: '1',
    name: 'Professor Whiskers',
    personality: ['Wise', 'Calm'],
    expertise: ['Data Analysis', 'Strategic Planning'],
    goals: ['Help humans make better decisions'],
    rarity: 'legendary',
    imageUrl: generateCatAvatar('Professor Whiskers'),
    price: '0.5',
    owner: '0x1234...5678'
  },
  {
    id: '2',
    name: 'Luna',
    personality: ['Playful', 'Curious'],
    expertise: ['Creative Writing', 'Communication'],
    goals: ['Inspire creativity', 'Share joy'],
    rarity: 'rare',
    imageUrl: generateCatAvatar('Luna'),
    price: '0.2',
    owner: '0x8765...4321'
  }
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MarketplaceStats />
        
        <MarketplaceFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SAMPLE_AGENTS.map((agent) => (
            <CatAgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
}