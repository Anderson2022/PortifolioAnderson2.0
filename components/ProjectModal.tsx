import React from 'react';
import { Project } from '../data/projects';
import { X, ExternalLink, Code2, CheckCircle2, ShieldAlert, Layers, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0b0f19]/80 backdrop-blur-xl transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp my-auto max-h-[90vh] flex flex-col">
        
        {/* Top Floating Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-[80px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-gray-400 hover:text-white border border-white/10 shadow-xl backdrop-blur-md transition-all active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image Banner */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-slate-900 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Main Tech & Status floating on image */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{project.subtitle}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            {project.status === 'active' ? (
              <span className="px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Concluído & Em Produção
              </span>
            ) : (
              <span className="px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5 shadow-lg">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                Em Desenvolvimento
              </span>
            )}
          </div>
        </div>

        {/* Modal Body / Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
          
          {/* Full Description */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-cyan-500" />
              Visão Geral do Projeto
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light bg-slate-50 p-5 rounded-2xl border border-slate-200">
              {project.longDescription}
            </p>
          </div>

          {/* Features Highlights */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-cyan-500" />
              Destaques & Arquitetura
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 transition-colors"
                >
                  <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-500 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-cyan-400" />
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-sm shadow-sm hover:border-cyan-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Deseja testar este projeto ao vivo? <br className="hidden sm:inline" />
            <span className="text-slate-500 font-medium">Clique para visitar o ambiente oficial no botão ao lado.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Repositório</span>
              </a>
            )}

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Visitar Site Oficial</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
