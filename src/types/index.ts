export interface CompanyConfig {
  name: string;
  company: string;
  role: string;
  location: string;
  links: Record<string, string>;
}

export interface Service {
  type: string;
  subtitle: string;
  desc: string;
  rate: string;
}

export interface Course {
  title: string;
  price: string;
  syllabus: string[];
}

export interface CourseCategory {
  category: string;
  courses: Course[];
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
  sublabel: string;
}

export interface NavSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  href: string;
}
