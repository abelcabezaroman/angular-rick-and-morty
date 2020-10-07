import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'priorityName'})
export class PriorityNamePipe implements PipeTransform {
  // transform(value: string, arg?: string): string {
  //   return value.includes(arg) ? '*' + value + '*' : value;
  // }

  transform(value: string, ...args: string[]): string {
    return value.includes(args[0]) ? args[1] + value + args[1] : value;
  }
}

// const a = 1 ? 2 : 3;
//
// if (1) {
//   2
// } else {
//   3
// }
