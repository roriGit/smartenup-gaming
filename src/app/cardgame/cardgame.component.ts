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
    {"gameimage": "game0.jpeg", "gamename": "Core Philosophies", "userimage": "", "username": "Cameron Williamson", "userbrand":"Gillette", "link":"#"},
    {"gameimage": "game1.jpeg", "gamename": "Core Philosophies", "userimage": "", "username": "Cameron Williamson", "userbrand":"Gillette", "link":"#"},
    {"gameimage": "game2.jpeg", "gamename": "Core Philosophies", "userimage": "", "username": "Cameron Williamson", "userbrand":"Gillette", "link":"#"},
    {"gameimage": "game3.jpeg", "gamename": "Core Philosophies", "userimage": "", "username": "Cameron Williamson", "userbrand":"Gillette", "link":"#"},
    {"gameimage": "game4.jpeg", "gamename": "Core Philosophies", "userimage": "", "username": "Cameron Williamson", "userbrand":"Gillette", "link":"#"},
    {"gameimage": "game5.jpeg", "gamename": "Core Philosophies", "userimage": "", "username": "Cameron Williamson", "userbrand":"Gillette", "link":"#"},
  ]
}
