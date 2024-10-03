import { Component } from '@angular/core';
import { FeaturesComponent } from "../features/features.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FeaturesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
