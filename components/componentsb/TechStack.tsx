import { techStackData } from '../../data/projectsData';

export const TechStack = () => {
  return (
    <div id="stack" className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="uppercase text-violet-400 text-sm tracking-widest font-mono mb-3">STACK DE BATALHA</div>
          <h2 className="text-5xl font-bold tracking-tighter">Tecnologias que eu domino</h2>
        </div>
        <div className="text-zinc-500 max-w-xs md:text-right">
          Ferramentas modernas para construir sistemas confiáveis e performáticos
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {techStackData.map((tech, i) => (
          <div 
            key={i}
            className="neumorph group p-8 rounded-3xl flex flex-col items-center justify-center hover:-translate-y-3 transition-all duration-500 cursor-pointer"
          >
            <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-5xl shadow-inner group-active:scale-90 transition-transform`}>
              {tech.icon}
            </div>
            <div className="font-semibold text-2xl tracking-tight">{tech.name}</div>
            <div className="text-xs text-zinc-500 mt-1 font-mono">EXPERT</div>
          </div>
        ))}
      </div>
    </div>
  );
};
