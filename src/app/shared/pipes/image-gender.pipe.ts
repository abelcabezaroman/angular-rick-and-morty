import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageGender'})
export class ImageGenderPipe implements PipeTransform {
  transform(value: string, exponent?: string): string {
    return 'assets/img/gender/' + value.toLowerCase() + '.png'
    
  }
}
