import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityName'
})
export class PriorityNamePipe implements PipeTransform {

  transform(value, priorityName, symbol) {
    if(value.includes(priorityName)){
      return symbol + value + symbol;
    } else {
      return value;
    }
  }

}
