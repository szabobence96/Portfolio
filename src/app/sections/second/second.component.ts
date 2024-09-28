import { Component } from '@angular/core';
import { TextSecondService } from './text-second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(public textservice: TextSecondService) { }
}
