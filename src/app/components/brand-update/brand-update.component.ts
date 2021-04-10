import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

updateFormGroup:FormGroup
brands:Brand[]=[]
currentBrand:Brand;


  constructor(private formBuilder:FormBuilder,private brandService:BrandService,
    private toastrService:ToastrService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.createBrandFormGroup(params["brandId"]);
        this.update();
      }
    })
    this.getBrands();
    
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{this.brands=response.data
    
})
 }
  createBrandFormGroup(brandId:string){
    var newbrandID=parseInt(brandId)
    this.updateFormGroup=this.formBuilder.group({
      brandId:newbrandID,
      brandName:["",Validators.required]
    })
  }

  update(){
   
    if(this.updateFormGroup.valid){
      let carModel:Brand=Object.assign({},this.updateFormGroup.value)
      console.log(carModel)
      this.brandService.update(carModel).subscribe(response=>{
        console.log(carModel)
      this.toastrService.success(response.message,"Başarılı")
     },responseError=>{
   // if(responseError.error.Errors.length>0){
       this.toastrService.error(responseError.error.Errors,"Doğrulama Hatası")
    //}
      
     })
    }
   else{
      this.toastrService.error("Form Eksik")
    }
 }
}
