export interface Skill {
  name: string;
  category: 'Lenguaje' | 'Backend' | 'Frontend' | 'Tools' | 'Agents';
  icon: string;
}
export interface SkillIcon {
  width: number;
  height: number;
  body: string;
}
