import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  screenwidth = 0;

  currentImg: any;
  bgPc: string = "./assets/images/showcase.jpg";
  bgMobile: string = "./assets/images/bg_mobile2.jpg";
  private imageTimeout: any;

  ngOnInit() {
    this.screenwidth = window.innerWidth;
    this.imageTimeout = setTimeout(() => {
      const imageCity = document.querySelector('.img-city') as HTMLElement;
      if (imageCity) {
        imageCity.classList.add('fade-in');
      }
    }, 200);
    this.setCurrentImage();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenwidth = window.innerWidth;
    this.setCurrentImage();

  }
  setCurrentImage() {
    if (this.screenwidth < 768) {
      this.currentImg = this.bgMobile;
    } else {
      this.currentImg = this.bgPc;
    }
  }
}
