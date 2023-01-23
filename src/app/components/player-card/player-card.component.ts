import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
  outputs: ['updPlayerCard', 'delPlayerCard']
})
export class PlayerCardComponent {
  @Input() playerCard: any;
  updPlayerCard = new EventEmitter();
  delPlayerCard = new EventEmitter();
  
  updPlayer(pid: any) {
    this.updPlayerCard.emit(pid);
  }
  delPlayer(pid: any) {
    this.delPlayerCard.emit(pid);
  }
}
