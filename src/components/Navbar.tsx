import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import { GithubIcon } from "./BrandIcons";
import { PAGES } from "../data/pages";
import { cn } from "../utils/cn";

interface Props {
  page: number;
  onGoTo: (i: number) => void;
}

export default function Navbar({ page, onGoTo }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (index: number) => {
    if (index === 0) {
      setMenuOpen(false);
      router.push("/");
      return;
    }
    handleSelectPage(index);
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSelectPage = (index: number) => {
    onGoTo(index);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto mt-3 max-w-[1300px] px-5 md:px-10">
          <div className="neu flex h-14 items-center justify-between px-5 md:px-8" style={{ borderRadius: 16 }}>
            <button
              onClick={() => router.push("/")}
              className="group flex items-center gap-2.5 text-left"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal to-tealdark text-xs font-bold text-white shadow-md">
                A
              </span>
              <span className="font-mono text-sm tracking-wider text-ink">
                anderson<span className="text-muted">.data</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 lg:flex">
              {PAGES.filter((p) => p.id !== "contato").map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => handleNavigation(i)}
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:text-teal",
                    i === page ? "font-bold text-teal" : "text-muted"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-teal sm:flex">
                <span className="pulse-soft inline-block h-2 w-2 rounded-full bg-teal" />
                ONLINE
              </span>
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="neu-btn flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-teal"
                style={{ borderRadius: 10 }}
              >
                <GithubIcon size={15} />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                className={cn(
                  "neu-btn flex h-9 w-9 items-center justify-center text-ink transition-all lg:hidden",
                  menuOpen && "neu-btn-pressed text-coral"
                )}
                style={{ borderRadius: 10 }}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Page progress bar */}
        <div className="mx-auto mt-1 max-w-[1300px] px-5 md:px-10">
          <div className="neu-progress-track h-1 overflow-hidden">
            <div
              className="neu-progress-bar h-full origin-left transition-transform duration-500 ease-out"
              style={{ transform: `scaleX(${(page + 1) / PAGES.length})` }}
            />
          </div>
        </div>
      </header>

      {/* Mobile Modal Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-base/80 p-4 backdrop-blur-md lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="neu w-full max-w-md max-h-[85vh] overflow-y-auto p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-deepest pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-teal to-tealdark text-xs font-bold text-white shadow-sm">
                    A
                  </span>
                  <div>
                    <span className="font-mono text-xs tracking-wider text-ink block">
                      Navegação por Páginas
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-faint uppercase">
                      Página {page + 1} de {PAGES.length}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="neu-btn flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-coral"
                  style={{ borderRadius: 10 }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Navigation List */}
              <div className="mt-5 space-y-2.5">
                {PAGES.filter((p) => p.id !== "contato").map((p, i) => {
                  const isCurrent = i === page;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleNavigation(i)}
                      className={cn(
                        "w-full text-left transition-all duration-200 flex items-center justify-between p-3.5",
                        isCurrent
                          ? "neu-inset font-bold"
                          : "neu-btn hover:-translate-y-0.5"
                      )}
                      style={{ borderRadius: 12 }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-mono text-xs font-bold flex h-6 w-6 items-center justify-center rounded-md",
                            isCurrent
                              ? "bg-teal text-white shadow-sm"
                              : "bg-deep text-muted"
                          )}
                        >
                          {p.step}
                        </span>
                        <div>
                          <div
                            className={cn(
                              "font-display text-sm font-semibold leading-none",
                              isCurrent ? "text-ink" : "text-ink/80"
                            )}
                          >
                            {p.label}
                          </div>
                          <div className="font-mono text-[9px] tracking-wider text-faint mt-1 uppercase">
                            {p.tag}
                          </div>
                        </div>
                      </div>

                      {isCurrent && (
                        <span className="flex items-center gap-1 font-mono text-[10px] tracking-widest text-teal font-bold uppercase bg-base px-2 py-0.5 rounded-full">
                          <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-teal" />
                          Ativo
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Modal Footer */}
              <div className="mt-6 border-t border-deepest pt-3.5 flex items-center justify-between font-mono text-[9.5px] text-faint">
                <span>Engenharia de Dados // Anderson</span>
                <span>8 Estágios</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
