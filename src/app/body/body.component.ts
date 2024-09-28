import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{

  bgUrl:string="./assets/images/bg_2.jpg";
  bgUrl2:string="https://image.ibb.co/n5A2HU/showcase.jpg";

  private imageTimeout: any;
 
  ngOnInit() {
   
    this.imageTimeout = setTimeout(() => {
      const imageCity = document.querySelector('.img-city') as HTMLElement;
      if (imageCity) {
        imageCity.classList.add('fade-in');
      }
    }, 200);

  }
}
