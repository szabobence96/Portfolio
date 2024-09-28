import { Component, HostListener, OnInit } from '@angular/core';
import { navbarData } from './nav-data';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public sharedService: SharedService){}

  navData = navbarData
  screenWidth: number = 0;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.sharedService.closed = true
    this.sharedService.opened = false;
  }
}
