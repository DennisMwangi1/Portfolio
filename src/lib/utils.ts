import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Project {
  clientName: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    clientName: 'HLCC Africa',
    problem: 'Leadership consultancy lacked a professional digital presence to support their services across Africa, limiting client reach and credibility.',
    solution: 'Built a modern, responsive website with CMS integration, service showcases, and optimized contact forms for lead generation.',
    outcome: 'Established professional online credibility and increased client inquiries through improved digital presence.',
    image: '/img/HLCC-home.png',
    liveUrl: 'https://www.hlcc.africa/',
  },
  {
    clientName: 'VarsitySoko',
    problem: 'Kenyan university students had no secure, trusted platform to buy, sell, and trade products within their campus communities.',
    solution: 'Developed a student-focused e-commerce marketplace with secure transactions, user verification, and campus-specific features.',
    outcome: 'Enabled safe campus commerce, improving student buying experience and building trusted peer-to-peer trading.',
    image: '/img/VaristySoko-home.png',
    liveUrl: 'https://varsitysoko.co.ke/',
  },
  {
    clientName: 'IOC Africa (UNESCO)',
    problem: 'The Intergovernmental Oceanographic Commission needed a modernized web presence to showcase ocean research programs.',
    solution: 'Designed and built a modern, accessible interface aligned with UNESCO branding and communication standards.',
    outcome: 'Delivered professional digital presence for a government-level stakeholder with improved content accessibility.',
    image: '/img/IOC-Africa.png',
    liveUrl: 'https://ioc-africa.vercel.app/',
  },
  {
    clientName: 'Zappic SDK',
    problem: 'Developers needed integration tools to incorporate Zappic functionality into their applications easily.',
    solution: 'Built a comprehensive Software Development Kit with clear documentation and robust API integrations.',
    outcome: 'Enabled partner ecosystem growth by simplifying third-party integrations.',
    image: '/img/zappic-home.png',
    liveUrl: 'https://zappic.co/',
  },
  {
    clientName: 'Kabori Platform',
    problem: 'Enterprises needed scalable, secure backend infrastructure without managing complex server setups.',
    solution: 'Contributed to a Backend-as-a-Service platform providing ready-to-use, scalable application backends.',
    outcome: 'Reduced client development time and infrastructure costs through managed backend services.',
    image: '/img/kabori-home.png',
    liveUrl: 'https://kabori.de/',
  },
  {
    clientName: 'Nexus Data & Design',
    problem: 'Businesses across multiple industries needed custom software solutions for digitization and process improvement.',
    solution: 'Led architecture, development, and implementation of custom solutions tailored to each client\'s needs.',
    outcome: 'Delivered successful digital transformation projects across diverse industries.',
    image: '/img/nexus-home.png',
    liveUrl: 'https://nexus-omega-liart.vercel.app/',
  },
  {
    clientName: 'Enterprise Architecture Integration (Internal Tool)',
    problem: 'The organization faced a critical disconnect between high-level architecture planning in Ardoq and execution in Azure DevOps. Manual replication of hierarchical work items (Epics → Features → Stories) was error-prone, time-consuming, and led to data inconsistencies.',
    solution: 'Architected "ArchBridge," a custom full-stack synchronization platform using React, Node.js, and BullMQ. Features include a drag-and-drop field mapping engine, automated background job processing, and real-time hierarchical syncing.',
    outcome: 'Eliminated manual data entry by automating the synchronization of complex work structures, ensuring 100% data alignment between architecture and development teams and significantly reducing administrative overhead.',
    image: '/img/ArchBridge.png',
    liveUrl: null,
  },
  {
    clientName: 'Enterprise CRM Integration',
    problem: 'A disconnect between the customer-facing application (Supabase) and the internal sales CRM (Dynamics 365) resulted in data fragmentation and manual entry errors.',
    solution: 'Architected a serverless middleware solution using Azure Functions and TypeScript. I designed a bi-directional sync engine that automatically handles data mapping, conflict resolution, and secure authentication for thousands of records.',
    outcome: 'Automated data flow between platforms, ensuring 100% data consistency and saving the operations team 20+ hours of manual data entry per week.',
    image: '/img/CRMsync.png',
    liveUrl: null,
  }
];