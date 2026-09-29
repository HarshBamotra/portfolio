import type {
  UserProfile,
  StatusMetrics,
  Capability,
  FeaturedProject,
  Project,
  ExperienceItem,
  AwardItem,
  EducationItem,
  ApiEndpoint,
} from '../types/portfolio';

export const DATA_PROFILE: UserProfile = {
  name: 'Harsh Bamotra',
  role: 'Full-Stack Software Engineer — Python, Django, React & TypeScript',
  location: 'Bengaluru, IN',
  experience_years: '3+',
  available: 'Q1 2027',
  tagline: 'I turn complex enterprise requirements into dependable, high-performing digital platforms.',
  summary: 'Full-Stack Software Engineer specializing in scalable web architecture, Django REST APIs, modern React/TypeScript frontends, and cloud deployment pipelines.',
  email: 'harsh.bamotra@example.com',
  phone: '+91-9876543210',
  github: 'github.com/harshbamotra',
  linkedin: 'linkedin.com/in/harshbamotra',
  stackoverflow: 'stackoverflow.com/users/harshbamotra',
  hackerrank: 'hackerrank.com/harshbamotra',
};

export const DATA_STATUS: StatusMetrics = {
  systems_owned: 4,
  projects_delivered: '15+',
  code_quality: '100%',
  peak_req_per_min: '40k',
};

export const DATA_CAPABILITIES: Capability[] = [
  {
    name: 'Languages',
    icon: 'code-2',
    skills: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL', 'HTML5/CSS3'],
  },
  {
    name: 'Frontend',
    icon: 'layout',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'CSS Modules / Vanilla CSS', 'PWA'],
  },
  {
    name: 'Backend & Frameworks',
    icon: 'server',
    skills: ['Django', 'Django REST Framework', 'Node.js', 'Express.js', 'FastAPI', 'RESTful APIs'],
  },
  {
    name: 'Cloud & Infrastructure',
    icon: 'cloud',
    skills: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'Docker Compose', 'Nginx', 'GCP'],
  },
  {
    name: 'DevOps & Tooling',
    icon: 'git-branch',
    skills: ['GitHub Actions', 'CI/CD Pipelines', 'Git & GitHub', 'Postman', 'Vite', 'Linux / Unix CLI'],
  },
  {
    name: 'AI & Automation',
    icon: 'bot',
    skills: ['OpenAI GPT API Integration', 'LangChain', 'Vector Search', 'n8n Workflows', 'Automation Scripts'],
  },
  {
    name: 'Databases & Storage',
    icon: 'database',
    skills: ['PostgreSQL', 'SQLite', 'MySQL', 'Redis Caching', 'Prisma ORM'],
  },
  {
    name: 'Security & Architecture',
    icon: 'shield-check',
    skills: ['JWT Authentication', 'CORS & Rate Limiting', 'Query Optimization', 'VAPT Hardening', 'Agile/Scrum'],
  },
];

export const DATA_FEATURED: FeaturedProject[] = [
  {
    id: 'portfolio-hub',
    client: 'Flagship Platform',
    title: 'Full-Stack Developer Portfolio Hub',
    date: 'Feb 2026 – Present',
    icon: 'layers-3',
    stack: ['Django REST', 'React 19', 'TypeScript', 'Vite', 'Docker', 'Nginx', 'CSS Variables'],
    description: 'Engineered a multi-layered blueprint portfolio with Django REST API integration, interactive API playground, terminal CLI, and theme state persistence.',
    callout: 'Production Ready',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/harshbamotra',
  },
  {
    id: 'smart-task-manager',
    client: 'SaaS Platform',
    title: 'Smart Task Analytics Dashboard',
    date: 'Aug 2025 – Dec 2025',
    icon: 'calculator',
    stack: ['Django', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSockets'],
    description: 'Built a real-time task management engine with automated priority scoring, WebSocket notifications, analytics dashboard, and CSV export capabilities.',
    callout: 'High Throughput',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/harshbamotra',
  },
  {
    id: 'api-service-gateway',
    client: 'Microservice Gateway',
    title: 'RESTful API Service Gateway',
    date: 'Jan 2025 – May 2025',
    icon: 'server',
    stack: ['Python', 'Django REST', 'Redis', 'Docker', 'OpenAPI', 'JWT Auth'],
    description: 'Developed an enterprise API gateway featuring per-tenant rate limiting, JWT authentication, OpenAPI spec generation, and request telemetry.',
    callout: '99.99% Uptime',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/harshbamotra',
  },
  {
    id: 'ai-document-search',
    client: 'AI Tooling',
    title: 'AI-Powered Document Search & Assistant',
    date: 'Sep 2024 – Dec 2024',
    icon: 'sparkles',
    stack: ['Python', 'Django', 'OpenAI GPT', 'LangChain', 'React', 'Tailwind CSS'],
    description: 'Integrated OpenAI GPT models and vector embeddings to deliver natural language document query capabilities with instant source citations.',
    callout: 'AI Powered',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/harshbamotra',
  },
];

export const DATA_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Full-Stack E-Commerce Engine',
    date: 'Jul 2025',
    description: 'Full-featured online shop with product search, cart state management, Razorpay payment processing, and Django admin backend.',
    stack: ['Django', 'React', 'PostgreSQL', 'Tailwind CSS', 'Razorpay API'],
  },
  {
    id: '2',
    title: 'Real-Time Chat & Notification Service',
    date: 'Apr 2025',
    description: 'WebSocket messaging application supporting room channels, direct messaging, read receipts, and typing indicators.',
    stack: ['Django Channels', 'Redis', 'React', 'TypeScript', 'WebSockets'],
  },
  {
    id: '3',
    title: 'CI/CD Pipeline & Docker Automation',
    date: 'Feb 2025',
    description: 'Automated GitHub Actions workflows for continuous integration, automated unit testing, Docker image building, and deployment.',
    stack: ['Docker', 'GitHub Actions', 'AWS EC2', 'Nginx', 'Bash Scripts'],
  },
  {
    id: '4',
    title: 'Multi-Tenant Auth & Role Service',
    date: 'Nov 2024',
    description: 'Centralized authentication module providing RBAC permissions, refresh token rotation, and password reset flows.',
    stack: ['Django REST Framework', 'SimpleJWT', 'PostgreSQL', 'PyTest'],
  },
  {
    id: '5',
    title: 'Interactive Portfolio Blueprint Theme',
    date: 'Sep 2024',
    description: 'Technical drawing blueprint portfolio with layer toggle controls, dark/light print modes, and responsive layout.',
    stack: ['React 19', 'TypeScript', 'CSS3 Modules', 'Vite'],
  },
  {
    id: '6',
    title: 'Database Query Optimization Suite',
    date: 'Jun 2024',
    description: 'Performance tuning project reducing N+1 database queries and query latency by 45% using select_related and prefetch_related.',
    stack: ['Python', 'Django ORM', 'PostgreSQL', 'Redis'],
  },
];

