import { useMemo, useState } from 'react'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, LayoutGrid, Search, X } from 'lucide-react'
import { PROJECTS_DATA } from '../data/projects'
import ProjectModal from '../components/ProjectModal'

const filters = [
  ['all', 'Todos'], ['vue', 'Vue.js'], ['react', 'React'],
  ['node', 'Node.js'],
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = useMemo(() => PROJECTS_DATA.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter
    const term = query.trim().toLowerCase()
    const matchesSearch = !term || project.title.toLowerCase().includes(term) || project.description?.toLowerCase().includes(term) || project.tech?.some((tech) => tech.toLowerCase().includes(term))
    return matchesFilter && matchesSearch
  }), [filter, query])

  return <div className="frontend-gallery">
    <Head><title>Projetos Front-end | Anderson Silva</title><meta name="description" content="Projetos de interfaces e experiências digitais desenvolvidos por Anderson Silva." /></Head>

    <div className="frontend-ticker frontend-top-ticker">
      <div className="frontend-ticker-track">
        <span>REACT <i/> VUE.JS <i/> TYPESCRIPT <i/> RESPONSIVE <i/> INTERACTION <i/> PERFORMANCE <i/> DESIGN SYSTEM <i/></span>
        <span aria-hidden="true">REACT <i/> VUE.JS <i/> TYPESCRIPT <i/> RESPONSIVE <i/> INTERACTION <i/> PERFORMANCE <i/> DESIGN SYSTEM <i/></span>
      </div>
    </div>

    <section id="gallery" className="frontend-gallery-section">
      <div className="frontend-shell">
        <header className="frontend-section-head"><div><p>01 / TRABALHOS SELECIONADOS</p><h2>Projetos em foco</h2></div><span>{String(projects.length).padStart(2, '0')} projetos encontrados</span></header>
        <div className="frontend-toolbar">
          <div className="frontend-filters">{filters.map(([id, label]) => <button key={id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id)}>{label}</button>)}</div>
          <label className="frontend-search"><Search size={16}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar projeto ou tecnologia" />{query && <button onClick={() => setQuery('')} aria-label="Limpar busca"><X size={14}/></button>}</label>
        </div>

        {projects.length ? <div className="frontend-project-grid">
          <AnimatePresence mode="popLayout">{projects.map((project, index) => project.id === 'poolcontrol' ? <motion.a layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: index * .035 }} className="frontend-poolcontrol-link" key={project.id} href={project.url} target="_blank" rel="noreferrer">
            <span>EM DESENVOLVIMENTO</span><h3>{project.title}<ArrowUpRight size={18}/></h3>
          </motion.a> : <motion.article layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: index * .035 }} className={index % 5 === 0 ? 'frontend-project-wide' : ''} key={project.id} onClick={() => setSelectedProject(project)}>
            <div className="frontend-project-shot"><img src={project.image} alt={project.title}/><div className="frontend-project-overlay"/><span>{project.status === 'active' ? 'ONLINE' : 'EM DESENVOLVIMENTO'}</span><button aria-label={`Abrir ${project.title}`}><ArrowUpRight/></button></div>
            <div className="frontend-project-info"><div><small>0{index + 1} / {project.category}</small><h3>{project.title}</h3><p>{project.subtitle}</p></div><div className="frontend-project-tags">{project.tech?.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          </motion.article>)}</AnimatePresence>
        </div> : <div className="frontend-empty"><LayoutGrid/><h3>Nenhum projeto encontrado</h3><p>Tente outra tecnologia ou termo de busca.</p><button onClick={() => { setFilter('all'); setQuery('') }}>Limpar filtros</button></div>}
      </div>
    </section>

    <footer className="frontend-footer"><div className="frontend-shell"><span>ANDERSON.DEV / FRONT-END</span><span>DESIGN · CODE · INTERACTION</span><span>© {new Date().getFullYear()}</span></div></footer>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </div>
}
