import { useEffect } from 'react';
import { ArrowUpRight, CheckCircle, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Project } from '../../types';

interface ProjectModalProps { project: Project | null; onClose: () => void; }

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', closeOnEscape); };
  }, [project, onClose]);

  if (!project) return null;

  return <div className="backend-modal-backdrop" onClick={onClose} role="presentation">
    <div className="backend-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="backend-modal-title">
      <button className="backend-modal-close" onClick={onClose} aria-label="Fechar detalhes"><X size={18} /></button>
      <div className="backend-modal-media">
        <img src={project.imagem} alt={project.nome} />
        <div className="backend-modal-media-overlay" />
        <div className="backend-modal-media-label"><span>CASE STUDY</span><b>BACK-END / {String(project.id).padStart(2, '0')}</b></div>
        <div className="backend-modal-signal"><i /> REPOSITÓRIO DOCUMENTADO</div>
      </div>
      <div className="backend-modal-content">
        <header><p>VISÃO GERAL DO SISTEMA</p><h3 id="backend-modal-title">{project.nome}</h3><div className="backend-modal-tags">{project.techs?.map((tech) => <span key={tech}>{tech}</span>)}</div></header>
        <div className="backend-modal-description"><span>CONTEXTO</span><p>{project.descricao}</p></div>
        <div className="backend-modal-details">
          <div><span>TECNOLOGIAS</span><div className="backend-modal-techs">{project.imagensArte.map((image, index) => <div key={index}><img src={image} alt="" /><small>0{index + 1}</small></div>)}</div></div>
          <div className="backend-modal-delivery"><span>ENTREGA</span><p><CheckCircle size={15} /> Código disponível para análise</p><p><CheckCircle size={15} /> Arquitetura documentada</p></div>
        </div>
        <footer><button onClick={onClose}>Voltar aos projetos</button>{project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer"><FaGithub /> Abrir repositório <ArrowUpRight size={16} /></a>}</footer>
      </div>
    </div>
  </div>;
};
