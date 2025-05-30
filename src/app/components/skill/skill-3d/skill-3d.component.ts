import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SkillCategory } from '../../../Services/skills.service';
declare var TagCanvas: any;

@Component({
  selector: 'app-skill-3d',
  imports: [],
  templateUrl: './skill-3d.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skill3dComponent implements AfterViewInit, OnChanges {
  @Input() categories!: SkillCategory[];

  private initialized = false;

  ngAfterViewInit(): void {
    this.tryInitTagCanvas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories'] && this.categories && this.categories.length > 0) {
      this.tryInitTagCanvas();
    }
  }

  private tryInitTagCanvas() {
    if (!this.categories || this.categories.length === 0) return;
    if (this.initialized) return;
    setTimeout(() => {
      try {
        TagCanvas.Start('logoCanvas', 'logoList', {
          reverse: true,
          depth: 0.3, // Mayor profundidad para efecto 3D
          maxSpeed: 0.035, // velocidad de auto-rotación aumentada
          minSpeed: 0.01, // velocidad mínima para que nunca se detenga
          fadeIn: 800, // tiempo de aparición de las etiquetas
          noSelect: false,
          outlineColour: '#fff0',
          outlineThickness: 0,
          imageMode: 'image',
          initial: [0.1, -0.1],
          zoom: 1.1,
          wheelZoom: false,
          dragThreshold: 0,
          dragControl: true, // permite mover con el ratón
          freezeActive: true, // detiene el movimiento automático mientras se arrastra
          clickToFront: 800, // Al hacer click, la imagen va al frente (animación de 800ms)
          shadow: '#222', // Sombra oscura para resaltar las imágenes
          shadowBlur: 5, // Difuminado de la sombra
        });
        // Añadir eventos para detener y reanudar la rotación al hacer clic o tocar
        const canvas = document.getElementById('logoCanvas');
        if (canvas) {
          canvas.addEventListener('mousedown', () => {
            TagCanvas.SetSpeed('logoCanvas', [0, 0]);
          });
          canvas.addEventListener('mouseup', () => {
            TagCanvas.SetSpeed('logoCanvas', [0.1, -0.1]);
          });
          canvas.addEventListener('touchstart', () => {
            TagCanvas.SetSpeed('logoCanvas', [0, 0]);
          }, { passive: true });
          canvas.addEventListener('touchend', () => {
            TagCanvas.SetSpeed('logoCanvas', [0.1, -0.1]);
          }, { passive: true });
        }
        this.initialized = true;
      } catch (e: any) {
        console.error('TagCanvas error:', e);
      }
    }, 0);
  }
}
