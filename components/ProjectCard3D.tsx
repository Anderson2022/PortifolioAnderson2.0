import React, { useState, useRef, MouseEvent } from 'react';
import { Project } from '../data/projects';
import { ExternalLink, Maximize2, Code2, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface ProjectCard3DProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = width / 2;
    const centerY = height / 2;

    // Rotate up to 12 degrees max
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
    setGlarePosition({
      x: (x / width) * 100,
      y: (y / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="preserve-3d relative w-full h-[450px] rounded-3xl glass-panel-interactive flex flex-col overflow-hidden cursor-pointer select-none border border-slate-200 hover:border-cyan-500/30 bg-white shadow-lg"
        onClick={() => onSelect(project)}
      >
        {/* Dynamic Glare/Glow effect on hover */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 opacity-30 z-30"
            style={{
              background: `radial-gradient(circle 250px at ${glarePosition.x}% ${glarePosition.y}%, ${project.color}88, transparent 80%)`,
            }}
          />
        )}

        {/* Top Image Container */}
        <div className="relative w-full h-56 overflow-hidden flex-shrink-0 bg-slate-900 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent z-10" />
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Floating Category Badge */}
          <div className="absolute top-4 left-4 z-20 translate-z-12">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
              {project.mainTechIcon}
            </span>
          </div>

          {/* Floating Status Badge */}
          <div className="absolute top-4 right-4 z-20 translate-z-12">
            {project.status === 'active' ? (
              <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shadow-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Ativo
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1 shadow-lg">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                Em Desenvolvimento
              </span>
            )}
          </div>

          {/* Expand Details Trigger Icon on Image hover */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
            <span className="p-3 rounded-full bg-cyan-500 text-white shadow-xl translate-z-16 transform scale-90 hover:scale-105 transition-transform">
              <Maximize2 className="w-6 h-6" />
            </span>
          </div>
        </div>

        {/* Card Body content */}
        <div className="flex-1 p-6 flex flex-col justify-between z-20 translate-z-6">
          <div>
            {/* Subtitle */}
            <div className="text-xs font-medium text-cyan-400 mb-1 uppercase tracking-wider">
              {project.subtitle}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight flex items-center gap-2 group-hover:text-cyan-600 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 font-normal">
              {project.description}
            </p>
          </div>

          {/* Tech tags preview & Actions */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            {/* Tech badges */}
            <div className="flex items-center gap-1.5 overflow-hidden max-w-[60%]">
              {project.tech.slice(0, 3).map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200 truncate"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-[11px] font-bold text-gray-400 px-1">+{project.tech.length - 3}</span>
              )}
            </div>

            {/* External Links Button */}
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors border border-slate-700"
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
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white text-xs font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-1.5 hover:scale-105"
              >
                <span>Visitar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard3D;
