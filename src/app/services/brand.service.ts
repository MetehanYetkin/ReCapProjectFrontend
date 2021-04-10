import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl="https://localhost:44339/api/";
  constructor(private HttpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/GetAll"
    return this.HttpClient.get<ListResponseModel<Brand>>(newPath);

  }
  addBrand(brand:Brand):Observable<ResponseModel>{
let newPath=this.apiUrl+"brands/add"
return this.HttpClient.post<ResponseModel>(newPath,brand)
  }
  update(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"brands/update"
    return this.HttpClient.post<ResponseModel>(newPath,brand)
  }
}
