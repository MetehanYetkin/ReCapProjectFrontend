import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm:FormGroup
  constructor(private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.createAddBrandForm();
    this.add();
  }
createAddBrandForm(){
this.brandAddForm=this.formBuilder.group({
brandName:["",Validators.required]
})
}
add(){
  if(this.brandAddForm.valid){
    let carModel=Object.assign({},this.brandAddForm.value)
   this.brandService.addBrand(carModel).subscribe(response=>{
this.toastrService.success("Başarılı")
   })
  }else{
    this.toastrService.error("Form Eksik")
  }
}


}
