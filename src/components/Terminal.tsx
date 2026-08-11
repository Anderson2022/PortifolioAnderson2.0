import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type ScriptLine = { prompt?: boolean; ok?: boolean; text: string; pause?: number };
type RenderedLine = { prompt?: boolean; ok?: boolean; text: string; typing?: boolean };

const SCRIPT: ScriptLine[] = [
  { prompt: true, text: "./run_pipeline.sh", pause: 550 },
  { text: "> collecting data...", pause: 400 },
  { text: "> validating records...", pause: 400 },
  { text: "> transforming dataset...", pause: 400 },
  { text: "> loading warehouse...", pause: 460 },
  { ok: true, text: "pipeline completed successfully ✓  (4 stages · 0 errors)" },
];

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let alive = true;
    const timers: number[] = [];
    const sleep = (ms: number) => new Promise<void>((r) => { const t = window.setTimeout(r, ms); timers.push(t); });

    async function run() {
      while (alive) {
        setLines([]); setFinished(false);
        await sleep(700);
        for (const line of SCRIPT) {
          if (!alive) return;
          setLines((prev) => [...prev, { prompt: line.prompt, ok: line.ok, text: "", typing: true }]);
          let out = "";
          for (const ch of line.text) {
            if (!alive) return;
            out += ch;
            setLines((prev) => { const c = [...prev]; c[c.length - 1] = { prompt: line.prompt, ok: line.ok, text: out, typing: true }; return c; });
            await sleep(13 + Math.random() * 26);
          }
          setLines((prev) => { const c = [...prev]; c[c.length - 1] = { prompt: line.prompt, ok: line.ok, text: line.text }; return c; });
          await sleep(line.pause ?? 340);
        }
        setFinished(true);
        await sleep(9000);
      }
    }
    run();
    return () => { alive = false; timers.forEach(clearTimeout); };
  }, [inView]);

  return (
    <section id="terminal" className="relative z-10 mx-auto max-w-[1400px] px-5 pb-10 pt-2 md:px-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div ref={ref} className="neu w-full max-w-2xl overflow-hidden">
          <div className="flex items-center gap-3 border-b border-deepest bg-surface px-4 py-2.5" style={{ borderRadius: "16px 16px 0 0" }}>
            <span className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-coral/70" />
              <i className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <i className="h-2.5 w-2.5 rounded-full bg-teal/70" />
            </span>
            <span className="font-mono text-[10px] tracking-wider text-muted">anderson@data-engineering: ~/pipelines</span>
          </div>

          <div className="h-[212px] overflow-hidden bg-[#2d3040] px-4 py-3.5 font-mono text-[12.5px] leading-7" style={{ borderRadius: "0 0 16px 16px" }}>
            {lines.map((l, i) => (
              <div key={i} className="whitespace-nowrap">
                {l.prompt && <span className="text-[#f5f1ec]">anderson@data-engineering</span>}
                {l.prompt && <span className="text-[#a5a8b6]">:~$ </span>}
                {!l.prompt && !l.ok && <span className="select-none text-[#555]">  </span>}
                <span className={l.ok ? "text-[#f5f1ec]" : l.prompt ? "text-[#e8e4df]" : "text-[#c5c3be]"}>{l.text}</span>
                {l.typing && <span className="anim-blink ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] bg-[#f5f1ec]" />}
              </div>
            ))}
            {finished && (
              <div className="whitespace-nowrap">
                <span className="text-[#f5f1ec]">anderson@data-engineering</span>
                <span className="text-[#a5a8b6]">:~$ </span>
                <span className="anim-blink ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] bg-[#f5f1ec]" />
              </div>
            )}
          </div>
        </div>

        <p className="hidden max-w-[220px] pb-2 font-mono text-[10px] leading-relaxed tracking-[0.12em] text-faint lg:block">
          {"// execução automática — o pipeline roda enquanto você observa o fluxo da página."}
        </p>
      </div>
    </section>
  );
}
