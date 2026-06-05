export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string | null;
  live: boolean;
  stack: string[];
  highlights: string[];
  icon: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: 'Lockly',
    tagline: 'Zero-knowledge password manager',
    description:
      'A free, full-featured password manager with zero-knowledge architecture — your master password never leaves your device. Features 2FA, Web Crypto API encryption, per-device session auditing, and credential sharing between users.',
    url: 'https://lockly-s.web.app/',
    live: true,
    stack: ['Angular', 'Node.js', 'Firebase', 'Web Crypto API'],
    highlights: ['Zero-knowledge encryption', '2FA support', 'Session auditing per device', 'Credential sharing'],
    icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    featured: true,
  },
  {
    name: 'Profe-AI',
    tagline: 'AI teaching assistant for educators',
    description:
      'An AI-powered platform built exclusively for teachers. Generate exams, lesson plans, infographics, and educational games from a topic and grade level. Exports to PDF and Word, with real-time collaborative editing between teachers.',
    url: 'https://profe-ai.web.app/',
    live: true,
    stack: ['React', 'Firebase', 'AI/LLM', 'PDF/Word Export'],
    highlights: ['Exam generation', 'Lesson plans', 'Educational games', 'Real-time collaboration'],
    icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    featured: true,
  },
  {
    name: 'PDG App',
    tagline: 'Oil & Gas production management platform',
    description:
      'An enterprise-grade web platform for PETROPERU centralizing the full data lifecycle from wellhead to delivery point — well tests, production allocation, infrastructure inventory, gas measurement, and loss analysis.',
    url: null,
    live: false,
    stack: ['Angular', 'Java Spring Boot', 'Laravel', 'Docker', 'PostgreSQL'],
    highlights: ['Well production allocation', 'Gas measurement', 'Loss analysis', 'Onshore & offshore ops'],
    icon: '<path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="3"/>',
    featured: false,
  },
  {
    name: 'Janna Cosmetics',
    tagline: 'Full e-commerce ecosystem',
    description:
      'A complete multi-platform commerce solution: a Next.js landing page with real-time product listings, an Angular + Node.js admin panel for inventory and sales reports, and a React Native mobile app for on-the-go sales management.',
    url: 'https://janna-cosmetics.web.app/',
    live: true,
    stack: ['Next.js', 'Angular', 'Node.js', 'React Native', 'Firebase'],
    highlights: ['Real-time product catalog', 'Admin panel', 'Mobile sales app', 'Sales reports'],
    icon: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
    featured: false,
  },
  {
    name: 'Elemental ERP',
    tagline: 'Modular enterprise resource planning system',
    description:
      'A comprehensive ERP platform built from scratch with 30+ modules spanning Finance, HR, Inventory, Sales, POS, Logistics, Healthcare, Manufacturing, Agribusiness, and more — serving multiple business verticals simultaneously.',
    url: null,
    live: false,
    stack: ['Angular', 'NestJS', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
    highlights: ['30+ integrated modules', 'Multi-tenant', 'POS & inventory', 'Healthcare & manufacturing'],
    icon: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    featured: true,
  },
];
