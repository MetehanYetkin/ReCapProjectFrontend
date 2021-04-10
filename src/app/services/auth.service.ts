import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenDetail } from '../models/tokenDetail';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl="https://localhost:44339/api/auth/";
tokenDetail:TokenDetail
  constructor(private httpClient:HttpClient) { }

login(user:LoginModel){
  return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",user);

}

regsiter(user:RegisterModel){
  return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",user)
}



isAuthenticated(){
  if(localStorage.getItem("token")){
  return true;
}
else{
  return false;
}
}
decodeToken(token:string){
  let helper =new JwtHelperService();
let data=helper.decodeToken(token)
this.tokenDetail.email=data.email
}

}
