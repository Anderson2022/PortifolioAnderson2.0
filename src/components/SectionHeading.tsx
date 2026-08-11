import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface Props {
  index: string;
  tag: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  accent?: "teal" | "plum" | "coral";
}

const ACCENT = {
  teal: "text-teal",
  plum: "text-plum",
  coral: "text-coral",
};

export default function SectionHeading({ index, tag, title, lead, align = "left", accent = "teal" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className={cn("neu-btn inline-flex h-7 w-7 items-center justify-center font-mono text-xs font-bold", ACCENT[accent])} style={{ borderRadius: 8 }}>
          {index}
        </span>
        <span className="h-px w-8 bg-deepest" />
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">{tag}</span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-4 max-w-xl text-[15px] leading-relaxed text-muted md:text-base", align === "center" && "mx-auto")}>
          {lead}
        </p>
      )}
    </motion.div>
  );
}
