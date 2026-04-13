import type { LucideIcon } from 'lucide-react';
import {  DatabaseZap, Layers3, Workflow } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    icon: Layers3,
    title: 'Full-Stack Web Development',
    description:
      'I build scalable web applications using the MERN stack (MongoDB, Express, React, Node.js), focusing on development. I create responsive frontends with React and build robust backend APIs with Node.js and Express. My goal is to deliver maintainable, user-friendly products.',
    color: 'bg-blue-500',
    image: '/assets/mernstackdev.png',
  },
  {
    icon: Workflow,
    title: 'Scalable Backend and Frontend Architectures',
    description:
      'I develop scalable and high-performance applications using Node.js, TypeScript, React, and Next.js. I focus on clean architecture, efficient backend systems, and responsive frontend interfaces. I ensure seamless communication between client and server for reliable performance.',
    color: 'bg-purple-500',
    image: '/assets/fullstackdev.png',
  },
  {
    icon: DatabaseZap,
    title: 'Database Design & Optimization',
    description:
      'I design optimized and scalable databases using MongoDB and PostgreSQL. I focus on improving query performance, structuring data efficiently, and ensuring consistency across applications. My approach ensures fast, reliable, and well-structured data handling.',
    color: 'bg-yellow-500',
    image: '/assets/database.png',
  },
];
