import { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { Project } from '../../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection = ({ onSelectProject }: ProjectsSectionProps) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.techs?.some(t => t.toLowerCase().includes(filter)));

  return (
    <div id="projects" className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono uppercase text-xs tracking-[2px] text-teal-400">PORTFOLIO 2025</div>
            <h2 className="text-6xl font-bold tracking-[-2px] text-slate-900">Projetos em Destaque</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['all', 'typescript', 'nestjs', 'redis', 'kafka', 'docker'].map((f, i) => (
              <button
                key={i}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 text-sm rounded-3xl transition-all border ${filter === f ? 'border-violet-400 bg-violet-500/10 text-white' : 'border-white/10 text-zinc-400 hover:border-white/40 hover:text-white'}`}
              >
                {f === 'all' ? 'TODOS' : f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onSelect={onSelectProject} 
            />
          ))}
        </div>
        
        <div className="text-center mt-16 text-xs text-zinc-500 font-mono tracking-widest">
          SCROLL FOR MORE • {projectsData.length} PROJETOS NO TOTAL • FILTRE POR TECNOLOGIA
        </div>
      </div>
    </div>
  );
};
