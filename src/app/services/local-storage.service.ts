import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


setItem(value:string){
  return localStorage.setItem("value",JSON.stringify(value))
}
getItem(value:string)
{
  return localStorage.getItem(JSON.stringify(value));

}

}
