import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  outputs: ['c2_emit']
})
export class Child2Component {
  //from parent
  @Input() p_elem: any;

  ngOnChange(){
    console.log('child 2 changed');
  }
  //own data
  c2x: number = 240;
  c2y: string = 'Sachin';
  c2z: number = 270;

  //Send data to parent
  c2_emit = new EventEmitter();
  sendDataToParent() {
    this.c2_emit.emit({ x: this.c2x, y: this.c2y, z: this.c2z });
  }
}
