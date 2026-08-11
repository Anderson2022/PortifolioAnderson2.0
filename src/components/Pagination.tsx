import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../utils/cn";
import { PAGES } from "../data/pages";

interface Props {
  page: number;
  onGoTo: (i: number) => void;
}

export default function Pagination({ page, onGoTo }: Props) {
  const total = PAGES.length;
  const current = PAGES[page];

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-5 md:px-10">
      <div className="neu mx-auto flex max-w-xl items-center gap-2 px-3 py-2.5 md:gap-4 md:px-5">
        <button
          aria-label="Página anterior"
          onClick={() => onGoTo(page - 1)}
          disabled={page === 0}
          className="neu-btn flex h-9 w-9 shrink-0 items-center justify-center text-muted transition-colors hover:text-teal disabled:cursor-not-allowed disabled:opacity-30"
          style={{ borderRadius: 10 }}
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex flex-1 flex-col items-center gap-1.5 overflow-hidden">
          <div className="flex items-center gap-1 md:gap-1.5">
            {PAGES.map((p, i) => (
              <button
                key={p.id}
                aria-label={`Ir para ${p.label}`}
                onClick={() => onGoTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === page ? "w-6 bg-teal" : "w-1.5 bg-deepest hover:bg-faint"
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.18em] text-faint">
            <span className="text-teal">{current.step}</span>
            <span>/</span>
            <span>{String(total).padStart(2, "0")}</span>
            <span className="hidden text-muted sm:inline">· {current.tag}</span>
          </div>
        </div>

        <button
          aria-label="Próxima página"
          onClick={() => onGoTo(page + 1)}
          disabled={page === total - 1}
          className="neu-btn flex h-9 w-9 shrink-0 items-center justify-center text-muted transition-colors hover:text-teal disabled:cursor-not-allowed disabled:opacity-30"
          style={{ borderRadius: 10 }}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
