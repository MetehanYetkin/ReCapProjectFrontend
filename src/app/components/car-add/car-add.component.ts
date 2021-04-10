import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators, Form} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
carAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService) { }


  ngOnInit(): void {
    this.createCarAddForm();
    this.add();
  }
 
   createCarAddForm(){
     this.carAddForm=this.formBuilder.group({
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      carName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required]


     })
   }

   add(){
     if(this.carAddForm.valid){
       let carModel=Object.assign({},this.carAddForm.value)
       this.carService.addCar(carModel).subscribe(response=>{
       this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
     if(responseError.error.Errors.length>0){
        this.toastrService.error(responseError.error.Errors,"Doğrulama Hatası")
     }
       
      })
     }
    else{
       this.toastrService.error("Form Eksik")
     }
   }




}
