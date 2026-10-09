export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
  companyImage?: string;
  icon: 'panel' | 'palette' | 'code';
}