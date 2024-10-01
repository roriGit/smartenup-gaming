import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CardgameComponent } from "../cardgame/cardgame.component";
import { FeaturesComponent } from "../features/features.component";

@Component({
  selector: 'app-topgames',
  standalone: true,
  imports: [ButtonComponent, CardgameComponent, FeaturesComponent],
  templateUrl: './topgames.component.html',
  styleUrl: './topgames.component.scss'
})
export class TopgamesComponent {

}
