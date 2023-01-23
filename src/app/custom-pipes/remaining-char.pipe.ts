import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingChar'
})
export class RemainingCharPipe implements PipeTransform {

  transform(msg: string, maxChar: number) {
    return maxChar - msg.length;
  }

}
