import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FeaturesComponent } from "../features/features.component";
import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [FeaturesComponent, CommonModule, NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials:any = [
    {rating:"1", username: "Arlene McCoy"},
    {rating:"2", username: "Kathryn Murphy"},
    {rating:"3", username: "Rory"},
    {rating:"4", username: "Sandy"},
    {rating:"5", username: "Ayden"}
  ]
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      
      new Splide('#splide', {
        type   : 'loop',
        perPage    : 2,
        start : 2,
        gap:'3em',
        arrows:false,
        autoplay: false,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
      }).mount();
    }
  }
}