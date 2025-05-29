import { SkillDescription, SkillIcon, SkillLink, SkillColor, CategoryType, CategoryIcon } from './skill.enums';

export interface Skill {
  description: SkillDescription;
  icon: SkillIcon;
  link: SkillLink;
  color: SkillColor;
}

export interface CategorySkill {
  category: CategoryType;
  icon: CategoryIcon;
  skills: readonly Skill[];
}
export { SkillDescription, SkillIcon, SkillLink, SkillColor };

