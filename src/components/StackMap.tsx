import { motion } from "framer-motion";
import { Braces, Database, Cpu, Server, BarChart3, Network } from "lucide-react";
import SectionHeading from "./SectionHeading";

const GROUPS_LEFT = [
  { name: "Linguagens", icon: Braces, techs: ["Python", "SQL", "Java"] },
  { name: "Banco de Dados", icon: Database, techs: ["PostgreSQL", "Oracle", "MySQL"] },
  { name: "Processamento", icon: Cpu, techs: ["Pandas", "ETL", "ELT"] },
];

const GROUPS_RIGHT = [
  { name: "Infraestrutura", icon: Server, techs: ["Docker", "Linux", "Git"] },
  { name: "Analytics", icon: BarChart3, techs: ["Power BI"] },
  { name: "Conceitos", icon: Network, techs: ["Data Pipelines", "Data Modeling", "APIs", "Data Warehouse"] },
];

const LEARNING = ["Airflow", "Spark", "dbt", "Kafka", "Cloud"];

function GroupPanel({ name, icon: Icon, techs, side, delay }: {
  name: string; icon: typeof Braces; techs: string[]; side: "left" | "right"; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="group neu-sm p-4 transition-all hover:-translate-y-0.5 lg:p-5"
    >
      <span className={side === "left"
        ? "absolute -right-[3.5rem] top-1/2 hidden w-14 border-t border-dashed border-deepest lg:block"
        : "absolute -left-[3.5rem] top-1/2 hidden w-14 border-t border-dashed border-deepest lg:block"
      } />
      <div className="flex items-center gap-2.5">
        <Icon size={14} className="text-plum transition-colors group-hover:text-teal" />
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">{name}</span>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {techs.map((t) => (
          <span key={t} className="neu-btn cursor-default px-2.5 py-1 font-mono text-[11px] text-ink transition-all hover:-translate-y-0.5 hover:text-teal" style={{ borderRadius: 8 }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function StackMap() {
  return (
    <section id="stack" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-10">
      <SectionHeading index="02" tag="Stack" accent="plum" title={<>Mapa de tecnologias.</>} lead="O núcleo é engenharia de dados — cada grupo é um afluente que alimenta esse centro." />

      <div className="mt-16 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="order-2 space-y-6 lg:order-1 lg:pr-0 lg:text-right">
          <div className="space-y-6 lg:[&>*]:ml-auto">
            {GROUPS_LEFT.map((g, i) => <GroupPanel key={g.name} {...g} side="left" delay={i * 0.08} />)}
          </div>
        </div>

        <div className="order-1 mb-10 flex flex-col items-center lg:order-2 lg:mb-0 lg:px-14">
          <span className="mb-4 hidden h-16 w-px border-l border-dashed border-deepest lg:block" />
          <div className="relative flex h-40 w-40 items-center justify-center md:h-44 md:w-44">
            <span className="ring-out absolute inset-0 rounded-full border border-teal/30" />
            <span className="ring-out absolute inset-0 rounded-full border border-plum/20" style={{ animationDelay: "1.4s" }} />
            <div className="neu-circle relative z-10 flex h-full w-full flex-col items-center justify-center gap-1.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal to-tealdark">
                <Database size={20} className="text-white" />
              </div>
              <span className="font-display text-sm font-bold leading-tight tracking-wide text-ink">DATA<br />ENGINEERING</span>
              <span className="font-mono text-[8.5px] tracking-[0.25em] text-faint">core // hub</span>
            </div>
          </div>
          <span className="mt-4 hidden h-16 w-px border-l border-dashed border-deepest lg:block" />
        </div>

        <div className="order-3 space-y-6">
          {GROUPS_RIGHT.map((g, i) => <GroupPanel key={g.name} {...g} side="right" delay={i * 0.08} />)}
        </div>
      </div>

      {/* learning queue */}
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55 }} className="mt-16 border-t border-deepest pt-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
          <span className="font-mono text-[10px] tracking-[0.28em] text-faint">learning_queue //</span>
          {LEARNING.map((t) => (
            <span key={t} className="neu-sm flex items-center gap-2 px-3 py-1.5 font-mono text-[11px] text-muted">
              <span className="pulse-soft inline-block h-1.5 w-1.5 rounded-full bg-amber" />
              {t}
              <span className="text-[9px] tracking-[0.16em] text-amber">LEARNING</span>
            </span>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10.5px] leading-relaxed text-faint">* em evolução: tecnologias em estudo ativo — sem experiência profissional declarada.</p>
      </motion.div>
    </section>
  );
}
