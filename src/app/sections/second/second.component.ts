import { Component } from '@angular/core';
import { TextSecondService } from './text-second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(public textservice: TextSecondService) { }
  showOverlay: boolean = true;

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
  currentImages: any[] = this.images;

}
