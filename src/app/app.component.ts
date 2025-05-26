import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { TranslatorComponent } from './components/translator/translator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TranslateModule, RouterOutlet, NavbarComponent, TranslatorComponent],
  providers: [Title],
})
export class AppComponent {

}
