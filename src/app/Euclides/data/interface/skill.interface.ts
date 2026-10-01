export interface Skill {
  name: string;
  category: CategorySkill;
  icon: string;
}
export type CategorySkill = 'Alls'|'Lenguaje' | 'Backend' | 'Frontend' | 'Tools' | 'Agents';
