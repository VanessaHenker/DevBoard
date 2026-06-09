🖥️ FRONTEND (DevBoard) → Interface principal da aplicação React
│
├── 📄 public/ → Arquivos públicos acessíveis diretamente pelo navegador
│   └── favicon.ico → Ícone exibido na aba do navegador
│
├── ⚛️ src/ → Código-fonte principal da aplicação
│   │
│   ├── 🖼️ assets/ → Recursos visuais utilizados no projeto
│   │   ├── images/ → Imagens gerais da aplicação
│   │   │   └── logo-devboard.png → Logotipo do sistema
│   │   │
│   │   ├── icons/ → Ícones personalizados
│   │   └── illustrations/ → Ilustrações e elementos gráficos
│   │
│   ├── 📁 pages/ → Páginas que representam as rotas da aplicação
│   │   │
│   │   ├── 🔒 auth/ → Área de autenticação do usuário
│   │   │   ├── Login.tsx → Tela de login
│   │   │   ├── Register.tsx → Tela de cadastro
│   │   │   │
│   │   │   └── sections/ → Seções específicas da tela de autenticação
│   │   │       ├── LoginForm.tsx → Formulário de login
│   │   │       ├── LoginBanner.tsx → Banner lateral 
│   │   │       └── SocialLogin.tsx → Login com redes sociais
│   │   │
│   │   ├── 📊 dashboard/ → Página principal após autenticação
│   │   │   ├── Dashboard.tsx → Estrutura principal do dashboard
│   │   │   │
│   │   │   └── sections/ → Blocos internos do dashboard
│   │   │       ├── DashboardHeader.tsx → Cabeçalho do dashboard
│   │   │       ├── DashboardStats.tsx → Estatísticas resumidas
│   │   │       ├── RecentProjects.tsx → Projetos recentes
│   │   │       └── RecentTasks.tsx → Tarefas recentes
│   │   │
│   │   ├── 📁 projects/ → Área de gerenciamento de projetos
│   │   │   ├── Projects.tsx → Listagem de projetos
│   │   │   ├── ProjectDetails.tsx → Detalhes de um projeto
│   │   │   ├── CreateProject.tsx → Criação de projeto
│   │   │   ├── EditProject.tsx → Edição de projeto
│   │   │   │
│   │   │   └── sections/ → Seções internas relacionadas aos projetos
│   │   │       ├── ProjectForm.tsx → Formulário de projeto
│   │   │       ├── ProjectHeader.tsx → Cabeçalho do projeto
│   │   │       ├── ProjectInfo.tsx → Informações principais
│   │   │       └── ProjectServices.tsx → Serviços vinculados
│   │   │
│   │   ├── ✅ tasks/ → Área de gerenciamento de tarefas
│   │   │   ├── Tasks.tsx → Página principal de tarefas
│   │   │   │
│   │   │   └── sections/ → Componentes específicos das tarefas
│   │   │       ├── TaskList.tsx → Lista de tarefas
│   │   │       ├── TaskCard.tsx → Cartão individual de tarefa
│   │   │       └── TaskFilters.tsx → Filtros de pesquisa
│   │   │
│   │   └── 👤 users/ → Área do usuário
│   │       ├── Profile.tsx → Perfil do usuário
│   │       └── Settings.tsx → Configurações da conta
│   │
│   ├── 🧩 components/ → Componentes reutilizáveis em toda a aplicação
│   │   │
│   │   ├── ui/ → Componentes básicos da interface
            LogoDevBoard.tsx - Logo Reutilizael
            LogoDevBoard.css - estyle
