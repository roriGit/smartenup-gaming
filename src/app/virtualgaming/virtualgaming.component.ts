import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FeaturesComponent } from "../features/features.component";

@Component({
  selector: 'app-virtualgaming',
  standalone: true,
  imports: [ButtonComponent, FeaturesComponent],
  templateUrl: './virtualgaming.component.html',
  styleUrl: './virtualgaming.component.scss'
})
export class VirtualgamingComponent {

}
