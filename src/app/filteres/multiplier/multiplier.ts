import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'Multiplier'
})
 
export class MultiperPipe implements PipeTransform {
    transform(value : number, multiply : string) : number {
        let val = value * parseFloat(multiply);
        console.log("transform value ==>", val);
        return val;
    }
} 