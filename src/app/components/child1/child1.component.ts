import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['a', 'b', 'c', 'd', 'f1'],
  outputs: ['c1_emit']
})
export class Child1Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.sendDataToParent();
  }

  //from parent
  a: any;
  b: any;
  c: any;
  d: any;
  f1: any;

  //own data
  c1m: number = 120;
  c1n: string = 'Tendulkar';
  c1o: string = 'Medicine';

  // send data to parent
  c1_emit = new EventEmitter();
  sendDataToParent() {
    this.c1_emit.emit({ m: this.c1m, n: this.c1n, o: this.c1o });
  }
}
