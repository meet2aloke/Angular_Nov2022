import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  localTime: string = '';
  a = setInterval(() => {
    this.localTime = new Date().toLocaleTimeString();
  }, 1000);
}
