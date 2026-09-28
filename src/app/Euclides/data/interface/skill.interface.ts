export interface Skill {
  name: string;
  category: 'Lenguaje' | 'Backend' | 'Frontend' | 'Tools' | 'Agents';
  icon: SkillIcon;
}
export interface SkillIcon {
  width: number;
  height: number;
  body: string;
}
