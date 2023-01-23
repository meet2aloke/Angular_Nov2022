import { Pipe, PipeTransform } from '@angular/core';
const ord: string[] = ['th','st','nd','rd'];

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(num: number) {
    let v = num % 100;
    return num + (ord[(v-20)%10]||ord[v]||ord[0]);
  }
}
