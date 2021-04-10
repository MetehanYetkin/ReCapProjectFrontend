import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterCarPipe'
})
export class FilterCarPipePipe implements PipeTransform {

  transform(value: Car[], filterTextCar:string): Car[] {
    filterTextCar=filterTextCar?filterTextCar.toLocaleLowerCase():""
    return filterTextCar?value.filter((b:Car)=>b.brandName.toLocaleLowerCase().indexOf(filterTextCar)!==-1):value;
    
  }

}
