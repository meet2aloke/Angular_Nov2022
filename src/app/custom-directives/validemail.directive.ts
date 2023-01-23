import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidemail]'
})
export class ValidemailDirective {
  constructor() { }
  @HostBinding('style.background-color') bgColor: string = '';
  @HostListener('keyup', ['$event'])
    handleKeyPress(e: {target: {value:string}}){
      let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if(regex.test(e.target.value)){
        this.bgColor = '#dfffdf';
      }
      else{
        this.bgColor = '#ffc8c8'
      }
    }
}
