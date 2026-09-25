import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowDownToLine, ArrowUpRight, Award, Briefcase, Code2, Eye, GraduationCap, Mail, MapPin, Phone, Sparkles, X } from 'lucide-react'

const experiences = [
  ['2025','Analista de Desenvolvimento Java','Sankhya Sistemas','Desenvolvimento de soluções Java, integrações e suporte a sistemas corporativos.'],
  ['2024','Desenvolvedor','Rio Piscina','Desenvolvimento de sistemas internos, automação de processos e suporte técnico.'],
  ['2024','Gerente de Pátio','Irmãos Car','Gestão de equipe, controle de estoque e processos operacionais no pátio.'],
  ['2023','Desenvolvedor Back-end','Dom Pixel','APIs para projetos de clientes, sistemas de pesquisas de personalidade e matrículas de cursos.'],
  ['2022','Analista de Sistemas','Tacto Sistemas','Suporte em ERP, treinamento, implantação via SQL Server, redes e manutenção de software e hardware.'],
  ['2021','Estagiário','Agion','Análise de suporte help desk e reformas de equipamentos.'],
  ['2020','Office Boy','Transamerica Serviços','Atividades administrativas e apoio operacional.'],
]

const expertise = ['Java','Node.js','TypeScript','Adonis.js','NestJS','Prisma','SQL Server','Redis','APIs REST','Git & GitHub','Suporte ERP','Automação']
const qualities = ['Criatividade','Comunicação','Trabalho em equipe','Organização']

const courses = [
  ['JavaScript e fundamentos da linguagem', 'Alura', 'Concluído', 'https://cursos.alura.com.br/degree/certificate/01bfcaf9-0b4b-400c-9e98-1c3bc7aac2c2?lang=pt_BR'],
  ['Modelagem de banco de dados', 'Alura', 'Concluído', 'https://cursos.alura.com.br/degree/certificate/84120564-1ce4-4e45-bcb6-85709f3ba913?lang=pt_BR'],
  ['APIs e desenvolvimento back-end', 'Alura', 'Concluído', 'https://cursos.alura.com.br/degree/certificate/5716d8e9-b820-4b70-bf85-810488d3c959?lang=pt_BR'],
  ['Formação Java', 'Alura', 'Concluído', 'https://cursos.alura.com.br/degree/certificate/a8a1794c-bd5d-495d-ad4f-c42521bd259b?lang=pt_BR'],
  ['Node.js', 'Alura', 'Concluído', 'https://cursos.alura.com.br/certificate/40b8fef6-97f2-4715-b409-fbb8eb250d11?lang=pt_BR'],
  ['WebSockets e comunicação em tempo real', 'Alura', 'Concluído', 'https://cursos.alura.com.br/certificate/4d158869-fc1b-488d-aa79-712ceae64e89?lang=pt_BR'],
  ['AdonisJS', 'Udemy', 'Concluído', 'https://udemy-certificate.s3.amazonaws.com/image/UC-eed8dd0b-0f0f-4183-a660-4ceac8560979.jpg'],
]

const dataStudies = [
  ['Apache Airflow', 'Orquestração de pipelines', 'Projeto e laboratório pessoal'],
  ['Apache Spark', 'Processamento distribuído', 'Estudo prático em andamento'],
  ['dbt', 'Transformações e modelagem com SQL', 'Estudo prático em andamento'],
  ['Apache Kafka', 'Streaming e mensageria de eventos', 'Estudo em andamento'],
  ['Cloud Data Platforms', 'AWS, GCP e BigQuery', 'Trilha de Engenharia de Dados'],
]

