import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowRight, Code2, Database, Download, Mail, MapPin, Server, Sparkles, Workflow } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const skills = [
  ['HTML', '/assets/skills/html.png'], ['CSS', '/assets/skills/css.png'], ['JavaScript', '/assets/skills/javascript.png'],
  ['React', '/assets/skills/react.png'], ['Tailwind', '/assets/skills/tailwind.png'], ['Adonis.js', '/assets/skills/adonis.png'],
  ['GitHub', '/assets/skills/github1.png'], ['Next.js', '/assets/skills/nextjs.png'], ['PHP', '/assets/skills/php.png'],
  ['MySQL', '/assets/skills/mysql.png'], ['Node.js', '/assets/skills/node.png'], ['Redis', '/assets/skills/redis.png'],
]
const hobbies = [['Adobe After Effects', '/assets/skills/effects.png'], ['Adobe Premiere Pro', '/assets/skills/premiere.png'], ['Adobe Lightroom 5', '/assets/skills/lightroom.png'], ['Adobe Photoshop', '/assets/skills/photos.png']]
const SectionTitle = ({ eyebrow, title, copy }) => <div className="home-heading"><p>{eyebrow}</p><h2>{title}</h2>{copy && <span>{copy}</span>}</div>

export default function Home() {
  return <div className="portfolio-home-v2">
    <Head><title>Anderson Fernandes | Desenvolvedor de Software</title><meta name="description" content="Portfólio de Anderson Fernandes, desenvolvedor de software especializado em back-end, APIs, integrações e dados." /><link rel="icon" href="/fav.png" /></Head>
    <main>
      <section id="home" className="home-hero">
        <div className="home-orb home-orb-one" /><div className="home-orb home-orb-two" />
        <div className="home-shell home-hero-grid">
          <div className="home-hero-copy">
            <div className="home-kicker"><span /><p>DISPONÍVEL PARA NOVOS PROJETOS</p></div>
            <p className="home-edition">PORTFÓLIO / 2026 <span>CUIABÁ — MT</span></p>
            <h1>Engenharia para <em>processos reais</em> de negócio.</h1>
            <div className="home-lead"><p>Sou <strong>Engenheiro de Computação</strong> e desenvolvo soluções envolvendo backend, APIs, integrações entre sistemas empresariais e bancos de dados.</p><p>Atuo com <strong>Java, Spring Boot, Node.js, Oracle e PostgreSQL</strong>, transformando regras de negócio em sistemas úteis, confiáveis e preparados para evoluir.</p></div>
            <div className="home-actions"><Link href="/projects"><a className="home-button home-button-primary">Ver projetos <ArrowDownRight size={18} /></a></Link><a href="/Anderson_Fernandes.pdf" download className="home-button home-button-ghost">Baixar currículo <Download size={18} /></a></div>
            <div className="home-socials"><a href="https://www.linkedin.com/in/anderson-silva-346255160/" target="_blank" rel="noreferrer"><FaLinkedinIn size={18} /> LinkedIn</a><a href="https://github.com/Anderson2022" target="_blank" rel="noreferrer"><FaGithub size={18} /> GitHub</a><Link href="/contact"><a><Mail size={18} /> Contato</a></Link></div>
            <div className="home-domain-proof"><span>Estoque · vendas · comissões</span><span>ERP Sankhya · integrações</span><span>BI · análise · Engenharia de Dados</span></div>
          </div>
          <div className="home-hero-card">
            <div className="home-codebar"><i /><i /><i /><span>anderson.profile</span></div>
            <div className="home-photo-wrap"><Image src="/assets/about.jpg" alt="Anderson Silva" layout="fill" objectFit="cover" priority /><div className="home-photo-fade" /></div>
            <div className="home-card-copy"><span>COMPUTER ENGINEERING</span><h3>Negócio, sistemas & dados</h3><p><MapPin size={14} /> Cuiabá, MT · remoto</p></div>
            <div className="home-card-stats"><div><b>JAVA</b><span>Back-end</span></div><div><b>ERP</b><span>Integrações</span></div><div><b>DATA</b><span>Evolução</span></div></div>
          </div>
        </div>
      </section>

      <section id="about" className="home-section"><div className="home-shell home-about-grid">
        <SectionTitle eyebrow="01 — SOBRE" title="Tecnologia com propósito, código com clareza." />
        <div className="home-about-copy"><p>Sou <strong>Engenheiro de Computação</strong> e desenvolvo soluções para processos reais de negócio, reunindo backend, APIs, integrações empresariais e bancos de dados.</p><p>Minha experiência inclui Java, Spring Boot, Node.js, Oracle, PostgreSQL, integrações com o ERP Sankhya e projetos de BI. Hoje, direciono minha evolução para Engenharia de Dados.</p><Link href="/projects"><a className="home-text-link">Confira meus projetos mais recentes <ArrowRight size={17} /></a></Link></div>
        <div className="home-values"><article><Server /><span>01</span><h3>APIs & back-end</h3><p>Serviços estáveis, organizados e preparados para evoluir.</p></article><article><Database /><span>02</span><h3>Dados & integrações</h3><p>Conexões seguras entre bancos, serviços e interfaces.</p></article><article><Workflow /><span>03</span><h3>Produto completo</h3><p>Visão do fluxo inteiro, da regra de negócio à experiência final.</p></article></div>
      </div></section>

      <section id="skills" className="home-section home-section-alt"><div className="home-shell"><SectionTitle eyebrow="02 — SKILLS" title="Ferramentas que transformam ideias em produtos." copy="Uma stack diversa para construir, integrar, testar e entregar aplicações web completas." /><div className="home-skills-grid">{skills.map(([name, image]) => <article key={name}><div><Image src={image} alt="" width={44} height={44} objectFit="contain" /></div><h3>{name}</h3><span>TECNOLOGIA</span></article>)}</div></div></section>

      <section id="hobby" className="home-section home-section-alt"><div className="home-shell home-hobby-layout"><SectionTitle eyebrow="04 — CRIATIVIDADE" title="Além do código." copy="Edição, imagem e movimento ampliam meu olhar sobre experiência, detalhe e comunicação visual." /><div className="home-hobbies-grid">{hobbies.map(([name, image]) => <article key={name}><Image src={image} alt="" width={54} height={54} objectFit="contain" /><div><span>FERRAMENTA CRIATIVA</span><h3>{name}</h3></div></article>)}</div></div></section>

      <section id="contact" className="home-section home-contact"><div className="home-shell home-contact-grid">
        <div><div className="home-kicker"><span /><p>VAMOS CONVERSAR</p></div><h2>Tem uma ideia?<br /><em>Vamos construir.</em></h2><p>Estou disponível para projetos freelance e oportunidades em tempo integral. Conte um pouco sobre o seu desafio.</p><a href="https://api.whatsapp.com/send?phone=+55+5565996321128&text=Olá%2C+Anderson+Silva" target="_blank" rel="noreferrer" className="home-text-link">Conversar pelo WhatsApp <ArrowRight size={17} /></a></div>
        <form action="https://getform.io/f/775ba89d-a79d-4e21-ab04-7a1030679546" method="POST"><div className="home-form-row"><label>Nome<input name="name" type="text" required placeholder="Seu nome" /></label><label>Telefone<input name="phone" type="tel" placeholder="(00) 00000-0000" /></label></div><label>E-mail<input name="email" type="email" required placeholder="voce@email.com" /></label><label>Assunto<input name="subject" type="text" required placeholder="Como posso ajudar?" /></label><label>Mensagem<textarea name="message" rows="5" required placeholder="Conte um pouco sobre o projeto..." /></label><button type="submit" className="home-button home-button-primary">Enviar mensagem <ArrowRight size={18} /></button></form>
      </div></section>
    </main>
    <section className="home-closing"><div className="home-shell"><p>DISPONÍVEL PARA NOVOS DESAFIOS</p><h2>Vamos criar algo<br/><em>que funcione de verdade.</em></h2><Link href="/contact"><a>Iniciar uma conversa <ArrowRight size={18}/></a></Link></div></section>
    <footer className="home-footer"><div className="home-shell"><a href="#home" className="home-brand"><Code2 size={20} /> anderson.dev</a><p>© {new Date().getFullYear()} Anderson Fernandes.</p><span><Sparkles size={14} /> Back-end · APIs · Dados</span></div></footer>
  </div>
}
