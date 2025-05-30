import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardAccountComponent } from "../../components/project/card-account/card-account.component";

@Component({
  selector: 'app-project',
  imports: [CardAccountComponent],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent { }
