import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44339/api/";


  getImage():Observable<ListResponseModel<Image>>{
    let newPath=this.apiUrl+"carimages/Getall"
    return this.httpClient.get<ListResponseModel<Image>>(this.apiUrl);

  }
  getImagesByCar(carId:number):Observable<ListResponseModel<Image>>{
    let newPath=this.apiUrl+"cars/GetCarDetailsByImageId?id="+carId;
    return this.httpClient.get<ListResponseModel<Image>>(newPath);
  }
  
  getCarsByColorAndBrandId(colorId:number,brandId:number):Observable<ListResponseModel<Image>>{
    let newPath=this.apiUrl+"cars/GetCarDetailsByColorAndBrandId?colorid="+colorId+"&brandid="+brandId
    return this.httpClient.get<ListResponseModel<Image>>(newPath)

  }
}
