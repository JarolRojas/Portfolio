import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TranslateModule, RouterOutlet, NavbarComponent],
  providers: [Title],
})
export class AppComponent {

}
