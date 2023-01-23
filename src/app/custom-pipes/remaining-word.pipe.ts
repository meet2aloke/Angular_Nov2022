import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingWord'
})
export class RemainingWordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
