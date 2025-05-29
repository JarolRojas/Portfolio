import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../../components/project/card-project/card-project.component";
import { CardAccountComponent } from "../../components/project/card-account/card-account.component";

@Component({
  selector: 'app-project',
  imports: [CardComponent, CardAccountComponent],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent { }
