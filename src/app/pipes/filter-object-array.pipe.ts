import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'filterObjectArray',
})
export class FilterObjectArrayPipe implements PipeTransform {
  transform(value: Customer[], key: string, term: string): Customer[] {
    // console.log(value, key, term);
    if (value instanceof Array) {
      return value.filter((item) => item[key].includes(term));
    }
    return value;
  }
}
