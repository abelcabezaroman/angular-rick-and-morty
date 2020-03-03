import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name:"priorityStatus"})
export class priorityStatus implements PipeTransform{
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