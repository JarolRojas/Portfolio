import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReadmeComponent } from "../../components/home/readme/readme.component";

@Component({
  selector: 'home',
  imports: [RouterLink, ReadmeComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  downloadCV() {
    const lang = localStorage.getItem('lang') || 'es';
    const fileName = `JarolRojas-CV-${lang}.pdf`;
    const fileUrl = `assets/download/${fileName}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
