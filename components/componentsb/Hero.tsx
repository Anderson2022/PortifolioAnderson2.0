import { Terminal, Database, Zap, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: `url('/hero-bg.jpg')`,
          backgroundPosition: 'center 30%'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(at_center,rgba(255,255,255,0.85)_30%,transparent_80%)]" />
      
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-3xl bg-slate-100 border border-slate-200 mb-8">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="uppercase text-xs tracking-[3px] font-mono text-emerald-600">LIVE FROM THE SERVER ROOM</span>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
          PROJETOS<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">BACKEND</span>
        </h1>
        
        <p className="max-w-md mx-auto text-xl text-slate-600 mb-12">
          Arquitetura escalável. Mensageria. Cache. Testes. Infra como código.<br /> 
          Feito com paixão por sistemas robustos.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <a 
            href="#projects"
            className="group flex items-center gap-3 px-10 py-4 bg-white text-black rounded-3xl font-semibold hover:shadow-2xl hover:shadow-violet-500/30 transition-all active:scale-[0.97]"
          >
            EXPLORAR PROJETOS
            <ArrowRight className="group-active:rotate-45 transition-transform" />
          </a>
          
          <a 
            href="https://github.com/Anderson2022" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-slate-300 hover:border-slate-500 rounded-3xl font-medium transition-colors text-slate-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.396.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            VER NO GITHUB
          </a>
        </div>
      </div>

      {/* Floating 3D elements */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="neumorph w-28 h-28 rounded-3xl flex items-center justify-center rotate-[-8deg] shadow-inner">
          <Terminal className="w-14 h-14 text-cyan-400" />
        </div>
      </div>
      
      <div className="absolute top-32 right-16 hidden lg:block">
        <div className="neumorph w-40 h-40 rounded-3xl flex items-center justify-center rotate-[12deg]">
          <Database className="w-20 h-20 text-violet-400" />
        </div>
      </div>
      
      <div className="absolute bottom-32 right-1/3 hidden xl:block">
        <div className="neumorph w-20 h-20 rounded-3xl flex items-center justify-center -rotate-12">
          <Zap className="w-10 h-10 text-amber-400" />
        </div>
      </div>
    </div>
  );
};
