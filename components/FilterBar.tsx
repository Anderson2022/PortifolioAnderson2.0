import React from 'react';
import { TECH_CATEGORIES } from '../data/projects';
import { Search, Grid, List, Filter } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  filteredCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedStatus,
  onSelectStatus,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  filteredCount,
}) => {
  return (
    <div id="filter-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8 scroll-mt-28">
      
      {/* Search & Top Actions Row */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white/90 border border-slate-200 mb-6 shadow-lg">
        
        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
            <Search className="w-5 h-5 text-cyan-500" />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por nome, tech ou descrição..."
            className="w-full pl-12 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
          />
        </div>

        {/* View mode toggle & Status Filters */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4">
          
          {/* Status Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
            <span className="px-2.5 py-1 text-slate-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-cyan-500" /> Status:
            </span>
            <button
              onClick={() => onSelectStatus('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedStatus === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => onSelectStatus('active')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedStatus === 'active'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ativos
            </button>
            <button
              onClick={() => onSelectStatus('development')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedStatus === 'development'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Em Desenv.
            </button>
          </div>

          {/* Layout view toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-slate-200 text-cyan-500 shadow'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="Visualização em Cartões 3D"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-slate-200 text-cyan-500 shadow'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="Visualização em Lista Elegante"
            >
              <List className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Stack/Tech categories pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {TECH_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2 flex-shrink-0 ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-gray-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                isSelected ? 'bg-white text-blue-600' : 'bg-slate-800 text-gray-400'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filtered count info */}
      <div className="mt-4 px-2 flex items-center justify-between text-xs text-slate-600 font-medium">
        <span>Mostrando <strong className="text-slate-900">{filteredCount}</strong> projetos encontrados</span>
        {searchQuery && (
          <span className="text-cyan-500">
            Filtrando por: &quot;{searchQuery}&quot;
          </span>
        )}
      </div>

    </div>
  );
};

export default FilterBar;
