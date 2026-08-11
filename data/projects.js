export const PROJECTS_DATA = [
  {
    id: 'meu-gestor-frontend',
    title: 'Meu Gestor — Front-end',
    subtitle: 'Painel de Gestão Web',
    description: 'Interface do Meu Gestor para centralizar informações, acompanhar resultados e simplificar as rotinas de gestão.',
    longDescription: 'O front-end do Meu Gestor transforma os dados da aplicação em uma experiência clara e responsiva. O painel organiza os principais indicadores e operações do sistema para agilizar o trabalho diário em computadores, tablets e celulares.',
    category: 'react',
    tech: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
    mainTechIcon: 'React',
    image: '/assets/projects/meu-gestor-dashboard.png',
    status: 'development',
    url: 'https://meu-gestor-de-finan-a.vercel.app/',
    githubUrl: 'https://github.com/Anderson2022',
    features: [
      'Dashboard responsivo e de fácil navegação',
      'Visualização centralizada das informações',
      'Fluxos rápidos para as tarefas do dia a dia',
      'Integração com a API do Meu Gestor'
    ],
    featured: true,
    color: '#5651e5'
  },
  {
    id: 'arte-decor',
    title: 'Arte Decoração',
    subtitle: 'Catálogo & Requinte em Tapeçaria',
    description: 'Site especializado em tapeçaria e decoração artística, com interface elegante e requintada para exibição de serviços e produtos sob medida.',
    longDescription: 'Uma experiência digital premium criada para apresentar os serviços de tapeçaria fina e decoração. O projeto foca em valorizar cada detalhe artesanal através de um layout minimalista, paleta de cores sofisticada e navegação fluida. Perfeito para clientes que buscam sofisticação e atendimento exclusivo.',
    category: 'vue',
    tech: ['Vue.js', 'JavaScript', 'CSS3', 'Vercel', 'Tailwind'],
    mainTechIcon: 'Vue.js',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    status: 'active',
    url: 'https://arte-decor-tapecaria-vue.vercel.app/',
    features: [
      'Galeria imersiva com visualização detalhada de texturas',
      'Design responsivo otimizado para tablets e dispositivos móveis',
      'Carregamento ultra-rápido focado em SEO local',
      'Solicitação de orçamentos diretos por WhatsApp'
    ],
    featured: true,
    color: '#10b981' // Vue Green
  },
  {
    id: 'devflix',
    title: 'DevFlix',
    subtitle: 'Plataforma de Streaming para Desenvolvedores',
    description: 'Plataforma moderna inspirada no estilo de streaming de vídeo, totalmente focada no ecossistema e em tutoriais de desenvolvimento de software e tecnologia.',
    longDescription: 'O DevFlix revoluciona a forma como programadores consomem conteúdo de aprendizado. Utilizando a arquitetura moderna do Vue.js, a plataforma entrega uma interface imersiva no padrão Netflix, com organização por categorias, buscas instantâneas e reprodutor de vídeo customizado.',
    category: 'vue',
    tech: ['Vue.js', 'Vite', 'State Management', 'Tailwind CSS'],
    mainTechIcon: 'Vue.js',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    status: 'development',
    url: 'https://developer-flix.vercel.app/',
    features: [
      'Interface cinematográfica escura (Dark Mode nativo)',
      'Categorização avançada por linguagens de programação',
      'Sistema de "Continuar Assistindo" e listas personalizadas',
      'Player de alta fidelidade com atalhos de teclado'
    ],
    featured: true,
    color: '#3b82f6' // Blue
  },
  {
    id: 'loteria-anderson',
    title: 'Loteria Analytics',
    subtitle: 'Anderson Portfólio & Estatísticas',
    description: 'Sistema inteligente para gerenciamento e análises de combinações lotéricas, com foco em facilidade de uso, painéis intuitivos e cálculos estatísticos.',
    longDescription: 'Uma aplicação web focada na análise de probabilidade e registro de jogos lotéricos. Transforma números complexos e histórico de sorteios em gráficos compreensíveis e sugestões inteligentes baseadas em frequência histórica.',
    category: 'vue',
    tech: ['Vue.js', 'Netlify', 'Chart.js', 'Estatística Algorítmica'],
    mainTechIcon: 'Vue.js',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    status: 'development',
    url: 'https://andersonportifolio.netlify.app',
    features: [
      'Dashboard analítico com histórico de sorteios',
      'Gerador inteligente de dezenas com filtros de paridade',
      'Interface limpa de fácil usabilidade para apostadores',
      'Painel de simulação de acertos em tempo real'
    ],
    color: '#8b5cf6' // Purple
  },
  {
    id: 'loteria-jade',
    title: 'Loteria Premium',
    subtitle: 'Jade Pithivier Dashboard',
    description: 'Aplicação avançada com painel administrativo para geração de palpites, rastreamento de resultados e estatísticas visuais dinâmicas.',
    longDescription: 'Versão avançada e customizada para gestão de palpites e acompanhamento de resultados lotéricos. Apresenta uma arquitetura robusta em Vue.js com visual moderno, tabelas dinâmicas de conferência e exportação de relatórios.',
    category: 'vue',
    tech: ['Vue.js', 'Netlify', 'CSS Modules', 'Web UI'],
    mainTechIcon: 'Vue.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    status: 'development',
    url: 'https://jade-pithivier-081acd.netlify.app',
    features: [
      'Gestão de bolões e divisão de cotas automatizada',
      'Conferência automática de bilhetes cadastrados',
      'Notificações instantâneas de novos resultados',
      'Design em cartões interativos para fácil visualização'
    ],
    color: '#ec4899' // Pink
  },
  {
    id: 'rio-piscinas',
    title: 'Rio Piscinas Cacoal',
    subtitle: 'Catálogo Institucional & Vendas',
    description: 'E-commerce e catálogo digital institucional para a marca Rio Piscinas Cacoal. Mostra linhas de piscinas, acessórios, dicas de manutenção e orçamentos rápidos.',
    longDescription: 'Portal completo para a Rio Piscinas Cacoal, concebido para transmitir a sensação de lazer, qualidade e sofisticação. Apresenta todas as linhas de piscinas de fibra, tabelas de especificações técnicas e canal direto para atendimento comercial com geolocalização.',
    category: 'vue',
    tech: ['Vue.js', 'SEO Avançado', 'WhatsApp API', 'Mobile First'],
    mainTechIcon: 'Vue.js',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop',
    status: 'active',
    url: 'https://www.riopiscinascacoal.com/',
    features: [
      'Catálogo interativo com modelos 3D das piscinas',
      'Calculadora de volume de água e dicas de tratamento',
      'Integração direta com central de atendimento WhatsApp',
      'Otimização extrema de imagens para conexões móveis'
    ],
    featured: true,
    color: '#06b6d4' // Cyan
  },
  {
    id: 'finance-flow',
    title: 'FinanceFlow AI',
    subtitle: 'Gestão de Fluxo de Caixa Preditivo',
    description: 'Dashboard financeiro que utiliza algoritmos de inteligência artificial para antecipar despesas e prever faturamento com precisão milimétrica.',
    longDescription: 'Uma plataforma SaaS de ponta construída com React e Tailwind CSS. O FinanceFlow AI revoluciona a gestão financeira de pequenas e médias empresas ao integrar feeds bancários abertos com categorização baseada em IA e relatórios visuais maravilhosos.',
    category: 'react',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'AI Logic'],
    mainTechIcon: 'React',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    status: 'active',
    url: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Previsão de saldo inteligente com 90 dias de antecedência',
      'Integração bancária simulada via Open Finance',
      'Gráficos customizáveis em modo claro e escuro',
      'Geração automática de relatórios em PDF/XLSX'
    ],
    color: '#6366f1' // Indigo
  },
  {
    id: 'task-master',
    title: 'TaskMaster Pro',
    subtitle: 'Kanban Corporativo Ultra-rápido',
    description: 'Aplicativo corporativo de alta performance para quadros estilo Kanban com arrastar e soltar suave e sincronização em tempo real.',
    longDescription: 'Criado para times de alta produtividade, o TaskMaster Pro oferece fluxos de trabalho flexíveis com animações suaves de arrastar e soltar (drag and drop). Feito inteiramente com TypeScript rigoroso e boas práticas de arquitetura de software.',
    category: 'typescript',
    tech: ['TypeScript', 'React', 'Zustand', 'HTML5 DragDrop'],
    mainTechIcon: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop',
    status: 'active',
    url: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Arrastar e soltar 60fps sem engates',
      'Campos customizados e etiquetas coloridas interativas',
      'Filtros complexos de busca por responsável e prazo',
      'Suporte offline completo com sincronização em segundo plano'
    ],
    color: '#f59e0b' // Amber
  },
  {
    id: 'crypto-pulse',
    title: 'CryptoPulse',
    subtitle: 'Rastreador de Mercados WebSockets',
    description: 'Plataforma para monitoramento de criptoativos em tempo real com gráficos interativos de profundidade e alertas instantâneos de variação.',
    longDescription: 'O CryptoPulse conecta-se a múltiplos canais WebSocket para transmitir preços de mais de 500 criptomoedas com latência de milissegundos. Permite que investidores configurem gatilhos customizados de compra/venda com notificações na área de trabalho.',
    category: 'node',
    tech: ['Node.js', 'Vue.js', 'WebSockets', 'Chart.js'],
    mainTechIcon: 'Node.js',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop',
    status: 'active',
    url: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Streams ao vivo via WebSockets sem polling',
      'Cálculo de variação percentual 24h instantâneo',
      'Alertas sonoros e notificações no navegador',
      'Lista de favoritos com backup local em storage'
    ],
    color: '#14b8a6' // Teal
  }
];

export const TECH_CATEGORIES = [
  { id: 'all', label: 'Todos os Projetos', count: 9 },
  { id: 'vue', label: 'Vue.js', count: 5 },
  { id: 'react', label: 'React', count: 2 },
  { id: 'typescript', label: 'TypeScript', count: 1 },
  { id: 'node', label: 'Node.js / Fullstack', count: 1 },
];

export const STATS_DATA = [
  { label: 'Projetos Totais', value: '9', icon: 'FolderGit2', color: 'from-blue-500 to-cyan-400' },
  { label: 'Tecnologias Foco', value: 'Vue & React', icon: 'Code2', color: 'from-emerald-400 to-teal-500' },
  { label: 'Em Produção', value: '5 Ativos', icon: 'Globe2', color: 'from-purple-500 to-indigo-500' },
  { label: 'Aceleração 3D', value: '100%', icon: 'Box', color: 'from-pink-500 to-rose-500' },
];
