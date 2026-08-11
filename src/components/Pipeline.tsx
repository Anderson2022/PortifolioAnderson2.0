import { cn } from "../utils/cn";

export type FlowTone = "muted" | "teal" | "plum" | "coral";

export interface FlowNodeData {
  label: string;
  sub?: string;
  tone?: FlowTone;
}

const TONE_LABEL: Record<FlowTone, string> = {
  muted: "text-muted",
  teal: "text-teal",
  plum: "text-plum",
  coral: "text-coral",
};

export function FlowConnectorLine({ compact = false }: { compact?: boolean }) {
  const len = compact ? "h-7 w-px md:h-px md:w-8" : "h-10 w-px md:h-px md:w-14";
  return (
    <div aria-hidden className={cn("relative self-center bg-deepest md:self-center", len)}>
      <span className="flow-dot-y absolute -left-[2.5px] top-0 h-1.5 w-1.5 rounded-full bg-teal md:hidden" style={{ ["--dur" as string]: "1.8s" }} />
      <span className="flow-dot-x absolute -top-[2.5px] left-0 hidden h-1.5 w-1.5 rounded-full bg-teal md:block" style={{ ["--dur" as string]: "2.2s" }} />
    </div>
  );
}

export function FlowNodeChip({ node, compact = false }: { node: FlowNodeData; compact?: boolean }) {
  const tone = node.tone ?? "muted";
  return (
    <div
      className={cn(
        "neu-flat relative self-center text-center transition-all duration-300 hover:-translate-y-0.5",
        compact ? "min-w-[96px] px-3 py-2" : "min-w-[128px] px-4 py-2.5"
      )}
    >
      <div className={cn("font-mono uppercase leading-tight tracking-[0.12em]", TONE_LABEL[tone], compact ? "text-[10px]" : "text-[11px]")}>
        {node.label}
      </div>
      {node.sub && (
        <div className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-faint">
          {node.sub}
        </div>
      )}
    </div>
  );
}

interface PipelineProps {
  nodes: FlowNodeData[];
  direction?: "auto" | "vertical";
  compact?: boolean;
  className?: string;
}

export default function Pipeline({ nodes, direction = "auto", compact = false, className }: PipelineProps) {
  const vertical = direction === "vertical";
  return (
    <div
      className={cn(
        "flex items-stretch justify-center",
        vertical ? "flex-col items-center" : "flex-col items-center md:flex-row md:flex-wrap md:items-center",
        className
      )}
    >
      {nodes.map((n, i) => (
        <div key={n.label + i} className="contents">
          {i > 0 && <FlowConnectorLine compact={compact || vertical} />}
          <FlowNodeChip node={n} compact={compact} />
        </div>
      ))}
    </div>
  );
}
