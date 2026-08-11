import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import ProjectCard3D from '../components/ProjectCard3D';
import ProjectListCard from '../components/ProjectListCard';
import ProjectModal from '../components/ProjectModal';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import { Sparkles, FileQuestion } from 'lucide-react';
import AmbientCanvas from '../src/components/AmbientCanvas';

const App = () => {
  // State for Filtering & Views
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  // State for Modals
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category filter
      if (selectedCategory !== 'all' && project.category !== selectedCategory) {
        return false;
      }
      
      // Status filter
      if (selectedStatus !== 'all' && project.status !== selectedStatus) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTech = project.tech.some((t) => t.toLowerCase().includes(query));
        const matchesSubtitle = project.subtitle.toLowerCase().includes(query);

        if (!matchesTitle && !matchesDesc && !matchesTech && !matchesSubtitle) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  // Scroll to filter section helper
  const handleExploreClick = () => {
    const el = document.getElementById('filter-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="projects-page relative min-h-screen flex flex-col bg-base font-body text-ink selection:bg-ink/20 selection:text-ink pt-20">
      <AmbientCanvas />

      {/* Hero Presentation */}
      <div className="relative z-10"><Hero onExploreClick={handleExploreClick} /></div>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Filter Toolbar */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedStatus={selectedStatus}
          onSelectStatus={setSelectedStatus}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          filteredCount={filteredProjects.length}
        />

        {/* Projects Display View */}
        {filteredProjects.length === 0 ? (
          /* Empty state */
          <div className="my-16 p-12 rounded-3xl bg-white border border-slate-200 text-center max-w-xl mx-auto shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-cyan-500 mx-auto flex items-center justify-center mb-6 border border-slate-200">
              <FileQuestion className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Sua busca não encontrou resultados para a combinação de filtros selecionada. Tente remover os filtros ou redefinir sua busca.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedStatus('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          /* Grid vs List layout */
          <div className="mt-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard3D
                    key={project.id}
                    project={project}
                    onSelect={(proj) => setSelectedProject(proj)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProjects.map((project) => (
                  <ProjectListCard
                    key={project.id}
                    project={project}
                    onSelect={(proj) => setSelectedProject(proj)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Feature section prompt */}
        {/* <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 text-xs font-bold border border-cyan-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" /> Contratação & Parcerias
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Precisa de um projeto exclusivo ou evoluir sua plataforma?
            </h3>
            <p className="text-slate-600 text-sm max-w-xl leading-relaxed font-light">
              Estou disponível para novas oportunidades, suporte a aplicações Vue.js/React e desenvolvimento de portfólios de alta conversão.
            </p>
          </div>

          <button
            onClick={() => setIsContactOpen(true)}
            className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all flex-shrink-0"
          >
            Agendar Reunião ou Orçamento
          </button>
        </div> */}

      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
};

export default App;
