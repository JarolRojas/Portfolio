export interface SkillSection {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  description: string;
  icon: string;
  color?: string; // Opcional, para personalizar el color del icono
  link?: string; // Opcional, para añadir un enlace al icono
}