│   │   │   ├── Button.tsx → Botão reutilizável
│   │   │   ├── Input.tsx → Campo de entrada reutilizável
│   │   │   ├── Select.tsx → Campo de seleção reutilizável
│   │   │   ├── Modal.tsx → Janela modal reutilizável
│   │   │   └── Card.tsx → Cartão reutilizável
│   │   │
│   │   ├── layout/ → Estrutura visual compartilhada
│   │   │   ├── Header.tsx → Cabeçalho principal
│   │   │   ├── Sidebar.tsx → Menu lateral
│   │   │   ├── Footer.tsx → Rodapé
│   │   │   └── MainLayout.tsx → Layout base da aplicação
│   │   │
│   │   └── shared/ → Componentes auxiliares compartilhados
│   │       ├── Loader.tsx → Indicador de carregamento
│   │       ├── EmptyState.tsx → Estado vazio
│   │       ├── ErrorMessage.tsx → Exibição de erros
│   │       └── ConfirmDialog.tsx → Modal de confirmação
│   │
│   ├── ⚙️ features/ → Regras de negócio organizadas por domínio
│   │   │
│   │   ├── projects/ → Funcionalidades relacionadas aos projetos
│   │   │   ├── project.service.ts → Regras e chamadas dos projetos
│   │   │   ├── project.types.ts → Tipagens dos projetos
│   │   │   └── project.utils.ts → Funções auxiliares dos projetos
│   │   │
│   │   ├── tasks/ → Funcionalidades relacionadas às tarefas
│   │   │   ├── task.service.ts → Regras e chamadas das tarefas
│   │   │   ├── task.types.ts → Tipagens das tarefas
│   │   │   └── task.utils.ts → Funções auxiliares das tarefas
│   │   │
│   │   └── users/ → Funcionalidades relacionadas aos usuários
│   │       ├── user.service.ts → Regras e chamadas dos usuários
│   │       ├── user.types.ts → Tipagens dos usuários
│   │       └── user.utils.ts → Funções auxiliares dos usuários
│   │
│   ├── 🔌 services/ → Comunicação com APIs e serviços externos
│   │   ├── api.ts → Configuração principal da API
│   │   ├── authService.ts → Serviços de autenticação
│   │   └── projectService.ts → Serviços dos projetos
│   │
│   ├── 🪝 hooks/ → Hooks personalizados reutilizáveis
│   │   ├── useAuth.ts → Gerenciamento de autenticação
│   │   ├── useProjects.ts → Gerenciamento de projetos
│   │   └── useTasks.ts → Gerenciamento de tarefas
│   │
│   ├── 🌐 contexts/ → Gerenciamento de estados globais
│   │   ├── AuthContext.tsx → Contexto de autenticação
│   │   └── ThemeContext.tsx → Contexto de tema
│   │
│   ├── 🧭 routes/ → Configuração e proteção das rotas
│   │   ├── AppRoutes.tsx → Rotas principais da aplicação
│   │   ├── PrivateRoute.tsx → Rotas protegidas
│   │   └── PublicRoute.tsx → Rotas públicas
│   │
│   ├── 🎨 styles/ → Arquivos globais de estilização
│   │   ├── globals.css → Estilos globais
│   │   ├── variables.css → Variáveis CSS
│   │   └── themes.css → Temas da aplicação
│   │
│   ├── 🧰 utils/ → Funções utilitárias compartilhadas
│   │   ├── formatDate.ts → Formatação de datas
│   │   ├── formatCurrency.ts → Formatação de valores
│   │   └── validators.ts → Validações reutilizáveis
│   │
│   ├── 🧾 types/ → Tipagens globais do TypeScript
│   │   ├── Project.ts → Tipagem de projetos
│   │   ├── User.ts → Tipagem de usuários
│   │   └── Task.ts → Tipagem de tarefas
│   │
│   ├── App.tsx → Componente raiz da aplicação
│   └── main.tsx → Ponto de entrada do React
│
├── 📄 index.html → Estrutura HTML principal do Vite
├── 📄 README.md → Documentação do projeto
├── 📦 package.json → Dependências e scripts do projeto
├── 📦 package-lock.json → Controle exato das dependências instaladas
├── 📄 tsconfig.json → Configurações do TypeScript
├── 📄 .gitignore → Arquivos ignorados pelo Git
└── ⚙️ vite.config.ts → Configuração do Vite