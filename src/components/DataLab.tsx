import { motion } from "framer-motion";
import { Workflow, Zap, Braces, Radio, Cloud } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

type Status = "Learning" | "Experimenting" | "Building";

const STATUS_STYLE: Record<Status, { bg: string; text: string; dot: string; bar: string }> = {
  Learning: { bg: "bg-sky/10", text: "text-sky", dot: "bg-sky", bar: "bg-sky" },
  Experimenting: { bg: "bg-plum/10", text: "text-plum", dot: "bg-plum", bar: "bg-plum" },
  Building: { bg: "bg-teal/10", text: "text-teal", dot: "bg-teal", bar: "bg-teal" },
};

const EXPERIMENTS: { name: string; icon: typeof Workflow; focus: string; status: Status; level: number }[] = [
  { name: "Apache Airflow", icon: Workflow, focus: "Orquestração de pipelines", status: "Building", level: 4 },
  { name: "Apache Spark", icon: Zap, focus: "Processamento distribuído", status: "Experimenting", level: 3 },
  { name: "dbt", icon: Braces, focus: "Transformações com SQL", status: "Experimenting", level: 3 },
  { name: "Kafka", icon: Radio, focus: "Streaming de eventos", status: "Learning", level: 2 },
  { name: "Cloud Data Platforms", icon: Cloud, focus: "AWS · GCP · BigQuery", status: "Learning", level: 2 },
];

export default function DataLab() {
  return (
    <section id="lab" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:px-10">
      <SectionHeading index="06" tag="Data Lab" accent="coral" title={<>Laboratório de dados.</>} lead="Onde eu experimento, quebro e aprendo. Cada tecnologia abaixo tem um status real." />

      <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="neu mt-14 overflow-hidden">
        <div className="flex items-center justify-between border-b border-deepest px-5 py-3">
          <span className="font-mono text-[10.5px] tracking-[0.18em] text-muted">lab://experimentos</span>
          <span className="font-mono text-[9.5px] tracking-[0.18em] text-faint">ambientes: local · docker</span>
        </div>

        {/* table header */}
        <div className="hidden grid-cols-[2.5rem_1.4fr_1fr_10rem_10rem] gap-4 border-b border-deepest px-5 py-2.5 font-mono text-[9px] tracking-[0.24em] text-faint md:grid">
          <span>#</span><span>EXPERIMENTO</span><span>FOCO</span><span>STATUS</span><span>NÍVEL</span>
        </div>

        {EXPERIMENTS.map((e, i) => {
          const st = STATUS_STYLE[e.status];
          const Icon = e.icon;
          return (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="grid grid-cols-1 gap-3 border-b border-deepest px-5 py-4 transition-colors last:border-0 hover:bg-teal/[0.03] md:grid-cols-[2.5rem_1.4fr_1fr_10rem_10rem] md:items-center md:gap-4"
            >
              <span className="font-mono text-[10px] text-faint">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight text-ink">
                <Icon size={15} className="shrink-0 text-plum" />
                {e.name}
              </span>
              <span className="text-[13px] text-muted">{e.focus}</span>
              <span>
                <span className={cn("inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em]", st.bg, st.text)}>
                  <span className={cn("pulse-soft inline-block h-1.5 w-1.5 rounded-full", st.dot)} />
                  {e.status.toUpperCase()}
                </span>
              </span>
              <span className="flex gap-1">
                {Array.from({ length: 5 }, (_, s) => (
                  <span key={s} className="neu-progress-track h-2 flex-1 overflow-hidden">
                    {s < e.level && <span className={cn("block h-full", st.bar)} style={{ borderRadius: 9999 }} />}
                  </span>
                ))}
              </span>
            </motion.div>
          );
        })}

        <div className="border-t border-deepest px-5 py-3 font-mono text-[10px] tracking-[0.12em] text-faint">{"// sem promessas de domínio — apenas progresso honesto."}</div>
      </motion.div>
    </section>
  );
}
