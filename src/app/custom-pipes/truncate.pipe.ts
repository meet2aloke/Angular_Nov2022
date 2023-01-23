import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, limit = 30, completeWord = true, ellipsis = '...') {
    if (completeWord)
      limit = text.substr(0, limit).lastIndexOf(' ');

    return text.length > limit ? text.substr(0, limit) + ellipsis : text;
  }

}
