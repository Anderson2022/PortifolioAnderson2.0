import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { usePageNav } from "../context/PageNav";

const MONO = '"JetBrains Mono", monospace';

const SOURCES = [
  { x: 20, label: "API", sub: "rest · json" },
  { x: 158, label: "ORACLE", sub: "database" },
  { x: 296, label: "CSV", sub: "files" },
  { x: 434, label: "ERP", sub: "sankhya" },
];

const PATHS = [
  "M 72 84 C 72 148, 220 140, 220 200",
  "M 210 84 C 210 148, 260 140, 260 200",
  "M 348 84 C 348 148, 300 140, 300 200",
  "M 486 84 C 486 148, 340 140, 340 200",
];

const BARS = [
  { h: 18, fill: "#17191f" },
  { h: 30, fill: "#7656b5" },
  { h: 24, fill: "#2d3040" },
  { h: 38, fill: "#347fc0" },
  { h: 28, fill: "#df5f52" },
];

function HeroSchematic() {
  return (
    <svg viewBox="0 0 560 640" className="w-full" role="img" aria-label="Esquemático de infraestrutura de dados">
      <defs>
        <filter id="glowS" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* bg */}
      <rect width="560" height="640" rx="16" fill="#f0ece7" />
      <rect width="560" height="640" rx="16" fill="none" stroke="#d2cdc6" strokeWidth="1" />

      {/* source nodes */}
      {SOURCES.map((s) => (
        <g key={s.label}>
          <rect x={s.x} y={36} width={104} height={48} rx={12} fill="#e8e4df"
            style={{ filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.07)) drop-shadow(-3px -3px 6px rgba(255,255,255,0.6))" }} />
          <text x={s.x + 52} y={57} textAnchor="middle" fontFamily={MONO} fontSize={11} letterSpacing={2} fill="#2d3040">{s.label}</text>
          <text x={s.x + 52} y={72} textAnchor="middle" fontFamily={MONO} fontSize={7} letterSpacing={1.5} fill="#a5a8b6">{s.sub}</text>
        </g>
      ))}

      {/* paths */}
      {PATHS.map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke="#d2cdc6" strokeWidth={1} className="dash-anim" />
          <circle r={3} fill="#17191f" filter="url(#glowS)">
            <animateMotion dur="2.5s" begin={`${i * 0.55}s`} repeatCount="indefinite" path={d} />
          </circle>
          <circle r={1.8} fill="#a48bcf" filter="url(#glowS)">
            <animateMotion dur="2.5s" begin={`${i * 0.55 + 1.25}s`} repeatCount="indefinite" path={d} />
          </circle>
        </g>
      ))}

      {/* pipeline core */}
      <rect x={190} y={200} width={180} height={70} rx={14} fill="#e8e4df"
        style={{ filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.07)) drop-shadow(-4px -4px 8px rgba(255,255,255,0.6))" }} />
      <text x={280} y={227} textAnchor="middle" fontFamily={MONO} fontSize={12} letterSpacing={5} fill="#17191f">PIPELINE</text>
      <line x1={206} y1={242} x2={354} y2={242} stroke="#d2cdc6" strokeWidth={1} />
      <text x={280} y={258} textAnchor="middle" fontFamily={MONO} fontSize={7} letterSpacing={2} fill="#a5a8b6">ingest · clean · load</text>

      {/* pipeline → transform */}
      <line x1={280} y1={270} x2={280} y2={330} stroke="#d2cdc6" strokeWidth={1} className="dash-anim" />
      <circle r={2.6} fill="#17191f" filter="url(#glowS)">
        <animateMotion dur="1.7s" begin="0.4s" repeatCount="indefinite" path="M 280 270 L 280 330" />
      </circle>

      <rect x={205} y={330} width={150} height={54} rx={14} fill="#e8e4df"
        style={{ filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.07)) drop-shadow(-4px -4px 8px rgba(255,255,255,0.6))" }} />
      <text x={280} y={353} textAnchor="middle" fontFamily={MONO} fontSize={10} letterSpacing={2.5} fill="#a48bcf">TRANSFORMATION</text>
      <text x={280} y={370} textAnchor="middle" fontFamily={MONO} fontSize={7} letterSpacing={2} fill="#a5a8b6">sql · joins · types</text>

      {/* transform → warehouse */}
      <line x1={280} y1={384} x2={280} y2={424} stroke="#d2cdc6" strokeWidth={1} className="dash-anim" />
      <circle r={2.6} fill="#2d3040" filter="url(#glowS)">
        <animateMotion dur="1.9s" begin="0.9s" repeatCount="indefinite" path="M 280 384 L 280 424" />
      </circle>

      {/* warehouse (cylinder look) */}
      <g>
        <rect x={210} y={436} width={140} height={62} fill="#e8e4df" rx={10}
          style={{ filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.07)) drop-shadow(-4px -4px 8px rgba(255,255,255,0.6))" }} />
        <ellipse cx={280} cy={498} rx={70} ry={12} fill="#ddd8d2" />
        <ellipse cx={280} cy={436} rx={70} ry={12} fill="#e8e4df" stroke="#d2cdc6" />
        <text x={280} y={468} textAnchor="middle" fontFamily={MONO} fontSize={10} letterSpacing={2} fill="#17191f">DATA WAREHOUSE</text>
        <text x={280} y={484} textAnchor="middle" fontFamily={MONO} fontSize={7} letterSpacing={1.5} fill="#a5a8b6">fact_sales · dim_*</text>
      </g>

      {/* warehouse → analytics */}
      <line x1={280} y1={512} x2={280} y2={554} stroke="#d2cdc6" strokeWidth={1} className="dash-anim" />
      <circle r={2.6} fill="#62b6e7" filter="url(#glowS)">
        <animateMotion dur="1.5s" begin="1.3s" repeatCount="indefinite" path="M 280 512 L 280 554" />
      </circle>

      {/* analytics */}
      <rect x={160} y={556} width={240} height={64} rx={14} fill="#e8e4df"
        style={{ filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.07)) drop-shadow(-4px -4px 8px rgba(255,255,255,0.6))" }} />
      {BARS.map((b, i) => (
        <rect key={i} x={182 + i * 18} y={608 - b.h} width={10} height={b.h} rx={3} fill={b.fill} opacity={0.85} className="bar-anim" style={{ animationDelay: `${i * 0.22}s` }} />
      ))}
      <polyline points="300,602 318,590 334,597 352,581 372,588" fill="none" stroke="#df5f52" strokeWidth={1.5} strokeLinecap="round" className="dash-anim" />
      <text x={280} y={636} textAnchor="middle" fontFamily={MONO} fontSize={8} letterSpacing={3.5} fill="#a5a8b6">ANALYTICS → DECISION</text>
    </svg>
  );
}

