import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FeaturesComponent } from "../features/features.component";
import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import Splide from '@splidejs/splide';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-favgames',
  standalone: true,
  imports: [ButtonComponent, FeaturesComponent, CommonModule, NgFor],
  templateUrl: './favgames.component.html',
  styleUrl: './favgames.component.scss'
})
export class FavgamesComponent {
  favgames:any = [
    {name: "Arlene McCoy", art:"favgame02.jpeg"},
    {name: "Kathryn Murphy", art:"favgame02.jpeg"},
    {name: "Rory", art:"favgame02.jpeg"},
  ]
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Splide.js only in the browser
      new Splide('#favgames-slide', {
        type   : 'loop',
        //gap:'2em',
        arrows:true,
        pagination:false,
        autoplay: false,
        perPage: 1,
        start:1,
        fixedWidth:"100%",
        padding: "25%",
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
      }).mount();
    }
  }
}