import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
  pure: false //impure pipe
})
export class MySortPipe implements PipeTransform {

  transform(arr: any[]) {
    return arr.sort((a, b) => a - b);
  }

}
