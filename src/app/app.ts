import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslatorComponent } from "./components/shared/translator/translator.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatorComponent, FooterComponent, NavbarComponent, TranslateModule],
  templateUrl: './app.html'
})
export class App {
    translate = inject(TranslateService);
  constructor() {
    this.translate.setDefaultLang('en');
  }
}
