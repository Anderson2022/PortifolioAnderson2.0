import React, { useRef, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const skills = [
  { name: 'Hardware', value: 4 },
  { name: 'Software', value: 5 },
  { name: 'Network', value: 3 },
  { name: 'Security', value: 2 },
];

const timeline = [
  { year: '2009', desc: 'Início dos estudos em tecnologia.' },
  { year: '2012', desc: 'Primeiros projetos e estágios.' },
  { year: '2017', desc: 'Atuação profissional em empresas.' },
  { year: '2020', desc: 'Desenvolvedor Full Stack.' },
  { year: '2024', desc: 'Desenvolvedor na Rio Piscina e Gerente de Pátio na Irmãos Car.' },
  { year: '2025', desc: 'Analista de desenvolvimento Java na Sankhya Sistemas.' },
];

const experiences = [
  {
    year: '2025',
    title: 'Analista de Desenvolvimento Java',
    company: 'Sankhya Sistemas',
    desc: 'Atuação em desenvolvimento de soluções Java, integrações e suporte a sistemas corporativos.'
  },
  {
    year: '2024',
    title: 'Desenvolvedor',
    company: 'Rio Piscina',
    desc: 'Desenvolvimento de sistemas internos, automação de processos e suporte técnico.'
  },
  {
    year: '2024',
    title: 'Gerente de Pátio',
    company: 'Irmãos Car',
    desc: 'Gestão de equipe, controle de estoque e processos operacionais no pátio.'
  },
  {
    year: '2023',
    title: 'Desenvolvedor Back-end',
    company: 'Dom Pixel',
    desc: 'Trabalhei com APIs para projetos de clientes, como sistemas de pesquisas de personalidade e sistemas de matrículas de cursos.'
  },
  {
    year: '2022',
    title: 'Analista de Sistemas',
    company: 'Tacto Sistemas',
    desc: 'Suporte técnico em Sistema ERP, treinamento de usuários, implantação via SQL Server, configuração de impressoras, conceitos de rede, instalação e manutenção de softwares e hardwares.'
  },
  {
    year: '2021',
    title: 'Estagiário',
    company: 'Agion',
    desc: 'Análise de suporte help desk e reformas de equipamentos.'
  },
  {
    year: '2020',
    title: 'Office Boy',
    company: 'Transamerica Serviços',
    desc: 'Atividades administrativas e apoio operacional.'
  }
];

const interests = [
  'Criatividade',
  'Comunicação',
  'Trabalho em equipe',
  'Organização',
];

export default function Resume() {
  const [openExp, setOpenExp] = useState(null);
  const timelineRef = useRef(null);

  const moveTimeline = (direction) => {
    const carousel = timelineRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: direction * Math.min(carousel.clientWidth * 0.85, 360), behavior: 'smooth' });
  };

  return (
    <div className="resume-page min-h-screen bg-base flex flex-col items-center justify-start px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-10 lg:pt-32">
      <Head>
        <title>Anderson | Resume</title>
      </Head>
      <div className="neu w-full max-w-6xl overflow-hidden rounded-2xl">
        {/* Lado Esquerdo */}
        <div className="flex w-full flex-col gap-6 p-5 text-ink sm:p-8 lg:p-12">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-2 break-words text-center font-display text-3xl font-extrabold leading-tight tracking-[0.16em] text-ink sm:text-5xl sm:tracking-[0.28em] lg:text-6xl">ANDERSON<br />FERNANDES</motion.h1>
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {/* Informações Pessoais */}
            <div className="flex-1">
              <h2 className="font-bold text-lg mb-2 tracking-widest">INFORMAÇÕES</h2>
              <div className="text-sm leading-7 text-muted">
                <p><b>IDADE:</b> 32</p>
                <p><b>CIDADE:</b> Cuiabá</p>
                <p><b>TELEFONE:</b> (65) 99280-3826</p>
                <p className="break-all"><b>EMAIL:</b> andersonsfernandes@hotmail.com</p>
              </div>
              <h2 className="font-bold text-lg mt-6 mb-2 tracking-widest">SOBRE MIM</h2>
              <div className="text-xs text-gray-700">
                <p>Desenvolvedor de software com experiência em projetos web, APIs, automação e suporte. Apaixonado por tecnologia, sempre buscando inovação e resultados.</p>
              </div>
            </div>
            {/* Interesses e Círculos */}
            <div className="flex flex-1 flex-col gap-4 md:items-center">
              <h2 className="font-bold text-lg mb-2 tracking-widest">INTERESSES</h2>
              <div className="grid w-full grid-cols-2 gap-3 sm:gap-4">
                {interests.map((i, idx) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                    whileHover={{ scale: 1.15, rotate: 8, backgroundColor: '#facc15', color: '#222' }}
                    className="neu-sm flex min-w-0 cursor-pointer flex-col items-center p-3 transition"
                  >
                    <motion.svg width="48" height="48" initial={{ rotate: 0 }} whileHover={{ rotate: 10 }}>
                      <circle cx="24" cy="24" r="20" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                      <motion.circle
                        cx="24" cy="24" r="20"
                        stroke="#facc15"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="125.6"
                        strokeDashoffset="0"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
                      />
                    </motion.svg>
                    <span className="mt-1 max-w-full break-words text-center text-[10px] font-bold uppercase sm:text-xs">{i}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Skills Profissionais */}
          <div className="mt-6">
            <h2 className="font-bold text-lg mb-2 tracking-widest">PROFESSIONAL SKILLS</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0, opacity: 0, x: -30 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.2, backgroundColor: '#facc15', color: '#222' }}
                  className="neu-sm flex min-w-0 flex-col items-center p-3 transition"
                >
                  <motion.svg width="40" height="40" initial={{ rotate: 0 }} whileHover={{ rotate: 12 }}>
                    <circle cx="20" cy="20" r="16" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                    <motion.circle
                      cx="20" cy="20" r="16"
                      stroke="#111"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="100.5"
                      strokeDashoffset={100.5 - (skill.value / 5) * 100.5}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
                    />
                  </motion.svg>
                  <span className="text-xs font-semibold mt-1 uppercase">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Timeline */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="font-bold text-lg tracking-widest">TIMELINE</h2>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">Deslize ou use as setas</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => moveTimeline(-1)} aria-label="Voltar na timeline" className="neu-btn flex h-10 w-10 items-center justify-center text-muted hover:text-ink">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => moveTimeline(1)} aria-label="Avançar na timeline" className="neu-btn flex h-10 w-10 items-center justify-center text-muted hover:text-ink">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div ref={timelineRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-5 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#facc15', color: '#222' }}
                  className="neu-sm flex min-h-[150px] min-w-[82%] snap-start flex-col items-center justify-center p-4 transition sm:min-w-[46%] lg:min-w-[31%] xl:min-w-[23%]"
                >
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mb-1" />
                  <span className="text-xs font-bold">{item.year}</span>
                  <span className="mt-1 w-full text-center text-[10px] leading-relaxed text-muted">{item.desc}</span>
                  <div className="mt-3 h-1 w-12 rounded-full bg-amber" />
                </motion.div>
              ))}
            </div>
          </div>
          {/* Experiência */}
          <div className="mt-8">
            <h2 className="font-bold text-lg mb-2 tracking-widest">EXPERIÊNCIA</h2>
            <div className="flex flex-col gap-3">
              {experiences.map((exp, idx) => (
                <motion.div key={exp.year} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + idx * 0.2 }}>
                  <motion.button
                    className="neu-sm flex w-full flex-col items-start gap-1 border-l-4 border-amber p-3 text-left transition focus:outline-none focus:ring-2 focus:ring-amber sm:flex-row sm:items-center sm:gap-2"
                    onClick={() => setOpenExp(openExp === idx ? null : idx)}
                    whileHover={{ scale: 1.05, backgroundColor: '#facc15', color: '#222' }}
                  >
                    <span className="text-yellow-400 font-bold text-lg">{exp.year}</span>
                    <span className="font-bold text-ink">{exp.title}</span>
                    <span className="break-words text-muted">@ {exp.company}</span>
                  </motion.button>
                  {openExp === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.3 }} className="overflow-hidden px-4 py-2 bg-white/20 border-l-4 border-yellow-200 rounded-b-lg text-xs text-gray-900">
                      {exp.desc}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Lado Direito */}
        {/* <div className="md:w-1/3 bg-yellow-400 flex flex-col items-center justify-between p-8 relative min-h-[600px]">
          <div className="absolute top-8 right-8 flex gap-4">
            <a href="#" className="text-black text-2xl font-bold hover:scale-110 transition-transform">Be</a>
            <a href="#" className="text-black text-2xl font-bold hover:scale-110 transition-transform">G+</a>
            <a href="#" className="text-black text-2xl font-bold hover:scale-110 transition-transform">in</a>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative mt-16">
              <Image src={profilePic} alt="Foto de perfil" width={180} height={180} className="rounded-lg border-4 border-white shadow-xl object-cover" />
            </motion.div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
