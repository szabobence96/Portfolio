import { Component, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar-icon',
  templateUrl: './navbar-icon.component.html',
  styleUrls: ['./navbar-icon.component.scss']
})
export class NavbarIconComponent {
  
 constructor(public sharedService: SharedService){}

 @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    const checkbox = document.getElementById('navCheckbox') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
