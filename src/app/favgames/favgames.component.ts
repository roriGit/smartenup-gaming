import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-favgames',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './favgames.component.html',
  styleUrl: './favgames.component.scss'
})
export class FavgamesComponent {

}
