import React from 'react';
import type { CatAgent } from '../../types/CatAgent';
import AttributeSelector from './AttributeSelector';
import GoalInput from './GoalInput';

interface GeneratorFormProps {
  agent: Partial<CatAgent>;
  onAgentChange: (updates: Partial<CatAgent>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PERSONALITY_OPTIONS = ['Playful', 'Curious', 'Wise', 'Mysterious', 'Energetic', 'Calm'];
const EXPERTISE_OPTIONS = ['Problem Solving', 'Creative Writing', 'Data Analysis', 'Strategic Planning', 'Communication'];

export default function GeneratorForm({ agent, onAgentChange, onSubmit }: GeneratorFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={agent.name || ''}
          onChange={(e) => onAgentChange({ name: e.target.value })}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <AttributeSelector
        label="Personality Traits"
        options={PERSONALITY_OPTIONS}
        selected={agent.personality || []}
        onChange={(personality) => onAgentChange({ personality })}
      />

      <AttributeSelector
        label="Expertise"
        options={EXPERTISE_OPTIONS}
        selected={agent.expertise || []}
        onChange={(expertise) => onAgentChange({ expertise })}
      />

      <GoalInput
        goals={agent.goals || []}
        onChange={(goals) => onAgentChange({ goals })}
      />

      <button
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium"
      >
        Create Cat Agent
      </button>
    </form>
  );
}