/**
 * Base de dados com palavras de tecnologias do mundo da TI
 * Organizado por categorias para facilitar manutenção e expansão
 */

export const techWords = [
  // Linguagens de Programação
  "JavaScript", "Python", "Java", "TypeScript", "Kotlin", "Swift", "Rust", "Go", "Dart", "PHP",
  "Ruby", "Scala", "Clojure", "Haskell", "Erlang", "Elixir", "Lua", "Perl", "Assembly", "Fortran",
  "COBOL", "Pascal", "Delphi", "Visual Basic", "F#", "OCaml", "Julia", "MATLAB", "Solidity",
  
  // Frameworks e Bibliotecas
  "React", "Angular", "Vue.js", "Svelte", "Next.js", "Nuxt.js", "Gatsby", "Astro", "Remix", "SolidJS",
  "Express.js", "NestJS", "Fastify", "Koa", "Django", "Flask", "FastAPI", "Spring", "Laravel", "Symfony",
  "Ruby on Rails", "Sinatra", "Phoenix", "Gin", "Fiber", "Echo", "Beego", "Actix", "Rocket", "Axum",
  "Flutter", "React Native", "Ionic", "Xamarin", "Cordova", "Electron", "Tauri", "Neutralino",
  
  // Bancos de Dados
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "MariaDB", "Oracle", "SQL Server", "Cassandra",
  "DynamoDB", "Firestore", "Supabase", "PlanetScale", "CockroachDB", "InfluxDB", "Neo4j", "Elasticsearch",
  "Apache Solr", "Memcached", "etcd", "Consul", "Vault", "CouchDB", "RethinkDB", "ArangoDB",
  
  // Cloud e DevOps
  "AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitLab",
  "GitHub", "Bitbucket", "CircleCI", "Travis CI", "Helm", "Istio", "Prometheus", "Grafana", "Jaeger",
  "Nginx", "Apache", "Caddy", "Traefik", "Consul", "Nomad", "Vault", "Vagrant", "Packer",
  
  // Ferramentas de Desenvolvimento
  "Visual Studio Code", "IntelliJ IDEA", "Eclipse", "Vim", "Emacs", "Sublime Text", "Atom", "WebStorm", "PyCharm",
  "Android Studio", "Xcode", "Unity", "Unreal Engine", "Blender", "Figma", "Sketch", "Adobe XD", "Canva",
  "Postman", "Insomnia", "Swagger", "OpenAPI", "GraphQL", "REST API", "gRPC", "WebSocket",
  
  // Tecnologias Web
  "HTML5", "CSS3", "Sass", "Less", "Stylus", "Tailwind CSS", "Bootstrap", "Bulma", "Materialize",
  "Webpack", "Vite", "Rollup", "Parcel", "esbuild", "Babel", "ESLint", "Prettier", "Jest",
  "Cypress", "Playwright", "Selenium", "Storybook", "Chromatic", "Vercel", "Netlify", "Surge",
  
  // Conceitos e Metodologias
  "Agile", "Scrum", "Kanban", "DevOps", "CI/CD", "Microservices", "Serverless", "JAMstack",
  "PWA", "SPA", "SSR", "SSG", "API", "SDK", "CLI", "GUI", "TUI", "MVP", "MVC", "MVVM",
  "SOLID", "DRY", "KISS", "YAGNI", "TDD", "BDD", "DDD", "Clean Code", "Clean Architecture", "Design Patterns",
  
  // Sistemas Operacionais e Ferramentas
  "Linux", "Ubuntu", "Debian", "CentOS", "Fedora", "Arch Linux", "Manjaro", "Alpine Linux", "Windows",
  "macOS", "Android", "iOS", "Bash", "Zsh", "Fish", "PowerShell", "Command Prompt", "Terminal", "iTerm",
  "tmux", "GNU Screen", "Git", "SVN", "Mercurial", "CMake", "Make", "Gradle", "Maven", "npm",
  "Yarn", "pnpm", "pip", "Conda", "Homebrew", "APT", "YUM", "Pacman", "Chocolatey",
  
  // Inteligência Artificial e Machine Learning
  "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter",
  "Anaconda", "OpenCV", "YOLO", "BERT", "GPT", "LLaMA", "Stable Diffusion", "GAN", "CNN",
  "RNN", "LSTM", "Transformer", "Neural Network", "Deep Learning", "Reinforcement Learning",
  
  // Blockchain e Web3
  "Bitcoin", "Ethereum", "Solana", "Polygon", "Binance Smart Chain", "Cardano", "Polkadot", "Avalanche",
  "Chainlink", "Uniswap", "OpenSea", "MetaMask", "Hardhat", "Truffle", "Ganache", "Remix IDE",
  "Web3.js", "DeFi", "NFT", "DAO", "DApp", "Smart Contract", "Mining", "Staking", "Yield Farming",
  
  // Segurança
  "Cybersecurity", "Encryption", "SSL", "TLS", "OAuth", "JWT", "SAML", "LDAP", "Firewall",
  "VPN", "Penetration Testing", "Vulnerability Assessment", "Malware", "Phishing", "DDoS", "MITM",
  "XSS", "SQL Injection", "CSRF", "CORS", "CAPTCHA", "Honeypot", "Sandbox", "Quarantine"
];

/**
 * Retorna uma palavra aleatória do array de tecnologias
 * @returns {string} Uma palavra de tecnologia aleatória
 */
export const getRandomTechWord = () => {
  return techWords[Math.floor(Math.random() * techWords.length)];
};
