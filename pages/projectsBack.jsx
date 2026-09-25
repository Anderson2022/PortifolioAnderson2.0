import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Braces, Cpu, Database, Layers, Server, Terminal, Zap } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projectsData, techStackData } from '../data/projectsData'
import { ProjectModal } from '../components/componentsb/ProjectModal'

const filters = ['todos', 'java', 'typescript', 'nestjs', 'redis', 'kafka', 'docker']

export default function BackendProjects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('todos')
  const visibleProjects = useMemo(() => filter === 'todos' ? projectsData : projectsData.filter(project => project.techs?.some(tech => tech.toLowerCase().includes(filter))), [filter])

  return <div className="backend-studio">
    <section className="backend-hero">
      <div className="backend-gridlines" />
      <div className="backend-shell backend-hero-layout">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <div className="backend-status"><i /> SISTEMAS ONLINE <span>ANDERSON / BACK-END</span></div>
          <p className="backend-index">PORTFÓLIO TÉCNICO — 2026</p>
          <h1>Engenharia que<br />ninguém vê.<br /><em>Performance que todos sentem.</em></h1>
          <p className="backend-intro">APIs, mensageria, cache e bancos de dados desenhados para continuar funcionando quando a complexidade aumenta.</p>
          <div className="backend-actions"><a href="#backend-projects">Ver sistemas <ArrowRight size={17} /></a><a href="https://github.com/Anderson2022" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a></div>
        </motion.div>

        <div className="backend-console">
          <div className="backend-console-bar"><span>●</span><span>●</span><span>●</span><b>architecture.ts</b></div>
          <div className="backend-console-body">
            <div className="backend-flow-node node-client"><small>REQUEST</small><b>Client</b><span>HTTPS / JSON</span></div>
            <div className="backend-flow-line line-one"><i /></div>
            <div className="backend-flow-node node-api"><small>GATEWAY</small><b>API Layer</b><span>Auth · Routes · Validation</span></div>
            <div className="backend-flow-split"><i /><i /><i /></div>
            <div className="backend-flow-bottom"><div><Zap size={18} /><b>Redis</b><span>cache</span></div><div><Database size={18} /><b>Postgres</b><span>data</span></div><div><Layers size={18} /><b>Kafka</b><span>events</span></div></div>
          </div>
          <div className="backend-console-log"><span>200</span> response delivered <b>24ms</b></div>
        </div>
      </div>
      <div className="backend-marquee"><div className="backend-marquee-track"><span>NODE.JS <i /> TYPESCRIPT <i /> NESTJS <i /> ADONISJS <i /> POSTGRESQL <i /> REDIS <i /> KAFKA <i /> DOCKER <i /></span><span aria-hidden="true">NODE.JS <i /> TYPESCRIPT <i /> NESTJS <i /> ADONISJS <i /> POSTGRESQL <i /> REDIS <i /> KAFKA <i /> DOCKER <i /></span></div></div>
    </section>

    <section className="backend-stack">
      <div className="backend-shell">
        <header className="backend-section-head"><div><p>01 / TOOLKIT</p><h2>Stack de produção</h2></div><span>Ferramentas escolhidas pela função,<br />não pela tendência.</span></header>
        <div className="backend-stack-grid">{techStackData.map((tech, index) => <article key={tech.name}><span>0{index + 1}</span><div>{index % 3 === 0 ? <Braces /> : index % 3 === 1 ? <Cpu /> : <Server />}</div><h3>{tech.name}</h3><p>{index < 4 ? 'CORE' : 'INFRA'}</p></article>)}</div>
      </div>
    </section>

    <section id="backend-projects" className="backend-projects">
      <div className="backend-shell">
        <header className="backend-section-head"><div><p>02 / SISTEMAS</p><h2>Projetos de back-end</h2></div><span>{projectsData.length} projetos documentados.<br />Clique para ver os detalhes.</span></header>
        <div className="backend-filters">{filters.map(item => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'active' : ''}>{item}</button>)}</div>
        <div className="backend-project-list">{visibleProjects.map((project, index) => <article key={project.id} onClick={() => setSelectedProject(project)}>
          <div className="backend-project-number">{String(index + 1).padStart(2, '0')}</div>
          <div className="backend-project-main"><span>CASE / {project.techs?.[0] || 'BACK-END'}</span><h3>{project.nome}</h3><p>{project.descricao}</p><div>{project.techs?.map(tech => <b key={tech}>{tech}</b>)}</div></div>
          <div className="backend-project-visual"><img src={project.imagem} alt={project.nome} /><span>ABRIR CASE <ArrowUpRight size={15} /></span></div>
        </article>)}</div>
      </div>
    </section>

    <section className="backend-method">
      <div className="backend-shell backend-method-grid"><div><p>03 / MÉTODO</p><h2>Menos mágica.<br />Mais engenharia.</h2></div><div className="backend-principles"><article><span>01</span><h3>Começar pelo domínio</h3><p>Entender regras e fluxos antes de escolher framework ou banco de dados.</p></article><article><span>02</span><h3>Projetar para falhas</h3><p>Validação, observabilidade e recuperação fazem parte da arquitetura desde o início.</p></article><article><span>03</span><h3>Medir antes de otimizar</h3><p>Performance orientada por métricas reais, testes e gargalos verificáveis.</p></article></div></div>
    </section>

    <section className="backend-cta"><div className="backend-shell"><p>PRECISA DE UMA API OU INTEGRAÇÃO?</p><h2>Vamos transformar a regra de negócio<br />em um sistema confiável.</h2><a href="mailto:contato@anderson.dev">Iniciar conversa <ArrowUpRight size={18} /></a></div></section>
    <footer className="backend-footer"><div className="backend-shell"><span>ANDERSON.DEV / BACK-END</span><span>NODE · APIs · DATA · INFRA</span><span>© {new Date().getFullYear()}</span></div></footer>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </div>
}
