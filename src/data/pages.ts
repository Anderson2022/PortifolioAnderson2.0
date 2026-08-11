export interface PageDef {
  id: string;
  label: string;
  tag: string;
  step: string;
}

export const PAGES: PageDef[] = [
  { id: "home", label: "Home", tag: "RAW DATA", step: "01" },
  { id: "jornada", label: "Jornada", tag: "INGESTION", step: "02" },
  { id: "stack", label: "Stack", tag: "PROCESSING", step: "03" },
  { id: "pipeline", label: "Pipeline", tag: "TRANSFORMATION", step: "04" },
  { id: "projetos", label: "Projetos", tag: "DATA WAREHOUSE", step: "05" },
  { id: "experiencia", label: "Experiência", tag: "ANALYTICS", step: "06" },
  { id: "lab", label: "Lab", tag: "LEARNING", step: "07" },
  { id: "contato", label: "Contato", tag: "INSIGHT", step: "08" },
];
