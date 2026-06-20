import React from 'react';
import { Sparkles, Layers, Box, Cpu, ChevronDown, Rocket, CheckCircle2 } from 'lucide-react';
import { STATS_DATA } from '../data/projects';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]">
      
      {/* Absolute Glow Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Badge */}


            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Experiências Digitais em <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-sm">
                Perspectiva 3D & Alto Nível
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl  mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light ">
              Exploração interativa dos meus principais projetos em <span className="font-semibold text-cyan-400">Vue.js, React e TypeScript</span>. Soluções modernas de ponta a ponta com alto desempenho, design refinado e interfaces cativantes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Explorar Projetos em 3D</span>
              </button>

              <a
                href="#filter-section"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-gray-200 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>Filtrar por Stack</span>
                <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
              </a>
            </div>

            {/* Core Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-sm font-medium">
              <span className="flex items-center gap-2 ">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Design Responsivo Ultra HD
              </span>
              <span className="flex items-center gap-2  ">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Efeitos Glassmorphism & Neon
              </span>
              <span className="flex items-center gap-2  ">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Alta Velocidade & SEO
              </span>
            </div>

          </div>

          {/* Right / 3D Floating Elements Art */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-80 sm:h-96 lg:h-[480px]">
            
            {/* Master 3D Perspective Container */}
            <div className="relative w-full h-full perspective-1000 flex items-center justify-center">
              
              {/* Central Floating Mockup Card */}
              <div className="absolute w-72 sm:w-80 h-80 rounded-3xl glass-panel p-6 border border-white/10 shadow-2xl shadow-cyan-500/20 animate-float flex flex-col justify-between z-20 backdrop-blur-2xl bg-slate-900/70">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                    Vue + Vite
                  </span>
                </div>

                <div className="my-4 flex-1 flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/30">
                    <Box className="w-8 h-8 animate-spin" style={{ animationDuration: '12s' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Arte Decoração 3D</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    Tapeçaria e Decoração Artística com visual totalmente reformulado.
                  </p>
                  
                  {/* Miniature code lines */}
                  <div className="space-y-2 bg-slate-950/80 p-3 rounded-xl border border-white/5">
                    <div className="h-2 w-3/4 rounded bg-cyan-400/40" />
                    <div className="h-2 w-1/2 rounded bg-indigo-400/40" />
                    <div className="h-2 w-5/6 rounded bg-emerald-400/40" />
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Status: <strong className="text-emerald-400">Ativo</strong></span>
                  <span className="text-cyan-400 font-semibold">Visualização Interativa</span>
                </div>
              </div>

              {/* Back / Background Floating Badge 1 */}
              <div className="absolute -top-4 sm:top-4 left-4 sm:left-2 w-48 p-4 rounded-2xl bg-gradient-to-br from-indigo-900/80 via-slate-900/90 to-blue-900/80 border border-indigo-500/30 shadow-2xl animate-float-reverse z-10 backdrop-blur-xl -rotate-6 hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-indigo-500/30 text-indigo-300">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-white">DevFlix</span>
                </div>
                <div className="text-[11px] text-gray-300">
                  Streaming de código & tutoriais em Dark Mode.
                </div>
                <div className="mt-2 text-[10px] text-indigo-300 font-semibold uppercase tracking-wider">
                  Em Desenvolvimento
                </div>
              </div>

              {/* Bottom Right Floating Badge 2 */}
              <div className="absolute bottom-2 sm:bottom-6 right-2 sm:right-0 w-52 p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/90 to-cyan-950/80 border border-cyan-500/30 shadow-2xl animate-float z-30 backdrop-blur-xl rotate-6 hidden sm:block" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-cyan-500/30 text-cyan-300">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-white">Loteria Analytics</span>
                </div>
                <div className="text-[11px] text-gray-300">
                  Gestão estatística de combinações com visual premium.
                </div>
                <div className="mt-2 text-[10px] text-emerald-400 font-semibold">
                  100% Responsivo
                </div>
              </div>

              {/* Background glowing rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 scale-90 animate-pulse pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-105 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
              
            </div>

          </div>

        </div>

        {/* STATS SECTION */}
        {/* <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left flex items-center gap-2">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div> */}

      </div>
    </div>
  );
};

export default Hero;
