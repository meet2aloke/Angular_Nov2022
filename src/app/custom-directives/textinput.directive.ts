import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextinput]'
})
export class TextinputDirective {
  constructor() { }
  @HostBinding('style.background-color') bgColor: string = '';
  @HostListener('keyup', ['$event'])
    handleKeyPress(e: {target: {value:string}}){
      let regex = new RegExp(/^[0-9]*$/);
      if(e.target.value.length>1){
        this.bgColor = '#dfffdf';
      }
      else{
        this.bgColor = '#ffc8c8'
      }
    }
}
