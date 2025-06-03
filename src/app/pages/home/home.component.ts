import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReadmeComponent } from "../../components/home/readme/readme.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'home',
  imports: [RouterLink, ReadmeComponent, TranslateModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  downloadCV() {
    const lang = localStorage.getItem('lang') || 'es';
    let fileUrl = '';
    let fileName = '';
    if (lang === 'en') {
      fileUrl = 'https://zervvoabpcxoxaehebwm.supabase.co/storage/v1/object/public/cv/jarol_rojas_reyes_cv_en.pdf';
      fileName = 'jarol_rojas_reyes_cv_en.pdf';
    } else {
      fileUrl = 'https://zervvoabpcxoxaehebwm.supabase.co/storage/v1/object/public/cv/jarol_rojas_reyes_cv_es.pdf';
      fileName = 'jarol_rojas_reyes_cv_es.pdf';
    }
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
