import { Component, OnInit } from '@angular/core';
import { TextFirstService } from './text-first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(public textService: TextFirstService) {
  }

  texts: string[] = [
    'Szoftverfejlesztő.',
    'Egyetemista.',
  ];

  displayText: string = '';
  typingSpeed: number = 60;
  deleteSpeed: number = 35;
  delayBetweenTexts: number = 1000;
  delayBetweenStarts: number = 100;
  currentTextIndex: number = 0;
  contentLoaded = false;

  private name: any;
  private h2: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.startTypewriterEffect();
    }, 2000);
    this.name = setTimeout(() => {
      const text = document.querySelector('.name') as HTMLElement;
      if (text) {
        text.classList.add('fade-in');
      }
    }, 1600);
    this.h2 = setTimeout(() => {
      const text = document.querySelector('h2') as HTMLElement;
      if (text) {
        text.classList.add('fade-in');
      }
    }, 1200);
  }

  startTypewriterEffect(): void {
    this.typeWriterEffect(this.texts[this.currentTextIndex]);
  }

  typeWriterEffect(text: string): void {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        this.displayText += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => this.deleteText(), this.delayBetweenTexts);
      }
    }, this.typingSpeed);

  }

  deleteText(): void {
    const deletingInterval = setInterval(() => {
      if (this.displayText.length > 0) {
        this.displayText = this.displayText.substring(0, this.displayText.length - 1);
      } else {
        clearInterval(deletingInterval);
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        setTimeout(() => this.typeWriterEffect(this.texts[this.currentTextIndex]), this.delayBetweenStarts);
      }
    }, this.deleteSpeed);
  }
}
