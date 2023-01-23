import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  outputs: ['viewPlayerList', 'editPlayerList', 'delPlayerList']
})
export class PlayerListComponent {
  @Input() playersList: any;
  viewPlayerList = new EventEmitter();
  editPlayerList = new EventEmitter();
  delPlayerList = new EventEmitter();

  viewPlayer(pid: any) {
    this.viewPlayerList.emit(pid);
  }
  editPlayer(pid: any) {
    this.editPlayerList.emit(pid);
  }
  deletePlayer(pid: any) {
    this.delPlayerList.emit(pid);
  }
}
