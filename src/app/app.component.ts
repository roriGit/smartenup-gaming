import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./banner/banner.component";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { FavgamesComponent } from "./favgames/favgames.component";
import { VirtualgamingComponent } from "./virtualgaming/virtualgaming.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, NavmenuComponent, FavgamesComponent, VirtualgamingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smartenup';
}
