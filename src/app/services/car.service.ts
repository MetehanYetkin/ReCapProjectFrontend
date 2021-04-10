import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { AddCar } from '../models/addCar';
import { ResponseModel } from '../models/responseModel';
import { UpdateCar } from '../models/updateCar';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  car:Car;
  apiUrl='https://localhost:44339/api/';

  constructor(private HttpClient:HttpClient) { }

   getCars():Observable<ListResponseModel<Car>>{
     let newPath=this.apiUrl+"cars/getcardetails";
return this.HttpClient.get<ListResponseModel<Car>>(newPath);
   
}
getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"cars/GetCarDetailsByBrandId?id="+brandId;
  return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarDetailsByColorId?id="+colorId;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
  GetCarDetailsById(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarDetailsById?id="+id;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
  addCar(carAdd:AddCar):Observable<ResponseModel>{
return this.HttpClient.post<ResponseModel>(this.apiUrl+"cars/add",carAdd);

  }
  updateCar(updateCar:UpdateCar):Observable<ResponseModel>{
  return this.HttpClient.post<ResponseModel>(this.apiUrl+"cars/update",updateCar);

  }
  getCurrentCar() {
    return this.car;
  }
}
