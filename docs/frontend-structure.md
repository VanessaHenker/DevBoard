
🖥️ FRONTEND (DevBoard) → Interface principal da aplicação React
│
├── 📄 public/ → arquivos estáticos públicos
│   └── index.html → ponto de entrada do HTML
│
├── ⚛️ src/ → código principal da aplicação
│   │
│   ├── 📁 pages/ → telas da aplicação (rotas)
│   │   ├── 🔒 auth/ → login e cadastro
│   │   │   └── Login.tsx → tela de logi
│   │   │
│   │   ├── 📊 dashboard/ → página principal do sistema
│   │   │   └── Dashboard.tsx → dashboard
│   │   │
│   │   └── 📁 projects/ → páginas de projetos
│   │       └── Projects.tsx → lista/detalhes de projetos
│   │
│   ├── 🧩 components/ → componentes reutilizáveis de UI
│   │   ├── ui/ → botões, inputs, cards
│   │   ├── layout/ → header, sidebar, estrutura base
│   │   └── shared/ → componentes genéricos reutilizáveis
│   │
│   ├── ⚙️ features/ → regras de negócio do sistema
│   │   ├── tasks/ → lógica de tarefas
│   │   ├── projects/ → lógica de projetos
│   │   └── users/ → lógica de usuários
│   │
│   ├── 🔌 services/ → comunicação com API (backend/supabase)
│   ├── 🪝 hooks/ → hooks personalizados
│   ├── 🌐 contexts/ → estado global da aplicação
│   ├── 🧭 routes/ → controle de rotas e proteção de páginas
│   ├── 🎨 styles/ → estilos globais e variáveis
│   ├── 🧰 utils/ → funções auxiliares
│   ├── 🧾 types/ → tipagens TypeScript globais
│   │
│   ├── App.tsx → componente principal da aplicação
│   └── main.tsx → ponto de inicialização do React
│
├── 📄 index.html → arquivo HTML base (Vite)
├── 📄 README.md → documentação do frontend
├── 📦 package.json → dependências e scripts
└── ⚙️ vite.config.ts → configuração do Vite