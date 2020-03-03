import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'priorityName'})
export class PriorityNamePipe implements PipeTransform {
  transform(value: string, exponent?: string): string {
    return value.includes(exponent)  ? "*" + value + "*" : value;
  }
}