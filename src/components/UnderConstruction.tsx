import { motion } from "framer-motion";
import { ArrowLeft, Construction } from "lucide-react";
import { usePageNav } from "../context/PageNav";

export default function UnderConstruction({ area }: { area: string }) {
  const goTo = usePageNav();

  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center px-5 py-28 md:px-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="neu w-full p-8 text-center md:p-14">
        <div className="neu-circle mx-auto flex h-20 w-20 items-center justify-center text-amber">
          <Construction size={34} />
        </div>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[.3em] text-faint">error // 404</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">Em construção.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
          A área de {area} está sendo preparada e será publicada em breve.
        </p>
        <button onClick={() => goTo("home")} className="neu-teal mt-9 inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider">
          <ArrowLeft size={15} /> Voltar ao início
        </button>
      </motion.div>
    </section>
  );
}
