import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name: string = 'sACHin TenDULkaR';
  amount: number = 7500;
  today: Date = new Date();
  msgCharLeft: string = '';
  msgWordLeft: string = '';
  cNo: number = 20;
  // cNumbers: number[] = Array(10).fill().map((10,i)=>i);
  // this.cNumbers = Array(5).fill().map((x,i)=>i);
  longString: string = 'Ukraine is a country in Eastern Europe. It is the second largest European country after Russia, which it borders to the east and northeast. Ukraine covers approximately 600,000 square kilometres.';
  arr: number[] = [10,30,40,20,70,50];

}
