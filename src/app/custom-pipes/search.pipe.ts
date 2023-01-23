import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(obj: any[], searchText: string = '', field: string = 'name') {
    if(searchText == '')
      return obj;
    else{
      return obj.filter(o => {
        return JSON.stringify(o).toLowerCase().includes(searchText.toLowerCase());
        // return o[field].toString().toLowerCase().includes(searchText.toLowerCase());
      }); //better use regular expression
    }
  }

}
