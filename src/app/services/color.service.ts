import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44339/api/";
  
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"colors/GetAll"
return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  add(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"colors/add"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }
  update(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"colors/update"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }
}
