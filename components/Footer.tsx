import React from 'react';
import { Code2, Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070b12] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden mt-20">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Main Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Space</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed font-light">
              Página oficial de apresentação de portfólio e ecossistema de projetos. Focada na entrega de experiências imersivas com alto padrão arquitetural e aceleração visual 3D.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold pt-2">
              <Sparkles className="w-4 h-4 animate-pulse text-amber-400" />
              Desenvolvido com React 19, Vite & Tailwind CSS v4
            </div>
          </div>

          {/* Quick Nav / Focus */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Ecossistema
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-medium">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Arte Decoração</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">DevFlix Streaming</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Loterias & Analytics</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Loja Rio Piscinas Cacoal</li>
            </ul>
          </div>

          {/* Stacks Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Tech Stacks Principais
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs text-gray-300 border border-slate-800 font-semibold">Vue.js 3</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs text-gray-300 border border-slate-800 font-semibold">React 19</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs text-gray-300 border border-slate-800 font-semibold">TypeScript</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs text-gray-300 border border-slate-800 font-semibold">Tailwind v4</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs text-gray-300 border border-slate-800 font-semibold">Vite Bundler</span>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Todos os direitos reservados. Feito com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse mx-0.5" />
            <span>para o ecossistema Web.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2 group shadow"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
