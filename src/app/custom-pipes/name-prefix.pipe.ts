import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePrefix'
})
export class NamePrefixPipe implements PipeTransform {

  transform(name: string, gender: string = '') {
    if(gender === 'F')
      return `Miss. ${name}`;
    else if(gender === 'M')
      return `Mr. ${name}`;
    else
      return name;
  }

}
