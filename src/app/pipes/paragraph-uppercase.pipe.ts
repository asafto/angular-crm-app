import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphUpperCase'
})
export class ParagraphUpperCasePipe implements PipeTransform {

  // transform(value: string): string {
  // //option 1
  //   let trimmed = value.trim();
  //   return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  // // option2
  //   let valueArr = value.split('');
  //   return `${valueArr[0].toUpperCase()}${valueArr.splice(1, valueArr.length - 1).join('')}`;
  // }
  //Option 3 for the pipe logic
  transform(value: string): string {
    return value
      .split('.')
      .map((item) =>
        item.trim().charAt(0).toUpperCase() +
        item.trim().slice(1).toLowerCase()
      )
      .join('. ') + '.';
  }

}
