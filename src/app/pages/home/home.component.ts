import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [TranslateModule, NgClass],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  textos: string[] = [
    "Este es el texto 1",
    "Este es el texto 2",
    "Este es el texto 3",
    "Este es el texto 4",
    "Este es el texto 5",
  ];
  textoActual: string = '';
  private indice: number = 0;
  private intervalo: any;
  private typingInterval: any;
  private borrando: boolean = false;
  animarHumo: boolean = false;

  ngOnInit() {
    this.mostrarLetraPorLetra();
  }

  mostrarLetraPorLetra() {
    this.textoActual = '';
    let palabra = this.textos[this.indice];
    let i = 0;
    this.typingInterval = setInterval(() => {
      if (i < palabra.length) {
        this.textoActual += palabra[i];
        i++;
      } else {
        clearInterval(this.typingInterval);
        let tiempo = this.textoActual.length * 100;
        setTimeout(() => this.animarDesaparicion(), tiempo > 1000 ? tiempo : 1500);
      }
    }, 90);
  }

  animarDesaparicion() {
    this.animarHumo = true;
    setTimeout(() => {
      this.animarHumo = false;
      this.indice = (this.indice + 1) % this.textos.length;
      this.mostrarLetraPorLetra();
    }, 700);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
    clearInterval(this.typingInterval);
  }
}
