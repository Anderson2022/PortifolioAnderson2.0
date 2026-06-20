export const AboutSection = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto px-8 py-20 border-t border-slate-200">
      <div className="grid md:grid-cols-12 gap-y-16 gap-x-8">
        <div className="md:col-span-5">
          <div className="sticky top-28">
            <div className="neumorph inline-block px-5 py-1 text-xs font-mono tracking-[1px] mb-6 text-slate-900">SOBRE O DEV</div>
            <h2 className="text-5xl font-bold tracking-tight leading-none mb-8 text-slate-900">
              Anderson<br />fazendo o <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300">backend</span> brilhar.
            </h2>
            
            <p className="text-zinc-400 max-w-xs">
              Desenvolvedor backend apaixonado por criar APIs rápidas, confiáveis e escaláveis. 
              Foco em performance, testes automatizados e arquiteturas orientadas a eventos.
            </p>
            
            <div className="flex gap-4 mt-12">
              <div className="text-xs">
                <div className="font-mono text-violet-400">CURRENTLY LEARNING</div>
                <div className="text-white/90">Rust • Kubernetes • Observability</div>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div className="text-xs">
                <div className="font-mono text-violet-400">BASED IN</div>
                <div className="text-white/90">Brazil 🇧🇷</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7">
          <div className="neumorph p-10 rounded-3xl">
            <div className="uppercase text-xs mb-6 tracking-widest text-zinc-400">ÚLTIMAS ATUALIZAÇÕES</div>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="font-mono text-6xl font-bold text-slate-900/10">01</div>
                <div>
                  <div className="font-semibold mb-1 text-slate-900">Implementação de Event Sourcing no Home Broker</div>
                  <div className="text-slate-600 text-sm">Kafka + CQRS + Docker Compose completo. Latência sub-30ms.</div>
                  <div className="text-[10px] text-teal-400 mt-4">MAR 2025</div>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="font-mono text-6xl font-bold text-slate-900/10">02</div>
                <div>
                  <div className="font-semibold mb-1 text-slate-900">Cache Layer com Redis + BullMQ no sistema financeiro</div>
                  <div className="text-zinc-400 text-sm">Taxa de acerto de 97%. Redução de 82% nas consultas ao banco.</div>
                  <div className="text-[10px] text-teal-400 mt-4">FEV 2025</div>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="font-mono text-6xl font-bold text-slate-900/10">03</div>
                <div>
                  <div className="font-semibold mb-1 text-slate-900">Roleplay API v2 com WebSockets + Colyseus</div>
                  <div className="text-zinc-400 text-sm">Sincronização de estado em tempo real para 30+ jogadores simultâneos.</div>
                  <div className="text-[10px] text-teal-400 mt-4">JAN 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
