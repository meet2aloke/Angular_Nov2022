import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  // own data
  p1a: number = 10;
  p1b: string = 'Tech class';
  p1c: string = 'Angular';
  p1d: string = 'Online';
  // p1_elem: any;

  constructor(){
    // this.p1_elem = {};
  }

  p1f1() {
    alert('I am F1 function from parent...');
  }

  //From child 2
  p_c2x: any;
  p_c2y: any;
  p_c2z: any;
  receiveFrom_c2(c2_elem: any) {
    this.p_c2x = c2_elem.x;
    this.p_c2y = c2_elem.y;
    this.p_c2z = c2_elem.z;
  }

  //From child 1
  p_c1m: string = '';
  p_c1n: string = '';
  p_c1o: string = '';
  receiveFrom_c1(c1_elem: any) {
    this.p_c1m = c1_elem.m;
    this.p_c1n = c1_elem.n;
    this.p_c1o = c1_elem.o;
  }

  p1_elem: any = {
    a: this.p1a, b: this.p1b, c: this.p1c, d: this.p1d, f: this.p1f1,
    m: this.p_c1m, n: this.p_c1n, o: this.p_c1o
  };

}
