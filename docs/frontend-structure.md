🖥️ FRONTEND (DevBoard) → Interface principal da aplicação React
│
├── 📄 public/ → arquivos estáticos públicos
│   └── favicon.ico → ícone da aplicação
│
├── ⚛️ src/ → código principal da aplicação
│   │
│   ├── 🖼️ assets/ → imagens, ícones e arquivos visuais
│   │   ├── images/
│   │   │   └── logo-devboard.png
│   │   │
│   │   ├── icons/
│   │   └── illustrations/
│   │
│   ├── 📁 pages/ → telas da aplicação (rotas)
│   │   ├── 🔒 auth/ → login e cadastro
│   │   │   └── Login.tsx → tela de login
│   │   │
│   │   ├── 📊 dashboard/ → página principal do sistema
│   │   │   └── Dashboard.tsx → dashboard
│   │   │
│   │   └── 📁 projects/ → páginas de projetos
│   │       └── Projects.tsx → lista/detalhes de projetos
│   │
│   ├── 🧩 components/ → componentes reutilizáveis da interface
│   │   ├── ui/ → botões, inputs, cards
│   │   ├── layout/ → header, sidebar e estrutura base
│   │   └── shared/ → componentes genéricos reutilizáveis
│   │
│   ├── ⚙️ features/ → regras de negócio da aplicação
│   │   ├── tasks/ → lógica de tarefas
│   │   ├── projects/ → lógica de projetos
│   │   └── users/ → lógica de usuários
│   │
│   ├── 🔌 services/ → comunicação com API/backend
│   ├── 🪝 hooks/ → hooks personalizados
│   ├── 🌐 contexts/ → gerenciamento de estado global
│   ├── 🧭 routes/ → controle e proteção de rotas
│   ├── 🎨 styles/ → estilos globais, temas e variáveis
│   ├── 🧰 utils/ → funções auxiliares
│   ├── 🧾 types/ → tipagens globais do TypeScript
│   │
│   ├── App.tsx → componente principal da aplicação
│   └── main.tsx → ponto de inicialização do React
│
├── 📄 index.html → arquivo HTML base do Vite
├── 📄 README.md → documentação do frontend
├── 📦 package.json → dependências e scripts do projeto
├── 📦 package-lock.json → controle de versões das dependências
├── 📄 tsconfig.json → configuração do TypeScript
├── 📄 .gitignore → arquivos ignorados pelo Git
└── ⚙️ vite.config.ts → configuração do Vite