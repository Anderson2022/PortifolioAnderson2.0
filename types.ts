export interface Project {
  id: number;
  nome: string;
  descricao: string;
  githubLink?: string;
  imagem: string;
  imagensArte: string[];
  url?: string[];
  techs?: string[];
}

export interface TechStackItem {
  name: string;
  icon: string;
  color: string;
}
