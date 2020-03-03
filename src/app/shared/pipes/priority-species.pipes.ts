import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name:"prioritySpecies"})
export class prioritySpecies implements PipeTransform{
    transform(value:string,exponent?:string):string{
        if(value == "Alive"){
            return "Vivo"
        }
        else if(value == "Dead"){
            return "Muerto"
        }
        else{
            return "Desconocido"
        }
    }
}