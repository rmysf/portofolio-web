import {
  NavLink, Skill, Service, Project,
  Experience, Testimonial, Stat
} from '../types';

import acuread from '../images/Cover Acuread.webp';
import mbege from '../images/Cover MBGE.webp';
import skincancer from '../images/web ai kanker kulit.webp';
import vegetable from '../images/web petani.webp';
import portfolioweb from '../images/web portofolio.webp';
import highwayescape from '../images/3d game.webp';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#project' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Experience', href: '#experience' },
];

export const stats: Stat[] = [
  { number: '6', suffix: '+', label: 'Projects Completed' },
  { number: '18', suffix: '+', label: 'Certificates Earned' },
  { number: '3.44', suffix: '', label: 'GPA' },
];

export const skills: Skill[] = [
  { name: 'Flutter' },
  { name: 'Dart' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'PHP' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Bootstrap' },
  { name: 'Tailwind CSS' },
  { name: 'Flask' },
  { name: 'FastAPI' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'SQL' },
  { name: 'Figma' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'Vercel' },
  { name: 'Postman' },
  { name: 'Unity' },
  { name: 'C#' },
];

export const services: Service[] = [
  { number: '01', icon: '🎨', title: 'UI/UX Design', description: 'Designing the interface flow in Figma before moving into code, making sure the final look truly fits user needs.' },
  { number: '02', icon: '📱', title: 'Mobile Development', description: 'Building cross-platform mobile apps with Flutter & GetX, from interactive UI to API integration.' },
  { number: '03', icon: '💻', title: 'Web Development', description: 'Developing web applications and REST APIs using Flask, FastAPI, and PHP with MySQL databases.' },
  { number: '04', icon: '🗄️', title: 'Database Management', description: 'Designing and managing relational and non-relational databases with MySQL and MongoDB.' },
  { number: '05', icon: '🤖', title: 'AI Integration', description: 'Integrating AI technologies such as Deep Learning (CNN), YOLO, and OCR into web and mobile applications.' },
  { number: '06', icon: '🕹️', title: 'Game Development', description: 'Designing and developing 3D games with Unity and C#, complete with AI systems and gameplay mechanics.' },
];


export const projects: Project[] = [
  {
    title: 'AcuRead — Water Utility Information System',
    description: 'Developed a water utility (PDAM) information system as a full stack developer, covering a REST API backend with Flask, a front-end web app, and mobile apps with Flutter GetX. Features include water meter scanning for field staff, customer management, and billing.',
    tags: [
      { label: 'Featured', color: 'yellow' },
      { label: 'Flutter', color: 'blue' },
      { label: 'Flask', color: 'purple' },
    ],
    bgClass: 'bg-blue',
    initials: 'ACU',
    href: '#',
    featured: true,
    image: acuread,
  },
  {
    title: 'Mbege — Nutrition Program Monitoring App',
    description: 'Sliced UI/UX designs from Figma into interactive Flutter components, with proper state management to keep page-to-page interactions smooth.',
    tags: [
      { label: 'Flutter', color: 'green' },
      { label: 'Figma', color: 'purple' },
    ],
    bgClass: 'bg-green',
    initials: 'MBG',
    href: '#',
    image: mbege,
  },
  {
    title: 'AI-Based Skin Cancer Detection System',
    description: 'Built a website for skin cancer detection using a CNN MobileNetV2 deep learning model, covering image preprocessing, model inference, and prediction result display.',
    tags: [
      { label: 'Python', color: 'blue' },
      { label: 'AI/CNN', color: 'purple' },
    ],
    bgClass: 'bg-purple',
    initials: 'SKD',
    href: '#',
    image: skincancer,
  },
  {
    title: 'Vegetable Planting Guide Website',
    description: 'Built a full CRUD web application containing complete guides on how to grow various vegetables, complete with YouTube tutorial videos.',
    tags: [
      { label: 'Flask', color: 'blue' },
      { label: 'MySQL', color: 'green' },
    ],
    bgClass: 'bg-green',
    initials: 'WPS',
    href: '#',
    image: vegetable,
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a responsive portfolio website to showcase profile, skills, and completed projects.',
    tags: [
      { label: 'HTML/CSS/JS', color: 'red' },
    ],
    bgClass: 'bg-red',
    initials: 'WEB',
    href: '#',
    image: portfolioweb,
  },
  {
    title: 'Highway Escape — 3D Game',
    description: 'Designed a car-chase racing game, complete with a pursuing police AI system, collision detection, a level system, and integrated 3D assets, animation, and audio.',
    tags: [
      { label: 'Unity', color: 'purple' },
      { label: 'C#', color: 'yellow' },
    ],
    bgClass: 'bg-purple',
    initials: 'HWE',
    href: '#',
    image: highwayescape,
  },
];

export const experiences: Experience[] = [
    {
    period: '2024 — 2025',
    title: 'Documentation Division Member',
    company: 'RANA 9 — Student Photography Organization',
    description: 'Handled documentation for various on-campus events. Participated as both committee member and exhibitor in RANA 9\'s annual photography exhibition, displaying photographic work in an official exhibition.',
  },
  {
    period: '2025 — 2026',
    title: 'Documentation Division Coordinator',
    company: 'RANA 9 — Student Photography Organization',
    description: 'Led the documentation team and coordinated photographers for every event. Responsible for documenting campus events such as PKKMB and managing the organization\'s photo archive.',
  },
  {
    period: '2024',
    title: 'Freelance Photographer',
    company: 'Freelance',
    description: 'Coordinated with clients to understand their desired visual style and branding message. Captured sports moments (tennis) for clients\' social media branding content.',
  },
];

// No testimonial data available yet — left empty for now.
// Add real testimonials here once available (from lecturers, teammates, or freelance clients).
export const testimonials: Testimonial[] = [];