import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name:"priorityName"})
export class priorityName implements PipeTransform{
    transform(value:string,exponent?:string): string{
        return value.includes(exponent) ? '*'+value+'*':value;
    }
}
