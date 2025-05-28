export interface SkillSection {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  description: string;
  icon: string;
  link: string; // Opcional, para añadir un enlace al icono
  color?: string; // Opcional, para personalizar el color del icono
}
