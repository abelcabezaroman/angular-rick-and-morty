import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name:"priorityGender"})
export class priorityGender implements PipeTransform{
    transform(value:string,exponent?:string):string{
        return "assets/img/"+value+".png"
        //AbelsRickAndMorty/rick-and-morty/src/assets/img/female.png         
    }
}