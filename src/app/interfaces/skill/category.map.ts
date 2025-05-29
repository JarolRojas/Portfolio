// categoryMap como constante
import { CategoryType, CategoryIcon } from './skill.enums';
import { skillMap } from './skill.map';

export const categoryMap = {
  [CategoryType.FRONTEND]: {
    icon: CategoryIcon.FRONTEND,
    category: CategoryType.FRONTEND,
    skills: [
      skillMap.Angular,
      skillMap.JavaScript,
      skillMap.TypeScript,
      skillMap.HTML5,
      skillMap.CSS3,
      skillMap.Bootstrap,
      skillMap.Bulma,
      skillMap.Tailwind,
    ],
  },
  [CategoryType.BACKEND]: {
    icon: CategoryIcon.BACKEND,
    category: CategoryType.BACKEND,
    skills: [
      skillMap['Node.js'],
      skillMap.Python,
      skillMap.Java,
      skillMap.PowerShell,
      skillMap.Bash,
    ],
  },
  [CategoryType.DEVOPS]: {
    icon: CategoryIcon.DEVOPS,
    category: CategoryType.DEVOPS,
    skills: [
      skillMap.Docker,
      skillMap.Nginx,
      skillMap.Linux,
      skillMap.Git,
      skillMap.GitHub,
    ],
  },
  [CategoryType.DATABASE]: {
    icon: CategoryIcon.DATABASE,
    category: CategoryType.DATABASE,
    skills: [
      skillMap["SQL Server"],
    ],
  },
  [CategoryType.OTHER]: {
    icon: CategoryIcon.OTHER,
    category: CategoryType.OTHER,
    skills: [
      skillMap.Eclipse,
      skillMap["Visual Basic (net)"],
    ],
  },
} as const;
