export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Ravn',
    location: 'Salt Lake City, USA',
    role: 'Full Stack Developer',
    period: 'Apr 2022 – Mar 2026',
    current: false,
    description: 'Led high-impact engineering at a fast-moving US tech company — from AI orchestration systems to large-scale legacy modernization.',
    highlights: [
      'Designed a multi-agent AI system where agents with distinct executive roles debated complex business problems, reaching a consensus verdict with real-time user intervention.',
      'Implemented OpenSearch for high-traffic filtering across 200k+ records using cursor-based pagination, achieving sub-second response times.',
      'Led Angular migration from v9 to v19 with Signals, modernizing reactive state management across a large-scale application.',
      'Built a secure mobile document management system with React Native, integrating AWS S3 and AWS Textract for automated document processing.',
      'Dockerized deployments and refactored PHP legacy systems, improving maintainability and delivery speed.',
    ],
    stack: ['Angular', 'React Native', 'Java Spring Boot', 'OpenSearch', 'AWS', 'Docker', 'Laravel', 'Jest'],
  },
  {
    company: 'Spondylus',
    location: 'Lima, Peru',
    role: 'Full Stack Developer — Team Lead',
    period: 'Aug 2021 – Apr 2022',
    current: false,
    description: 'Technical lead for a mission-critical Oil & Gas production management system serving onshore and offshore operations for PETROPERU.',
    highlights: [
      'Architected a decoupled system with Laravel 8 and Angular 12, implementing custom Bearer Token auth and a domain-driven API with 60+ RESTful endpoints.',
      'Engineered a well production allocation engine distributing oil and gas output across wells and batteries with complex business logic.',
      'Built a full Angular Material SPA with RxJS, Lazy Loading, Route Guards, and HTTP Interceptors.',
      'Integrated bulk Excel import/export and dynamic PDF generation for technical field audits.',
    ],
    stack: ['Angular', 'Laravel', 'PHP 8', 'Docker', 'RxJS', 'Angular Material'],
  },
  {
    company: 'ANDHEURIS',
    location: 'Piura, Peru',
    role: 'Full Stack Engineer',
    period: 'Oct 2020 – May 2022',
    current: false,
    description: 'Delivered enterprise software across banking, agriculture, maritime, and education sectors.',
    highlights: [
      "Contributed to BBVA's 'Office One' — internal request management and personnel performance systems with strict security standards.",
      'Built harvest tracking and management systems for citrus production and poultry farm automation.',
      'Developed an offline-first payroll and sales system for the scallop industry in areas without connectivity.',
      'Built complete academic platforms with virtual classrooms, automated enrollment, and real-time grade tracking.',
    ],
    stack: ['Angular', 'Laravel', 'ASP.NET', 'Flutter', 'React.js', 'SQL'],
  },
  {
    company: 'CodeGlobal',
    location: 'Piura, Peru',
    role: 'Full Stack Developer',
    period: 'Apr 2019 – Sep 2020',
    current: false,
    description: 'Full stack generalist role — built ERPs from scratch, mobile platforms, and FinTech integrations.',
    highlights: [
      'Designed a modular ERP from zero with NestJS, Angular, and PostgreSQL/MongoDB covering Healthcare, Agribusiness, and Finance.',
      'Led a delivery/logistics mobile platform with real-time Google Maps tracking in React Native.',
      'Integrated Peruvian SUNAT electronic invoicing via Laravel, automating the full invoice lifecycle.',
      'Built intelligent WhatsApp bots with Node.js and BotBuilder SDK for automated order management flows.',
    ],
    stack: ['NestJS', 'Angular', 'React Native', 'Node.js', 'Firebase', 'PostgreSQL', 'MongoDB', 'Laravel'],
  },
];
