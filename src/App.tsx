import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AmbientCanvas from "./components/AmbientCanvas";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import Journey from "./components/Journey";
import StackMap from "./components/StackMap";
import DataVision from "./components/DataVision";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Metrics from "./components/Metrics";
import DataLab from "./components/DataLab";
import Finale from "./components/Finale";
import UnderConstruction from "./components/UnderConstruction";
import { PAGES } from "./data/pages";
import { PageNavContext } from "./context/PageNav";

function PageContent({ id }: { id: string }) {
  switch (id) {
    case "home":
      return (
        <>
          <Hero />
          <Terminal />
        </>
      );
    case "jornada":
      return <Journey />;
    case "stack":
      return <StackMap />;
    case "pipeline":
      return <DataVision />;
    case "projetos":
      return <UnderConstruction area="Projetos" />;
    case "experiencia":
      return <UnderConstruction area="Experiência" />;
    case "lab":
      return <UnderConstruction area="Lab" />;
    case "contato":
      return <Finale />;
    default:
      return null;
  }
}

export default function App() {
  const [page, setPage] = useState(0);

  const goTo = useCallback((i: number) => {
    setPage(Math.max(0, Math.min(PAGES.length - 1, i)));
  }, []);

  // scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") goTo(page + 1);
      if (e.key === "ArrowLeft") goTo(page - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page, goTo]);

  const goToId = useCallback(
    (id: string) => {
      const idx = PAGES.findIndex((p) => p.id === id);
      if (idx >= 0) goTo(idx);
    },
    [goTo]
  );

  return (
    <PageNavContext.Provider value={goToId}>
      <div className="relative min-h-screen bg-base font-body text-ink antialiased">
        <AmbientCanvas />
        <Navbar page={page} onGoTo={goTo} />

        <main className="relative z-10 pb-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={PAGES[page].id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <PageContent id={PAGES[page].id} />
            </motion.div>
          </AnimatePresence>
        </main>

        <Pagination page={page} onGoTo={goTo} />
      </div>
    </PageNavContext.Provider>
  );
}
