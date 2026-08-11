import { motion } from "framer-motion";
import { Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

interface Step {
  index: string;
  tag: string;
  title: string;
  desc: string;
  accent: string;
  dotColor: string;
  final?: boolean;
}

const STEPS: Step[] = [
  { index: "STEP_01", tag: "FOUNDATION", title: "Engenharia de Computação", desc: "Base em programação, algoritmos, arquitetura de sistemas e lógica.", accent: "text-faint", dotColor: "bg-faint" },
  { index: "STEP_02", tag: "ANALYTICS · BI", title: "Especialização em Análise de Dados e BI", desc: "Evolução para análise, visualização e inteligência baseada em dados.", accent: "text-plum", dotColor: "bg-plum" },
  { index: "STEP_03", tag: "BACKEND", title: "Desenvolvimento Back-end", desc: "Experiência construindo APIs, integrações e sistemas, trabalhando diretamente com bancos de dados.", accent: "text-plum", dotColor: "bg-plum" },
  { index: "STEP_04", tag: "DATA FOCUS", title: "Jornada de Dados", desc: "Estudo focado em SQL, Python, modelagem, pipelines, ETL e arquitetura de dados.", accent: "text-teal", dotColor: "bg-teal" },
  { index: "STEP_05", tag: "TARGET", title: "Data Engineering", desc: "Objetivo atual: desenvolver soluções de dados confiáveis, escaláveis e automatizadas.", accent: "text-teal", dotColor: "bg-teal", final: true },
];

export default function Journey() {
  return (
    <section id="jornada" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-10">
      <SectionHeading index="01" tag="Minha jornada" title={<>Um fluxo em evolução.</>} lead="Do código à arquitetura de dados: cada etapa processou e alimentou a seguinte." />

      <div className="relative mt-16 pl-1">
        {/* rail */}
        <div className="absolute bottom-4 left-[8px] top-2 w-px md:left-[10px]">
          <span className="absolute inset-0 bg-gradient-to-b from-deepest via-plum/40 to-teal/60" />
          <span className="flow-dot-y absolute -left-[3px] h-2 w-2 rounded-full bg-teal" style={{ ["--dur" as string]: "6s" }} />
        </div>

        {STEPS.map((s, i) => (
          <motion.div
            key={s.index}
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className="relative flex gap-6 pb-12 last:pb-0 md:gap-10"
          >
            <div className="relative z-10 mt-1.5 flex w-4 shrink-0 justify-center md:w-5">
              <span className={cn("neu-circle h-4 w-4 md:h-5 md:w-5", s.final && "!bg-gradient-to-br !from-teal !to-tealdark")} />
              {s.final && <span className="ring-out absolute h-7 w-7 rounded-full border border-teal/40" />}
            </div>

            <div className={cn("flex-1", s.final && "neu p-5 md:p-6")}>
              <div className="flex flex-wrap items-center gap-3">
                <span className={cn("font-mono text-[10px] font-semibold tracking-[0.28em]", s.accent)}>{s.index}</span>
                <span className="h-px w-6 bg-deepest" />
                <span className="neu-flat px-2 py-0.5 font-mono text-[9px] tracking-[0.2em] text-muted">{s.tag}</span>
                {s.final && (
                  <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal/10 to-mint/10 px-2.5 py-0.5 font-mono text-[9px] tracking-[0.18em] text-teal">
                    <Target size={10} /> OBJETIVO ATUAL
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">{s.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{s.desc}</p>
              {s.final && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {["pipelines", "modelagem", "automação", "qualidade de dados"].map((c) => (
                    <span key={c} className="neu-flat px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted">{c}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