export const DATA_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2024 – Present',
    role: 'Full-Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Bengaluru, IN',
    bullets: [
      'Architected scalable web applications utilizing Django backends and React TypeScript frontends.',
      'Optimized database queries and API response times by 35% across production workloads.',
      'Implemented automated CI/CD pipelines via GitHub Actions and Docker containerization.',
    ],
  },
  {
    id: 'exp-2',
    period: '2023 – 2024',
    role: 'Software Engineer',
    company: 'Innovate Labs',
    location: 'India',
    bullets: [
      'Developed REST APIs and database schema migrations for multi-tenant client applications.',
      'Collaborated closely with UI/UX designers to translate Figma designs into pixel-perfect React components.',
      'Maintained 90%+ unit test coverage across backend Django services.',
    ],
  },
  {
    id: 'exp-3',
    period: '2022 – 2023',
    role: 'Software Engineering Intern',
    company: 'RN Tech Solutions',
    location: 'India',
    bullets: [
      'Built automation scripts in Python for data parsing and third-party API ingestion.',
      'Assisted in frontend UI development using HTML, CSS, JavaScript, and React.',
    ],
  },
];

export const DATA_AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Outstanding Full-Stack Engineering Award',
    subtitle: 'Recognized for high-impact Django & React platform delivery (2025)',
    icon: 'trophy',
  },
  {
    id: 'award-2',
    title: 'Best Architecture & API Performance',
    subtitle: 'Awarded for zero-downtime microservices migration and query optimization',
    icon: 'award',
  },
  {
    id: 'award-3',
    title: 'Client Appreciation Distinction',
    subtitle: 'Concurrent client accolades for rapid project delivery and code quality',
    icon: 'star',
  },
  {
    id: 'award-4',
    title: 'Top Open Source Contributor',
    subtitle: 'Acknowledged for contributions to open-source Python & React tools',
    icon: 'trending-up',
  },
];

export const DATA_EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'University / Institute of Technology',
    year: '2020 – 2024',
    grade: 'First Class with Distinction (CGPA 8.4/10)',
  },
];

export const DATA_API_ENDPOINTS: ApiEndpoint[] = [
  {
    method: 'GET',
    path: '/api/about',
    description: 'Get developer profile, role summary, tagline, and contact info',
    data: DATA_PROFILE,
  },
  {
    method: 'GET',
    path: '/api/status',
    description: 'Get current system status metrics and load indicators',
    data: DATA_STATUS,
  },
  {
    method: 'GET',
    path: '/api/capabilities',
    description: 'List technical capabilities and skill categories',
    data: DATA_CAPABILITIES,
  },
  {
    method: 'GET',
    path: '/api/projects/featured',
    description: 'Get flagship featured portfolio projects',
    data: DATA_FEATURED,
  },
  {
    method: 'GET',
    path: '/api/projects/all',
    description: 'Get complete project directory',
    data: DATA_PROJECTS,
  },
  {
    method: 'GET',
    path: '/api/experience',
    description: 'Get employment history and achievements',
    data: DATA_EXPERIENCE,
  },
  {
    method: 'GET',
    path: '/api/awards',
    description: 'Get recognition and awards',
    data: DATA_AWARDS,
  },
  {
    method: 'GET',
    path: '/api/education',
    description: 'Get education background',
    data: DATA_EDUCATION,
  },
];
