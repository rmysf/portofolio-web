export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  accent?: boolean;
  icon?: string;
}

export interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: { label: string; color: 'blue' | 'green' | 'purple' | 'red' | 'yellow' }[];
  bgClass: string;
  initials: string;
  href: string;
  featured?: boolean;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

export interface Stat {
  number: string;
  suffix: string;
  label: string;
}
