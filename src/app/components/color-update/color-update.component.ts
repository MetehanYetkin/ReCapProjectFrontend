import { Component, OnInit } from '@angular/core';
import{Form, FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms" 
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
updateFormGroup:FormGroup
colors:Color[]=[]
currentColor:Color;


  constructor(private formBuilder:FormBuilder,private colorService:ColorService,
    private toastrService:ToastrService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.createColorFormGroup(params["colorId"]);
        this.update();
      }
    })
    this.getColors();
    
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{this.colors=response.data
    
})
 }
  createColorFormGroup(colorId:string){
    var newcolorID=parseInt(colorId)
    this.updateFormGroup=this.formBuilder.group({
      colorId:newcolorID,
      colorName:["",Validators.required]
    })
  }

  update(){
   
    if(this.updateFormGroup.valid){
      let carModel:Color=Object.assign({},this.updateFormGroup.value)
      console.log(carModel)
      this.colorService.update(carModel).subscribe(response=>{
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