export default function Resume(){
  const [selectedCourse, setSelectedCourse] = useState(null)
  return <div className="cv-page">
    <Head><title>Currículo | Anderson Fernandes</title><meta name="description" content="Currículo profissional de Anderson Fernandes, desenvolvedor de software." /></Head>
    <main className="cv-shell">
      <header className="cv-header">
        <div className="cv-header-main"><p>CURRÍCULO DIGITAL / 2026</p><h1>Anderson<br/><em>Fernandes.</em></h1><span>Desenvolvedor de software com foco em back-end, integrações e sistemas corporativos.</span></div>
        <div className="cv-header-side"><div className="cv-available"><i/> DISPONÍVEL PARA OPORTUNIDADES</div><div className="cv-resume-actions"><a href="/Anderson_Fernandes.pdf" target="_blank" rel="noreferrer"><Eye size={18}/> Visualizar currículo</a><a href="/Anderson_Fernandes.pdf" download><ArrowDownToLine size={18}/> Baixar currículo em PDF</a></div></div>
      </header>

      <section className="cv-contact-strip"><span><MapPin/> Cuiabá, MT</span><a href="tel:+5565992803826"><Phone/> (65) 99280-3826</a><a href="mailto:andersonsfernandes@hotmail.com"><Mail/> andersonsfernandes@hotmail.com</a><a href="https://github.com/Anderson2022" target="_blank" rel="noreferrer"><Code2/> github.com/Anderson2022</a></section>

      <div className="cv-layout">
        <aside className="cv-sidebar">
          <section><p className="cv-label">01 / PERFIL</p><h2>Sobre mim</h2><p>Desenvolvedor de software com experiência em projetos web, APIs, automação e suporte. Apaixonado por tecnologia, sempre buscando inovação e resultados.</p></section>
          <section><p className="cv-label">02 / ESPECIALIDADES</p><h2>Ferramentas</h2><div className="cv-tags">{expertise.map(item=><span key={item}>{item}</span>)}</div></section>
          <section><p className="cv-label">03 / COMPETÊNCIAS</p><h2>Como trabalho</h2><ul>{qualities.map((item,index)=><li key={item}><span>0{index+1}</span>{item}</li>)}</ul></section>
          <section className="cv-education"><Sparkles/><p>Jornada em tecnologia iniciada em 2009, evoluindo de suporte e infraestrutura para desenvolvimento de software e sistemas corporativos.</p></section>
        </aside>

        <section className="cv-experience">
          <header><div><p className="cv-label">04 / TRAJETÓRIA</p><h2>Experiência profissional</h2></div><Briefcase/></header>
          <div className="cv-timeline">{experiences.map(([year,title,company,description],index)=><article key={`${year}-${company}`}>
            <div className="cv-year"><span>{year}</span><i/></div>
            <div className="cv-job"><small>POSIÇÃO {String(experiences.length-index).padStart(2,'0')}</small><h3>{title}</h3><b>{company}</b><p>{description}</p></div>
          </article>)}</div>
        </section>
      </div>

      <section className="cv-academic">
        <header><div><p className="cv-label">05 / FORMAÇÃO ACADÊMICA</p><h2>Educação</h2></div><GraduationCap/></header>
        <article><span>GRADUAÇÃO</span><div><h3>Engenharia de Computação</h3><p>Formação superior concluída</p></div><strong>CONCLUÍDO</strong></article>
      </section>

      <section className="cv-learning">
        <header><div><p className="cv-label">06 / FORMAÇÃO CONTÍNUA</p><h2>Cursos e especializações</h2></div><span>Aprendizado aplicado aos projetos e à rotina profissional.</span></header>
        <div className="cv-course-grid">{courses.map(([name, school, status, link], index)=><button type="button" onClick={() => setSelectedCourse({ name, school, status, link })} key={name}><span>{String(index+1).padStart(2,'0')}</span><small>{school}</small><h3>{name}</h3><p>{status} <Eye size={13}/></p></button>)}</div>
      </section>

      <section className="cv-data-learning">
        <header><div><p className="cv-label">07 / EM ANDAMENTO</p><h2>Engenharia de Dados</h2></div><div className="cv-data-intro"><span>Trilha atual de estudos, experimentos e construção de projetos.</span><Link href="/data-engineering"><a>Explorar portfólio de dados <ArrowUpRight size={15}/></a></Link></div></header>
        <div>{dataStudies.map(([name, focus, source], index)=><article key={name}><span>0{index+1}</span><div><h3>{name}</h3><p>{focus}</p></div><small>{source}</small><i>ESTUDANDO</i></article>)}</div>
      </section>

    </main>
    {selectedCourse && <div className="cv-certificate-backdrop" onClick={() => setSelectedCourse(null)}><div className="cv-certificate-modal" role="dialog" aria-modal="true" aria-label={`Certificado ${selectedCourse.name}`} onClick={(event) => event.stopPropagation()}><header><div><span>{selectedCourse.school} / {selectedCourse.status}</span><h2>{selectedCourse.name}</h2></div><button type="button" onClick={() => setSelectedCourse(null)} aria-label="Fechar certificado"><X size={18}/></button></header><div className="cv-certificate-view">{/\.(jpe?g|png|webp)(\?.*)?$/i.test(selectedCourse.link) ? <img src={selectedCourse.link} alt={`Certificado ${selectedCourse.name}`}/> : <div className="cv-certificate-fallback"><span><Award size={46}/></span><small>CERTIFICADO VERIFICÁVEL</small><h3>{selectedCourse.name}</h3><p>Emitido por {selectedCourse.school}. Por segurança, a plataforma do curso não permite exibir este documento dentro de outros sites.</p><a href={selectedCourse.link} target="_blank" rel="noreferrer">Visualizar na {selectedCourse.school} <ArrowUpRight size={16}/></a></div>}</div><footer><p>O certificado original será aberto diretamente no site da instituição.</p><a href={selectedCourse.link} target="_blank" rel="noreferrer">Abrir certificado original <ArrowUpRight size={15}/></a></footer></div></div>}
    <footer className="cv-footer"><div className="cv-shell"><span>ANDERSON FERNANDES / CURRÍCULO</span><span>DESENVOLVIMENTO · SISTEMAS · TECNOLOGIA</span><span>© {new Date().getFullYear()}</span></div></footer>
  </div>
}
