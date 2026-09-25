export interface PageDef {
  id: string;
  label: string;
  tag: string;
  step: string;
}

export const PAGES: PageDef[] = [
  { id: "home", label: "Home", tag: "RAW DATA", step: "01" },
  { id: "stack", label: "Stack", tag: "PROCESSING", step: "02" },
  { id: "pipeline", label: "Pipeline", tag: "TRANSFORMATION", step: "03" },
  { id: "projetos", label: "Projetos", tag: "DATA WAREHOUSE", step: "04" },
  { id: "experiencia", label: "Experiência", tag: "ANALYTICS", step: "05" },
  { id: "lab", label: "Lab", tag: "LEARNING", step: "06" },
  { id: "contato", label: "Contato", tag: "INSIGHT", step: "07" },
];
