import { Injectable, HostListener, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  closed = true
  opened = false

  toggleNavbar(){
    this.closed = !this.closed
    this.opened = !this.opened
  }
 
}
