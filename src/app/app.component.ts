import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TranslatorComponent } from "./components/shared/translator/translator.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TranslateModule, RouterOutlet, NavbarComponent, TranslatorComponent],
  providers: [Title],
})
export class AppComponent {
  translate = inject(TranslateService);
  constructor() {
    this.translate.setDefaultLang('en');
  }
}
