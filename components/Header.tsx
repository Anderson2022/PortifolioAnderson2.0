import React from 'react';
import { Sparkles, Code2, Terminal, MessageSquare, Monitor } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  projectCount: number;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact, projectCount }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0b0f19]/85 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-105 transition-all duration-300">
            <Code2 className="w-6 h-6 animate-pulse" />
            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Space</span>
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" /> 3D View
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium">Apresentação de Projetos & Portfólio</p>
          </div>
        </div>

        {/* Desktop Navigation / Info pills */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <Monitor className="w-4 h-4 text-emerald-400" />
            <span>Projetos Ativos: <strong className="text-white">{projectCount}</strong></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>Tech Stack: <strong className="text-white">Vue & React</strong></span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={onOpenContact}
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-sm transition-transform active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-5 py-2.5 rounded-[11px] bg-[#0b0f19] group-hover:bg-opacity-80 transition-all flex items-center gap-2 text-gray-200 group-hover:text-white">
              <MessageSquare className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>Entrar em Contato</span>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
