import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div 
        className="max-w-2xl w-full neumorph rounded-3xl overflow-hidden bg-white text-slate-900"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.imagem} 
            alt={project.nome}
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-2xl flex items-center justify-center text-xl leading-none text-slate-900"
          >
            ✕
          </button>
        </div>
        
        <div className="p-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-4xl font-bold">{project.nome}</h3>
            <a 
              href={project.githubLink} 
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-sm flex items-center gap-2 border border-slate-200 hover:bg-slate-100 rounded-3xl transition-colors text-slate-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.396.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg> REPO
            </a>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techs?.map(t => (
              <span key={t} className="text-xs px-4 py-1 bg-slate-100 rounded-full text-slate-900">{t}</span>
            ))}
          </div>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            {project.descricao}
          </p>
          
          <div>
            <div className="uppercase text-xs tracking-widest mb-4 text-zinc-400">Tecnologias utilizadas</div>
            <div className="flex flex-wrap gap-3">
              {project.imagensArte.map((img, i) => (
                <div key={i} className="bg-zinc-900 p-4 rounded-2xl">
                  <img src={img} className="h-9" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-slate-100 px-10 py-6 flex justify-end border-t border-slate-200">
          <button 
            onClick={onClose}
            className="px-8 py-3 text-sm font-medium text-slate-700/80 hover:text-slate-900"
          >
            FECHAR
          </button>
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="ml-4 flex items-center gap-3 px-8 py-3 bg-white text-black rounded-3xl font-semibold hover:bg-zinc-200 transition-colors"
          >
            VER NO GITHUB <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
