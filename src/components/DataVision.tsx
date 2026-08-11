import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

type StageTone = "muted" | "plum" | "teal" | "coral";

const STAGES: { label: string; desc: string; chips: string[]; tone: StageTone }[] = [
  { label: "DATA SOURCE", desc: "A origem de tudo: sistemas, arquivos, eventos e pessoas gerando dados brutos.", chips: ["API", "ERP", "DATABASE", "FILES"], tone: "muted" },
  { label: "INGESTION", desc: "Coleta e movimentação dos dados brutos até a plataforma, sem perda.", chips: ["BATCH", "STREAMING", "EXTRACT"], tone: "muted" },
  { label: "VALIDATION", desc: "Checagem de qualidade: schema, nulos, duplicidades e regras de negócio.", chips: ["SCHEMA", "NULLS", "DEDUP"], tone: "plum" },
  { label: "TRANSFORMATION", desc: "Limpeza, enriquecimento, joins e padronização dos dados.", chips: ["CLEAN", "JOIN", "AGGREGATE"], tone: "plum" },
  { label: "DATA MODEL", desc: "Estrutura que organiza o dado do jeito que o negócio pensa.", chips: ["STAR SCHEMA", "FACTS", "DIMENSIONS"], tone: "teal" },
  { label: "DATA WAREHOUSE", desc: "A fonte única de verdade — histórica, confiável e consultável.", chips: ["POSTGRESQL", "ORACLE", "HISTÓRICO"], tone: "teal" },
  { label: "ANALYTICS", desc: "Métricas, dashboards e exploração sobre dados em que se pode confiar.", chips: ["POWER BI", "SQL", "KPIs"], tone: "coral" },
  { label: "BUSINESS DECISION", desc: "O destino final: decisões tomadas com evidência, não com achismo.", chips: ["INSIGHT"], tone: "coral" },
];

const TONE_COLOR: Record<StageTone, string> = {
  muted: "text-faint",
  plum: "text-plum",
  teal: "text-teal",
  coral: "text-coral",
};

const TONE_BAR: Record<StageTone, string> = {
  muted: "bg-faint",
  plum: "bg-plum",
  teal: "bg-teal",
  coral: "bg-coral",
};

export default function DataVision() {
  const [active, setActive] = useState(0);

  return (
    <section id="visao" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-28 md:px-10">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="self-start lg:sticky lg:top-28">
          <SectionHeading index="03" tag="Como eu vejo dados" title={<>Dados não começam no dashboard.</>} lead="Antes de um gráfico existir, existe uma cadeia inteira de decisões técnicas." />

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: 0.15 }} className="neu mt-9 p-5 md:p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.28em] text-faint">STAGE_MONITOR</span>
              <span className="pulse-soft inline-block h-2 w-2 rounded-full bg-teal" />
            </div>
            <div className="mt-3 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
              {String(active + 1).padStart(2, "0")}
              <span className="text-2xl text-faint md:text-3xl">/08</span>
            </div>
            <div className={cn("mt-1.5 font-mono text-sm tracking-[0.2em]", TONE_COLOR[STAGES[active].tone])}>
              {STAGES[active].label}
            </div>
            <div className="mt-5 flex gap-1.5">
              {STAGES.map((s, i) => (
                <span key={i} className={cn("neu-progress-track h-1.5 flex-1 overflow-hidden")}>
                  {i <= active && <span className={cn("block h-full transition-all duration-500", i === active ? TONE_BAR[s.tone] : "bg-teal/40")} style={{ borderRadius: 9999 }} />}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* the chain */}
        <div className="relative">
          <div className="absolute bottom-6 left-[15px] top-2 w-px">
            <span className="absolute inset-0 bg-gradient-to-b from-deepest via-plum/30 via-40% to-teal/50" />
            <span className="flow-dot-y absolute -left-[3px] h-2 w-2 rounded-full bg-teal" style={{ ["--dur" as string]: "5s" }} />
          </div>

          {STAGES.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0.25 }}
              whileInView={{ opacity: 1 }}
              onViewportEnter={() => setActive(i)}
              viewport={{ margin: "-42% 0px -42% 0px" }}
              transition={{ duration: 0.5 }}
              className="relative pb-9 pl-12 last:pb-0 md:pl-14"
            >
              <div className={cn("neu-sm absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center font-mono text-[9.5px] font-semibold transition-all duration-500", TONE_COLOR[s.tone])}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className={cn("font-display text-lg font-semibold tracking-tight md:text-xl", TONE_COLOR[s.tone] === "text-faint" ? "text-ink" : TONE_COLOR[s.tone])}>
                {s.label}
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">{s.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.chips.map((c) => (
                  <span key={c} className="neu-inset-sm px-2 py-0.5 font-mono text-[9.5px] tracking-[0.14em] text-muted">{c}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
