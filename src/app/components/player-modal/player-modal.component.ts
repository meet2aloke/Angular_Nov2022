import { Component, EventEmitter, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css'],
  inputs: ['openModal'],
  outputs: ['emitAddUpdPlayer']
})
export class PlayerModalComponent {
  @ViewChild('closeModal') modalClose: any;
  @Input() player: any;
  emitAddUpdPlayer = new EventEmitter();
  openModal: any;
 
  addUpdPlayer(pid: any) {
    const newPlayer = {
      id: this.player.id,
      name: this.player.name,
      gender: this.player.gender,
      email: this.player.email,
      city: this.player.city,
      salary: this.player.salary,
      tenure: this.player.tenure,
      runs: this.player.runs,
      profileImg: this.player.profileImg,
      agreeTerm: this.player.agreeTerm
    };
    this.modalClose.nativeElement.click();
    this.emitAddUpdPlayer.emit(newPlayer);
  }
}
