import { Project, TechStackItem } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    nome: 'Roleplay-API',
    descricao: 'API completa para gerenciar mesas de RPG. Autenticação, sessões em tempo real, inventários e combat system usando TypeScript + AdonisJS + Japa tests.',
    githubLink: 'https://github.com/Anderson2022/roleplay-api',
    imagem: 'https://picsum.photos/id/1015/600/400',
    imagensArte: [
      'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/AdonisJS_logo.svg/512px-AdonisJS_logo.svg.png'
    ],
    url: ['https://www.typescriptlang.org/', 'https://adonisjs.com/'],
    techs: ['TypeScript', 'AdonisJS', 'Japa', 'PostgreSQL']
  },
  {
    id: 2,
    nome: 'Universidade API',
    descricao: 'Sistema de matrícula universitária com Redis cache, autenticação JWT, validações avançadas e testes completos de integração.',
    githubLink: 'https://github.com/Anderson2022/Univercidade',
    imagem: 'https://picsum.photos/id/106/600/400',
    imagensArte: [
      'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/AdonisJS_logo.svg/512px-AdonisJS_logo.svg.png', 
      'https://redis.io/images/redis-white.svg'
    ],
    url: ['https://www.typescriptlang.org/', 'https://adonisjs.com/', 'https://redis.io/'],
    techs: ['TypeScript', 'AdonisJS', 'Redis', 'MySQL']
  },
  {
    id: 3,
    nome: 'Aluguel de Carros',
    descricao: 'API robusta para sistema de locação de veículos com reservas, disponibilidade em tempo real e integração com pagamentos.',
    githubLink: 'https://github.com/Anderson2022/Alugueldecarros2.0',
    imagem: 'https://picsum.photos/id/1074/600/400',
    imagensArte: ['https://cdn-icons-png.flaticon.com/512/5968/5968381.png'],
    url: ['https://www.typescriptlang.org/'],
    techs: ['TypeScript', 'NestJS', 'TypeORM']
  },
  {
    id: 4,
    nome: 'SQL Server Automation',
    descricao: 'Scripts avançados de migração, ETL e automação de banco de dados SQL Server com PowerShell e T-SQL.',
    githubLink: 'https://github.com/Anderson2022/bat.sqlsever',
    imagem: 'https://picsum.photos/id/180/600/400',
    imagensArte: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.svg/1200px-Sql_data_base_with_logo.svg.png'],
    techs: ['T-SQL', 'PowerShell', 'SQL Server']
  },
  {
    id: 5,
    nome: 'PDF Generator Service',
    descricao: 'Microserviço para geração dinâmica de PDFs com templates personalizáveis, usando Puppeteer e Handlebars.',
    githubLink: 'https://github.com/Anderson2022/Pdf',
    imagem: 'https://picsum.photos/id/201/600/400',
    imagensArte: ['https://cdn-icons-png.flaticon.com/512/5968/5968381.png'],
    techs: ['Node.js', 'Puppeteer', 'TypeScript']
  },
  {
    id: 6,
    nome: 'Financeiro API',
    descricao: 'Sistema completo de controle financeiro com relatórios, gráficos e integração com bancos. Backend robusto em NestJS.',
    githubLink: 'https://github.com/Anderson2022/ProjetoTypesript',
    imagem: 'https://picsum.photos/id/160/600/400',
    imagensArte: ['https://cdn-icons-png.flaticon.com/512/5968/5968381.png'],
    techs: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL']
  },
  {
    id: 7,
    nome: 'Cache Studies',
    descricao: 'Estudos aprofundados de caching strategies (Redis, in-memory, distributed cache) com benchmarks e exemplos reais.',
    githubLink: 'https://github.com/Anderson2022/cache_studies',
    imagem: 'https://picsum.photos/id/29/600/400',
    imagensArte: ['https://redis.io/images/redis-white.svg'],
    techs: ['Redis', 'Node.js', 'Express', 'Benchmark']
  },
  {
    id: 8,
    nome: 'Home Broker Platform',
    descricao: 'Simulação de home broker com mensageria em tempo real usando Kafka, Docker, NestJS e Next.js frontend.',
    githubLink: 'https://github.com/Anderson2022/Homebroker',
    imagem: 'https://picsum.photos/id/1016/600/400',
    imagensArte: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Next.js_Logo.svg/1200px-Next.js_Logo.svg.png', 
      'https://nestjs.com/img/logo-small.svg', 
      'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png', 
      'https://kafka.apache.org/images/logo.svg'
    ],
    techs: ['Kafka', 'NestJS', 'Docker', 'Go', 'Next.js']
  },
];

export const techStackData: TechStackItem[] = [
  { name: 'TypeScript', icon: '🟦', color: 'from-blue-500 to-cyan-400' },
  { name: 'Node.js', icon: '⚡', color: 'from-green-500 to-emerald-400' },
  { name: 'NestJS', icon: '🐦', color: 'from-red-500 to-rose-500' },
  { name: 'AdonisJS', icon: '🌳', color: 'from-purple-500 to-violet-500' },
  { name: 'Kafka', icon: '📡', color: 'from-amber-500 to-orange-500' },
  { name: 'Redis', icon: '🔥', color: 'from-red-600 to-rose-600' },
  { name: 'Docker', icon: '🐳', color: 'from-blue-600 to-cyan-600' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-indigo-600' },
];
