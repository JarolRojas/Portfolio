import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatorComponent } from "./components/shared/translator/translator.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatorComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.html'
})
export class App {}
