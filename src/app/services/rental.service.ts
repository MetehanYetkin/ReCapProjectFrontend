import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44339/api/";
  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);

  }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rental/getall";
return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  
}
}
