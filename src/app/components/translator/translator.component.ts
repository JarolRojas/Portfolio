import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translator',
  imports: [],
  templateUrl: './translator.component.html',
})
export class TranslatorComponent {
  constructor(private translate: TranslateService, private titleService: Title) {
    translate.setDefaultLang('en');
    this.setTranslatedTitle();
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedTitle();
    });
  }

  setTranslatedTitle() {
    this.translate.get('title').subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }

  changeLanguage(event: Event | string) {
    let lang: string;
    if (typeof event === 'string') {
      lang = event;
    } else {
      const target = event.target as HTMLSelectElement;
      lang = target.value;
    }
    this.translate.use(lang);
  }
}
