export const PROJECTS_DATA = [
  {
    id: 'freela-cuiaba',
    title: 'Freela Cuiabá',
    subtitle: 'Marketplace Local de Freelancers e Serviços',
    description: 'Plataforma que conecta empresas, clientes e profissionais de Cuiabá e região para transformar serviços em oportunidades reais.',
    longDescription: 'O Freela Cuiabá é um marketplace regional criado para aproximar talentos locais de quem precisa contratar. A plataforma reúne perfis profissionais, oportunidades, candidaturas, avaliações e comunicação direta em uma experiência responsiva e orientada à comunidade de Mato Grosso.',
    category: 'react',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    mainTechIcon: 'Next.js',
    image: '/assets/projects/freela-cuiaba.jpg',
    status: 'active',
    url: 'https://freelacuiaba.com/',
    features: [
      'Busca de profissionais por categoria, cidade e modalidade',
      'Publicação de oportunidades e envio de candidaturas',
      'Perfis profissionais com portfólio, serviços e certificações',
      'Chat, acompanhamento de entregas e sistema de avaliações'
    ],
    featured: true,
    color: '#df6d1f'
  },
  {
    id: 'poolcontrol',
    title: 'PoolControl',
    status: 'development',
    url: 'https://poolcontrol-proxy.vercel.app'
  },
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
    featured: false,
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
    url: 'https://casa-das-piscinas-git-main-anderson2022s-projects.vercel.app',
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
  { id: 'all', label: 'Todos os Projetos', count: 7 },
  { id: 'vue', label: 'Vue.js', count: 3 },
  { id: 'react', label: 'React', count: 3 },
  { id: 'node', label: 'Node.js / Fullstack', count: 1 },
];

export const STATS_DATA = [
  { label: 'Projetos Totais', value: '7', icon: 'FolderGit2', color: 'from-blue-500 to-cyan-400' },
  { label: 'Tecnologias Foco', value: 'Vue & React', icon: 'Code2', color: 'from-emerald-400 to-teal-500' },
  { label: 'Em Produção', value: '5 Ativos', icon: 'Globe2', color: 'from-purple-500 to-indigo-500' },
  { label: 'Aceleração 3D', value: '100%', icon: 'Box', color: 'from-pink-500 to-rose-500' },
];
