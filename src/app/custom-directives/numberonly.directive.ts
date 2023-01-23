import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {
  constructor() { }
  @HostBinding('style.background-color') bgColor: string = '';
  @HostListener('keyup', ['$event'])
    handleKeyPress(e: {target: {value:string}}){
      let regex = new RegExp(/^[0-9]*$/);
      if(regex.test(e.target.value)){
        this.bgColor = '#dfffdf';
      }
      else{
        this.bgColor = '#ffc8c8'
      }
    }
}
