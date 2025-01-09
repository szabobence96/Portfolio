import { Component, HostListener } from '@angular/core';
import { TextSecondService } from './text-second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(public textservice: TextSecondService) {
    this.updateImagesBasedOnScreenWidth();
  }
  showOverlay: boolean = true;
  screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateImagesBasedOnScreenWidth();
  }
  images = [
    {
      imageSrc: './assets/images/webshop_images/w2.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w3.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w4.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w5.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w6.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w7.png',
    },
  ]

  mediumImages = [
    {
      imageSrc: './assets/images/webshop_images/w_m1.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w_m2.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w_m3.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w_m4.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w_m5.png',
    },
    {
      imageSrc: './assets/images/webshop_images/w_m6.png',
    },

  ]
  currentImages: any[] = this.images;
  private updateImagesBasedOnScreenWidth() {
    this.screenWidth = window.innerWidth;
    this.currentImages = this.screenWidth < 768 ? this.mediumImages : this.images;
  }
}
