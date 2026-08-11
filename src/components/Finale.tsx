import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const MONO = '"JetBrains Mono", monospace';

const STREAMS = [
  { d: "M 20 0 C 20 70, 180 60, 180 126", delay: "0s" },
  { d: "M 100 0 C 100 60, 180 70, 180 126", delay: "0.4s" },
  { d: "M 180 0 L 180 126", delay: "0.8s" },
  { d: "M 260 0 C 260 60, 180 70, 180 126", delay: "1.2s" },
  { d: "M 340 0 C 340 70, 180 60, 180 126", delay: "1.6s" },
];

function Convergence() {
  return (
    <svg viewBox="0 0 360 140" className="mx-auto w-56 md:w-72" aria-hidden>
      <defs>
        <filter id="glowF" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {STREAMS.map((s) => (
        <g key={s.d}>
          <path d={s.d} fill="none" stroke="#d2cdc6" strokeWidth={1} className="dash-anim" />
          <circle r={2.2} fill="#17191f" filter="url(#glowF)">
            <animateMotion dur="2.1s" begin={s.delay} repeatCount="indefinite" path={s.d} />
          </circle>
        </g>
      ))}
      <circle cx={180} cy={126} r={9} fill="none" stroke="#17191f44" className="ring-out" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <circle cx={180} cy={126} r={4} fill="#17191f" filter="url(#glowF)" />
      <text x={180} y={112} textAnchor="middle" fontFamily={MONO} fontSize={7.5} letterSpacing={3} fill="#a5a8b6">INSIGHT</text>
    </svg>
  );
}

const LINKS = [
  { label: "GITHUB", icon: <GithubIcon size={14} />, href: "https://github.com" },
  { label: "LINKEDIN", icon: <LinkedinIcon size={14} />, href: "https://linkedin.com" },
  { label: "E-MAIL", icon: <Mail size={14} />, href: "mailto:anderson.dataeng@gmail.com" },
];

export default function Finale() {
  return (
    <section id="contato" className="relative z-10 scroll-mt-24 overflow-hidden px-5 pb-10 pt-28 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
          <Convergence />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-10 font-display text-xl font-medium leading-snug text-muted md:text-3xl">
          O dado bruto quase nunca conta uma história.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-[2.6rem]">
          Meu trabalho é construir o <span className="text-teal">caminho</span> até ela.
        </motion.p>

        {/* <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10">
          <a href="mailto:anderson.dataeng@gmail.com" className="neu-teal group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold">
            <Mail size={16} />
            Vamos conversar
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div> */}

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.55 }} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="neu-btn inline-flex items-center gap-2.5 px-4 py-2.5 font-mono text-[11px] tracking-[0.14em] text-muted transition-all hover:-translate-y-0.5 hover:text-teal" style={{ borderRadius: 12 }}>
              {l.icon}
              {l.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* footer */}
      <footer className="mx-auto mt-28 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-deepest pt-6 font-mono text-[10px] tracking-[0.16em] text-faint sm:flex-row">
        <span>© 2026 ANDERSON — ENGENHARIA DE DADOS</span>
        <span className="flex items-center gap-2">RAW_DATA <span className="text-teal">→</span> INSIGHT</span>
        <span>pipeline status: <span className="text-teal">✓ operational</span></span>
      </footer>
    </section>
  );
}
