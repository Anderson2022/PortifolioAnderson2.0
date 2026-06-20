import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard = ({ project, index, onSelect }: ProjectCardProps) => {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="group cursor-pointer"
    >
      <div className="neumorph overflow-hidden rounded-3xl h-full flex flex-col transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl">
        {/* Image Container with 3D effect */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={project.imagem} 
            alt={project.nome}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white/90" />
          
          {/* Tech badges floating */}
          <div className="absolute top-6 right-6 flex flex-wrap gap-2 justify-end">
            {project.techs?.slice(0, 3).map((tech, idx) => (
              <div key={idx} className="text-[10px] px-3 py-1 bg-slate-100 backdrop-blur-md rounded-2xl border border-slate-200 font-mono text-slate-900">
                {tech}
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-3 h-px bg-current" />
              <span className="uppercase text-xs tracking-widest font-medium">PROJECT #{String(index + 1).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
        
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900">{project.nome}</h3>
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 hover:text-slate-900 p-2 -mr-2 -mt-1 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.396.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-slate-600 text-[15px] leading-relaxed flex-1 line-clamp-4">
            {project.descricao}
          </p>
          
          <div className="pt-8 mt-auto border-t border-slate-200 flex items-center justify-between text-sm">
            <div className="flex items-center gap-5">
              {project.imagensArte.slice(0, 4).map((icon, i) => (
                <img 
                  key={i} 
                  src={icon} 
                  className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-all" 
                  alt="tech" 
                />
              ))}
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubLink, '_blank');
              }}
              className="flex items-center gap-2 text-xs uppercase tracking-widest group-hover:text-violet-400 transition-colors text-slate-900"
            >
              VER CÓDIGO <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
