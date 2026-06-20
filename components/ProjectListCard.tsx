import React from 'react';
import { Project } from '../data/projects';
import { ExternalLink, Maximize2, Code2, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ProjectListCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectListCard: React.FC<ProjectListCardProps> = ({ project, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="w-full rounded-2xl bg-white border border-slate-200 transition-all duration-300 p-4 sm:p-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 cursor-pointer group shadow-lg"
    >
      {/* Thumbnail + Title group */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
        
        {/* Thumbnail Image */}
        <div className="relative w-full sm:w-48 h-32 rounded-xl overflow-hidden bg-slate-900 flex-shrink-0 group-hover:shadow-xl group-hover:shadow-cyan-500/20 transition-all">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          
          <span className="absolute bottom-2 right-2 p-2 rounded-lg bg-cyan-500 text-white shadow opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100">
            <Maximize2 className="w-4 h-4" />
          </span>
        </div>

        {/* Content */}
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              {project.subtitle}
            </span>
            <span className="text-gray-600">•</span>
            {project.status === 'active' ? (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Ativo
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3 text-amber-400" /> Em Desenvolvimento
              </span>
            )}
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-cyan-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

      </div>

      {/* Tech tags & Buttons right column */}
      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6 flex-shrink-0 min-w-[220px]">
        
        {/* Tech Badges */}
        <div className="flex flex-wrap lg:justify-end gap-1.5 max-w-xs">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors border border-slate-700 flex items-center justify-center"
              title="Código Repositório"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
            </a>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white text-xs font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 hover:scale-105"
          >
            <span>Visitar Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
};

export default ProjectListCard;
