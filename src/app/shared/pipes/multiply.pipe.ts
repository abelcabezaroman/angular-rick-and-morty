import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value, arg1, arg2): unknown {
    return value * arg1 * arg2;
  }

}
