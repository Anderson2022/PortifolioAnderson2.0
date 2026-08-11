import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Boxes, FileText, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Pipeline, { type FlowNodeData } from "./Pipeline";
import { GithubIcon } from "./BrandIcons";
import { usePageNav } from "../context/PageNav";

type Status = "operational" | "building";

interface ProjectDef {
  code: string;
  title: string;
  status: Status;
  flow: FlowNodeData[];
  desc: string;
  tech: string[];
  extra?: ReactNode;
}

function DimTable({ name, cols }: { name: string; cols: string[] }) {
  return (
    <div className="neu-inset-sm p-3">
      <div className="font-mono text-[10px] tracking-[0.16em] text-plum">{name}</div>
      <div className="mt-1.5 space-y-0.5 font-mono text-[9.5px] text-muted">{cols.map((c) => <div key={c}>{c}</div>)}</div>
    </div>
  );
}

function StarSchema() {
  return (
    <div className="neu-inset mt-7 p-4 md:p-5">
      <div className="mb-4 font-mono text-[9.5px] tracking-[0.24em] text-faint">modelagem // STAR_SCHEMA</div>
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-0">
        <div className="grid flex-1 grid-cols-2 gap-3 md:flex md:flex-col md:gap-4">
          <DimTable name="DIM_CUSTOMER" cols={["customer_id PK", "name", "segment", "city"]} />
          <DimTable name="DIM_PRODUCT" cols={["product_id PK", "sku", "category", "price"]} />
        </div>
        <div className="relative hidden self-center border-t border-dashed border-deepest md:block md:w-12" />
        <div className="neu-sm p-4">
          <div className="font-mono text-[10.5px] tracking-[0.18em] text-teal">FACT_SALES</div>
          <div className="mt-2 space-y-0.5 font-mono text-[9.5px] text-muted">
            <div>sale_id <span className="text-faint">PK</span></div>
            <div>date_key <span className="text-plum">FK</span></div>
            <div>customer_key <span className="text-plum">FK</span></div>
            <div>product_key <span className="text-plum">FK</span></div>
            <div>seller_key <span className="text-plum">FK</span></div>
            <div>qty</div>
            <div>total_amount</div>
          </div>
        </div>
        <div className="relative hidden self-center border-t border-dashed border-deepest md:block md:w-12" />
        <div className="grid flex-1 grid-cols-2 gap-3 md:flex md:flex-col md:gap-4">
          <DimTable name="DIM_DATE" cols={["date_key PK", "date", "month", "quarter"]} />
          <DimTable name="DIM_SELLER" cols={["seller_id PK", "name", "team", "region"]} />
        </div>
      </div>
    </div>
  );
}

function ProjectSchematic({ p, i }: { p: ProjectDef; i: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const goTo = usePageNav();
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="neu group relative overflow-hidden transition-all hover:-translate-y-1"
    >
      {/* header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-deepest px-5 py-3 md:px-7">
        <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
          <span className="text-plum">{p.code}</span> {"// "}{p.title.toLowerCase().replace(/\s+/g, "_")}
        </span>
        {p.status === "operational" ? (
          <span className="flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.18em] text-teal">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" /> OPERACIONAL
          </span>
        ) : (
          <span className="flex items-center gap-1.5 rounded-full bg-amber/10 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.18em] text-amber">
            <span className="pulse-soft inline-block h-1.5 w-1.5 rounded-full bg-amber" /> EM EVOLUÇÃO
          </span>
        )}
      </div>

      <div className="relative p-5 md:p-7">
        {/* flow first */}
        <div className="neu-inset px-4 py-6 md:px-6">
          <div className="mb-5 font-mono text-[9.5px] tracking-[0.24em] text-faint">fluxo_de_dados //</div>
          <Pipeline nodes={p.flow} compact />
        </div>

        {p.extra}

        {/* description */}
        <div className="mt-7 grid gap-7 border-t border-dashed border-deepest pt-6 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">{p.title}</h3>
            <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-muted">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="neu-flat px-2.5 py-1 font-mono text-[10.5px] text-ink">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-2.5 md:items-end">
            <span className="mb-1 font-mono text-[9.5px] tracking-[0.24em] text-faint md:self-end">ações //</span>
            {[
              { label: "Architecture", icon: <Boxes size={13} /> },
              { label: "GitHub", icon: <GithubIcon size={13} /> },
              { label: "Documentation", icon: <FileText size={13} /> },
            ].map((b) => (
              <button key={b.label} onClick={() => goTo("contato")} className="neu-btn group/btn inline-flex items-center gap-2.5 px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-muted transition-all hover:-translate-y-0.5 hover:text-teal" style={{ borderRadius: 10 }}>
                {b.icon}
                {b.label.toUpperCase()}
                <ArrowUpRight size={11} className="opacity-50 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const PROJECTS: ProjectDef[] = [
  {
    code: "PROJETO_01",
    title: "Sales Data Pipeline",
    status: "operational",
    flow: [
      { label: "API + CSV", sub: "origem", tone: "muted" },
      { label: "Python", sub: "extração", tone: "plum" },
      { label: "Data Cleaning", sub: "qualidade", tone: "plum" },
      { label: "PostgreSQL", sub: "storage", tone: "teal" },
      { label: "Analytics", sub: "consumo", tone: "coral" },
    ],
    desc: "Pipeline responsável por coletar, transformar, validar e armazenar dados comerciais — do arquivo bruto à consulta analítica.",
    tech: ["Python", "PostgreSQL", "Pandas", "Docker"],
  },
  {
    code: "PROJETO_02",
    title: "Commercial Data Warehouse",
    status: "operational",
    flow: [
      { label: "Oracle", sub: "origem", tone: "muted" },
      { label: "ETL", sub: "extração · carga", tone: "plum" },
      { label: "PostgreSQL DW", sub: "warehouse", tone: "teal" },
      { label: "Star Schema", sub: "modelagem", tone: "teal" },
      { label: "Power BI", sub: "dashboards", tone: "coral" },
    ],
    desc: "Data warehouse comercial modelado em star schema, criando uma fonte única de verdade.",
    tech: ["SQL", "Oracle", "PostgreSQL", "Power BI"],
    extra: <StarSchema />,
  },
  {
    code: "PROJETO_03",
    title: "Automated Data Pipeline",
    status: "building",
    flow: [
      { label: "REST API", sub: "origem", tone: "muted" },
      { label: "Airflow", sub: "orquestração", tone: "plum" },
      { label: "Python", sub: "transformação", tone: "plum" },
      { label: "PostgreSQL", sub: "storage", tone: "teal" },
      { label: "Data Warehouse", sub: "destino", tone: "coral" },
    ],
    desc: "Pipeline agendado e orquestrado com Airflow: coleta automática via API, transformação e carga programada. Projeto em evolução ativa.",
    tech: ["Python", "Airflow", "PostgreSQL", "Docker"],
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-10">
      <SectionHeading
        index="04"
        tag="Projetos"
        title={<>Não apenas projetos. <span className="text-teal">Sistemas de dados.</span></>}
        lead="Cada projeto é apresentado pelo que ele é: um fluxo com origem, processamento e destino."
      />
      <div className="mt-16 space-y-10">
        {PROJECTS.map((p, i) => <ProjectSchematic key={p.code} p={p} i={i} />)}
      </div>
    </section>
  );
}
