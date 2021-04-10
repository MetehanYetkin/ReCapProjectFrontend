import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Image } from 'src/app/models/image';
import { Rent } from 'src/app/models/rent';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ImageService } from 'src/app/services/image.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentPageService } from 'src/app/services/rent-page.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.css']
})
export class RentPageComponent implements OnInit {
rentalAddForm:FormGroup;
customers:Customer[]
cars:Car[]
rentDate:Date
returnDate:Date
carId:number
customerId:number
rent:Rent
rentable:boolean=false;
images:Image[]=[];
apiUrl:string ="https://localhost:44339/"
constructor(private formBuilder:FormBuilder,
  private rentpageService:RentPageService,
  private toastrService:ToastrService,
  private customerService:CustomerService,
  private imageService:ImageService,
 private carService:CarService,
 private paymentService:PaymentService,
 private router:Router,
 private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomers();this.göster();
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarsByCarId(params["carId"]);
        this.getCarImagesById(params["carId"])

        
      }
    })
    //this.createRentalAddForm();
  }
  setDate(date:any, e:any) {
    date === "start" ? (this.rentDate = e) : (this.returnDate = e);
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data;
    })
        }
        getCarsByCarId(carId:number){
          this.carService.GetCarDetailsById(carId).subscribe(response=>{
          this.cars=response.data;
          
         
          });
          }
          setCustomer(id:number){
            this.customerId=id;
      
          }
          göster(){
            console.log(this.rentDate)
          }
          addRental(){
    
            this.rent={
              carId:this.cars[0].carId,
              customerId:this.customerId,
              rentDate:this.rentDate,
              returnDate:this.returnDate
             
            }
       
        this.rentpageService.add(this.rent).subscribe(response=>{
 
       console.log(response)
       this.toastrService.success("The Rent is Successful")
       return this.router.navigate(['rental/payment'])
        });
      }
      getCarImagesById(carId:number){
        this.imageService.getImagesByCar(carId).subscribe(response=>{this.images=response.data})
      }
      getSliderClassName(index:Number){
        if(index == 0){
          return "carousel-item active";
        } else {
          return "carousel-item";
        }
      }
      

































/* 
  createRentalAddForm(){
this.rentalAddForm=this.formBuilder.group({
 // carName:["",Validators.required],
 // customerFirsName:["",Validators.required],
  //customerLastName:["",Validators.required],
  rentDate:["",Validators.required],
  returnDate:["",Validators.required],
  carId:["",Validators.required],
 customerId:["",Validators.required]
})
  }
  add(){
     if(this.rentalAddForm.valid){
      let rentModel=Object.assign({},this.rentalAddForm.value)
      this.rentpageService.add(rentModel).subscribe(response=>{rentModel=response
        console.log(response)
        this.toastrService.success("İşlem başarılı")
      });
      
     }else{
this.toastrService.error("Form Hatası")
     }
    
    
  } setRentDate() {
    var today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0, 10);
  }

  setReturnDate() {
    var today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0, 10);
  } */

}