export default function Hero() {
  const goTo = usePageNav();
  return (
    <section id="topo" className="relative mx-auto grid min-h-screen max-w-[1400px] items-center gap-14 px-5 pb-16 pt-28 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="neu-sm inline-flex items-center gap-2.5 px-4 py-2"
        >
          <span className="pulse-soft inline-block h-2 w-2 rounded-full bg-teal" />
          <span className="font-mono text-[11px] tracking-[0.28em] text-teal">DATA ENGINEERING</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-7 font-display text-[2.5rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl xl:text-[3.8rem]"
        >
          Eu construo o{" "}
          <span className="relative whitespace-nowrap text-teal">
            caminho
            <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-teal to-mint" />
          </span>{" "}
          que os dados percorrem.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg"
        >
          Da coleta ao insight, desenvolvendo pipelines, integrações e estruturas que
          transformam dados brutos em informação útil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button onClick={() => goTo("projetos")} className="neu-teal group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold">
            Explorar meus projetos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button onClick={() => goTo("jornada")} className="neu-btn inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium text-muted transition-colors hover:text-teal">
            Conhecer minha jornada
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-12 flex items-center gap-4 font-mono text-[11px] tracking-[0.2em]"
        >
          <span className="text-faint">RAW_DATA</span>
          <span className="neu-progress-track relative inline-block h-1 w-16 overflow-hidden">
            <span className="neu-progress-bar flow-dot-x absolute top-0 h-1 w-4" style={{ ["--dur" as string]: "1.6s" }} />
          </span>
          <span className="text-teal">INSIGHT</span>
          <a href="#terminal" aria-label="Rolar para o conteúdo" className="ml-2 text-faint transition-colors hover:text-teal">
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* right — live schematic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="neu overflow-hidden p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between border-b border-deepest pb-3">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-coral/70" />
                <i className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                <i className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              </span>
              <span className="font-mono text-[10px] tracking-wider text-muted">arquitetura_de_dados.svg</span>
            </div>
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] text-teal">
              <span className="pulse-soft inline-block h-1.5 w-1.5 rounded-full bg-teal" />
              LIVE
            </span>
          </div>

          <HeroSchematic />

          <div className="mt-4 flex items-center justify-between border-t border-deepest pt-3 font-mono text-[9.5px] tracking-[0.16em] text-faint">
            <span>nodes: 8</span>
            <span>packets: streaming</span>
            <span>latency: 12ms</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
