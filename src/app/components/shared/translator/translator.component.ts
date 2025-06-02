import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'header-translator',
  imports: [],
  templateUrl: './translator.component.html',
})
export class TranslatorComponent {
  translate = inject(TranslateService);
  lang: string;

  constructor() {
    const savedLang = localStorage.getItem('lang');
    this.lang = savedLang || 'en'; // 'es' por defecto ahora
    this.translate.use(this.lang);
    localStorage.setItem('lang', this.lang);
    document.documentElement.lang = this.lang;
  }

  get currentLang() {
    return this.translate.currentLang || localStorage.getItem('lang') || 'es';
  }

  // Cambia el idioma a partir de un evento (select)
  changeLang(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  changeLangDirect(lang: string) {
    this.lang = lang; // Actualiza la variable local
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Guarda el idioma en localStorage
    document.documentElement.lang = lang; // Cambia el atributo 'lang' del HTML
  }
}
