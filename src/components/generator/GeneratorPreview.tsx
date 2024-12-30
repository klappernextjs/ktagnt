import React from 'react';
import type { CatAgent } from '../../types/CatAgent';
import { generateCatAvatar } from '../../utils/avatar';

interface GeneratorPreviewProps {
  agent: Partial<CatAgent>;
}

export default function GeneratorPreview({ agent }: GeneratorPreviewProps) {
  const avatarUrl = generateCatAvatar(agent.name || 'default');

  return (
    <div className="sticky top-8 space-y-4">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="aspect-square p-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <img
            src={avatarUrl}
            alt="Cat Preview"
            className="w-full h-full object-contain transform transition-transform hover:scale-105"
          />
        </div>
        {agent.rarity && (
          <span className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-medium ${
            agent.rarity === 'legendary' ? 'bg-yellow-400 text-yellow-900' :
            agent.rarity === 'epic' ? 'bg-purple-400 text-purple-900' :
            agent.rarity === 'rare' ? 'bg-blue-400 text-blue-900' :
            'bg-gray-400 text-gray-900'
          }`}>
            {agent.rarity}
          </span>
        )}
        {agent.name && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{agent.name}</h3>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          const rarities = ['common', 'rare', 'epic', 'legendary'] as const;
          const rarity = rarities[Math.floor(Math.random() * rarities.length)];
          agent.rarity = rarity;
        }}
        className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Generate New Look
      </button>
    </div>
  );
}