import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2, Database, MapPin, Server, Workflow } from 'lucide-react'

export default function AboutPage() {
  return <div className="profile-page">
    <Head><title>Sobre | Anderson Silva</title><meta name="description" content="Conheça Anderson Silva, desenvolvedor back-end." /></Head>
    <main className="profile-shell">
      <header className="profile-intro">
        <div><p>01 / SOBRE MIM</p><h1>Código é ferramenta.<br /><em>Resolver problemas</em><br />é o trabalho.</h1></div>
        <div className="profile-photo"><Image src="/assets/about.jpg" alt="Anderson Silva" layout="fill" objectFit="cover" priority /><span><i /> DISPONÍVEL PARA OPORTUNIDADES</span></div>
      </header>

      <section className="profile-story">
        <aside><span>PERFIL</span><h2>Anderson<br />da Silva</h2><p><MapPin size={14} /> Brasil · Remoto</p></aside>
        <div><p>Sou <strong>Engenheiro de Computação</strong> e desenvolvo soluções para processos reais de negócio. Minha experiência reúne backend, APIs, integrações entre sistemas empresariais e bancos de dados, com atuação em <strong>Java, Spring Boot, Node.js, Oracle e PostgreSQL</strong>.</p><p>Já trabalhei com regras de estoque, vendas e comissões, além de integrações com o ERP Sankhya. Também desenvolvo projetos de BI e análise de dados, conectando conhecimento técnico ao contexto de cada operação.</p><p>Gosto de entender o problema antes de escrever o código e construir soluções que façam sentido para quem vai utilizá-las. Hoje, direciono minha evolução profissional para <strong>Engenharia de Dados</strong>.</p></div>
      </section>

      <section className="profile-values"><article><Code2 /><span>01</span><h3>Clareza</h3><p>Código legível e decisões técnicas que toda a equipe consegue compreender.</p></article><article><Server /><span>02</span><h3>Confiabilidade</h3><p>Serviços preparados para falhas, crescimento e manutenção contínua.</p></article><article><Database /><span>03</span><h3>Dados</h3><p>Modelagem e integrações pensadas para preservar consistência e desempenho.</p></article><article><Workflow /><span>04</span><h3>Evolução</h3><p>Curiosidade constante para aprender e aplicar a ferramenta certa.</p></article></section>

      <section className="profile-next"><p>CONTINUE EXPLORANDO</p><h2>Conheça as tecnologias e ferramentas criativas que fazem parte do meu trabalho.</h2><Link href="/skills"><a>Ver Tech & Criatividade <ArrowRight size={18} /></a></Link></section>
    </main>
  </div>
}
