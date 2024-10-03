import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-cardgame',
  standalone: true,
  imports: [CommonModule, NgFor, ButtonComponent],
  templateUrl: './cardgame.component.html',
  styleUrl: './cardgame.component.scss'
})
export class CardgameComponent {
  list:any = [
    {"gameimage": "game0.jpeg", "gamename": "Core Philosophies", "userimage": "avatar1.png", "username": "Cameron Williamson", "userbrand":"Gillette"},
    {"gameimage": "game1.jpeg", "gamename": "Core Philosophies", "userimage": "avatar2.png", "username": "Dianne Russel", "userbrand":"Louis Vuitton"},
    {"gameimage": "game2.jpeg", "gamename": "Core Philosophies", "userimage": "avatar3.png", "username": "Jane Cooper", "userbrand":"Mastercard"},
    {"gameimage": "game3.jpeg", "gamename": "Core Philosophies", "userimage": "avatar4.png", "username": "Cody Fisher", "userbrand":"The Walt Disney Company"},
    {"gameimage": "game4.jpeg", "gamename": "Core Philosophies", "userimage": "avatar5.png", "username": "Wade Warren", "userbrand":"Gillette"},
    {"gameimage": "game5.jpeg", "gamename": "Core Philosophies", "userimage": "avatar6.png", "username": "Robert Fox", "userbrand":"L'Oreal"},
  ]
}
