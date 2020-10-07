import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'priorityName'})
export class PriorityNamePipe implements PipeTransform {
  transform(value: string, exponent?: string): string {
    return value.includes(exponent) ? '*' + value + '*' : value;
  }
}

// const a = 1 ? 2 : 3;
//
// if (1) {
//   2
// } else {
//   3
// }
