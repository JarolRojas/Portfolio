import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [TranslateModule, NgClass],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  textos: string[] = [];
  textoActual: string = '';
  private indice: number = 0;
  private intervalo: any;
  private typingInterval: any;
  private borrando: boolean = false;
  animarHumo: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.cargarTextos();
  }

  cargarTextos() {
    const keys = [
      'HOME.TEXT1',
      'HOME.TEXT2',
      'HOME.TEXT3',
      'HOME.TEXT4',
      'HOME.TEXT5'
    ];
    this.translate.get(keys).subscribe((res: any) => {
      this.textos = keys.map(key => res[key]);
      this.mostrarLetraPorLetra();
    });
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
