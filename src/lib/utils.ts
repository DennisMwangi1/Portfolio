import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface CaseStudy {
  clientName: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  liveUrl: string;
}

export const projects: CaseStudy[] = [
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
];