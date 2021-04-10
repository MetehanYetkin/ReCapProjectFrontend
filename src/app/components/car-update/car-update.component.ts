import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UpdateCar } from 'src/app/models/updateCar';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
carUpdateForm:FormGroup;
carId:number;

  constructor(private formBuilder:FormBuilder,
    private toastService:ToastrService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.createCarUpdateForm(params["carId"]);
        this.update();
      }
    })



  }

 createCarUpdateForm(caraId:string){
   var newcarID=parseInt(caraId)
this.carUpdateForm=this.formBuilder.group({
 
  modelYear:["",Validators.required],
  dailyPrice:["",Validators.required],
  description:["",Validators.required],
  unitsInStock:["",Validators.required],
  carName:["",Validators.required],
  brandId:["",Validators.required],
  colorId:["",Validators.required],
  carId:newcarID

})
 }

 update(){
   
  
    if(this.carUpdateForm.valid){
      let carModel:UpdateCar=Object.assign({},this.carUpdateForm.value)
      console.log(carModel)
      this.carService.updateCar(carModel).subscribe(response=>{
        console.log(carModel)
      this.toastService.success(response.message,"Başarılı")
     },responseError=>{
   // if(responseError.error.Errors.length>0){
       this.toastService.error(responseError.error.Errors,"Doğrulama Hatası")
    //}
      
     })
    }
   else{
      this.toastService.error("Form Eksik")
    }
  
 }



}
