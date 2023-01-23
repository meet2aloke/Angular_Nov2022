import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  name: string = 'Sachin Tendulkar';
  img_url1: string = 'https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg';
  img_url2: string = 'assets/images/ganguly.PNG';
  flag: boolean = false;

  f1(){
    alert('Hey, I am f1 function...');
  }

  flg: boolean = false;
  btnShow: string = 'btn btn-danger me-2';
  btnHide: string = 'btn btn-info me-2';
  toggleFlag(){
    // if(this.flg === true)
    //   this.flg = false;
    // else
    //   this.flg = true;
    this.flg = !this.flg;
  }

  showPass: boolean = false;

  x: number = 19;
  y: number = 11;

  maxLen: number = 100;
  msg: string = 'Type something to test...';

  // addResult: number = 0;
  addMsg: string = 'Addition of 0 & 0 is 0';
  addition(m:number, n:number){
    // this.addResult = m + n;
    this.addMsg = `Addition of ${m} & ${n} is ${m+n}`;
  }
}
