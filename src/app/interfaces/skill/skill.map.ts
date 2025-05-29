// skillMap como constante
import { SkillDescription, SkillIcon, SkillLink, SkillColor } from './skill.interface';

export const skillMap = {
  [SkillDescription.ANGULAR]: { icon: SkillIcon.ANGULAR, description: SkillDescription.ANGULAR, link: SkillLink.ANGULAR, color: SkillColor.ANGULAR },
  [SkillDescription.BASH]: { icon: SkillIcon.BASH, description: SkillDescription.BASH, link: SkillLink.BASH, color: SkillColor.BASH },
  [SkillDescription.BOOTSTRAP]: { icon: SkillIcon.BOOTSTRAP, description: SkillDescription.BOOTSTRAP, link: SkillLink.BOOTSTRAP, color: SkillColor.BOOTSTRAP },
  [SkillDescription.BULMA]: { icon: SkillIcon.BULMA, description: SkillDescription.BULMA, link: SkillLink.BULMA, color: SkillColor.BULMA },
  [SkillDescription.CSS3]: { icon: SkillIcon.CSS3, description: SkillDescription.CSS3, link: SkillLink.CSS3, color: SkillColor.CSS3 },
  [SkillDescription.DATABASES]: { icon: SkillIcon.DATABASES, description: SkillDescription.DATABASES, link: SkillLink.DATABASES, color: SkillColor.DATABASES },
  [SkillDescription.DOCKER]: { icon: SkillIcon.DOCKER, description: SkillDescription.DOCKER, link: SkillLink.DOCKER, color: SkillColor.DOCKER },
  [SkillDescription.ECLIPSE]: { icon: SkillIcon.ECLIPSE, description: SkillDescription.ECLIPSE, link: SkillLink.ECLIPSE, color: SkillColor.ECLIPSE },
  [SkillDescription.GIT]: { icon: SkillIcon.GIT, description: SkillDescription.GIT, link: SkillLink.GIT, color: SkillColor.GIT },
  [SkillDescription.GITHUB]: { icon: SkillIcon.GITHUB, description: SkillDescription.GITHUB, link: SkillLink.GITHUB, color: SkillColor.GITHUB },
  [SkillDescription.HTML5]: { icon: SkillIcon.HTML5, description: SkillDescription.HTML5, link: SkillLink.HTML5, color: SkillColor.HTML5 },
  [SkillDescription.JAVA]: { icon: SkillIcon.JAVA, description: SkillDescription.JAVA, link: SkillLink.JAVA, color: SkillColor.JAVA },
  [SkillDescription.JAVASCRIPT]: { icon: SkillIcon.JAVASCRIPT, description: SkillDescription.JAVASCRIPT, link: SkillLink.JAVASCRIPT, color: SkillColor.JAVASCRIPT },
  [SkillDescription.LINUX]: { icon: SkillIcon.LINUX, description: SkillDescription.LINUX, link: SkillLink.LINUX, color: SkillColor.LINUX },
  [SkillDescription.NGINX]: { icon: SkillIcon.NGINX, description: SkillDescription.NGINX, link: SkillLink.NGINX, color: SkillColor.NGINX },
  [SkillDescription.NODE]: { icon: SkillIcon.NODE, description: SkillDescription.NODE, link: SkillLink.NODE, color: SkillColor.NODE },
  [SkillDescription.POWERSHELL]: { icon: SkillIcon.POWERSHELL, description: SkillDescription.POWERSHELL, link: SkillLink.POWERSHELL, color: SkillColor.POWERSHELL },
  [SkillDescription.PYTHON]: { icon: SkillIcon.PYTHON, description: SkillDescription.PYTHON, link: SkillLink.PYTHON, color: SkillColor.PYTHON },
  [SkillDescription.TAILWIND]: { icon: SkillIcon.TAILWIND, description: SkillDescription.TAILWIND, link: SkillLink.TAILWIND, color: SkillColor.TAILWIND },
  [SkillDescription.TYPESCRIPT]: { icon: SkillIcon.TYPESCRIPT, description: SkillDescription.TYPESCRIPT, link: SkillLink.TYPESCRIPT, color: SkillColor.TYPESCRIPT },
  [SkillDescription.VISUAL]: { icon: SkillIcon.VISUAL, description: SkillDescription.VISUAL, link: SkillLink.VISUAL, color: SkillColor.VISUAL },
} as const;
