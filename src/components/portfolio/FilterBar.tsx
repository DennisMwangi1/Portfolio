import React from 'react';
import { Search } from 'lucide-react';
import { TECHNOLOGIES } from '@/constants';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedTechnology: string;
  setSelectedTechnology: (t: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedTechnology,
  setSelectedTechnology
}) => {
  return (
    <div className="sticky top-0 z-40 bg-white border-b-2 border-gray-100 px-4 py-3">
      <div className="flex gap-2 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full bg-white border border-gray-300 pl-9 pr-4 py-2 text-sm text-gray-900 rounded-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black placeholder:text-gray-400 font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 rounded-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
          value={selectedTechnology}
          onChange={(e) => setSelectedTechnology(e.target.value)}
        >
          <option value="">All Technologies</option>
          {TECHNOLOGIES.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;