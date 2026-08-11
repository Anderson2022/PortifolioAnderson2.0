import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

function CountUp({ to, className }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.3, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref} className={className}>{n}</span>;
}

const CELLS = [
  {
    id: "METRIC_01",
    value: <CountUp to={3} className="text-teal" />,
    label: "áreas conectadas",
    detail: "Software · Dados · Negócios",
    chips: ["SOFTWARE", "DADOS", "NEGÓCIOS"],
  },
  {
    id: "METRIC_02",
    value: <span className="text-plum">SQL</span>,
    label: "diariamente",
    detail: "Trabalho constante com consultas, modelagem e banco de dados.",
    chips: ["CONSULTAS", "MODELAGEM", "OTIMIZAÇÃO"],
  },
  {
    id: "METRIC_03",
    value: <span className="text-coral">back<span className="text-faint"> → </span>data</span>,
    label: "transição em curso",
    detail: "Experiência de software sendo aplicada à Engenharia de Dados.",
    chips: ["BACKEND", "PIPELINES", "AUTOMAÇÃO"],
  },
];

export default function Metrics() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 pb-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="grid overflow-hidden sm:grid-cols-3 sm:gap-6 max-sm:space-y-6"
      >
        {CELLS.map((c) => (
          <div key={c.id} className="neu group p-7 transition-all hover:-translate-y-1 md:p-8">
            <div className="font-mono text-[9px] tracking-[0.26em] text-faint">{c.id}</div>
            <div className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-[2.75rem]">{c.value}</div>
            <div className="mt-1.5 font-display text-base font-semibold text-ink/90">{c.label}</div>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{c.detail}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {c.chips.map((chip) => (
                <span key={chip} className="neu-inset-sm px-2 py-0.5 font-mono text-[9px] tracking-[0.14em] text-faint">{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
      <p className="mt-4 text-center font-mono text-[10px] tracking-[0.16em] text-faint">{"// sem métricas inventadas — apenas o que é real na trajetória."}</p>
    </section>
  );
}
