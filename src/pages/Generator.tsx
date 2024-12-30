import React, { useState } from 'react';
import type { CatAgent } from '../types/CatAgent';
import GeneratorPreview from '../components/generator/GeneratorPreview';
import GeneratorForm from '../components/generator/GeneratorForm';

export default function Generator() {
  const [agent, setAgent] = useState<Partial<CatAgent>>({
    name: '',
    personality: [],
    expertise: [],
    goals: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(agent);
    // Here you would typically mint the NFT
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GeneratorPreview agent={agent} />
        <GeneratorForm
          agent={agent}
          onAgentChange={(updates) => setAgent((prev) => ({ ...prev, ...updates }))}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}