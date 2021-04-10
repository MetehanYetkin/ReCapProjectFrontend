import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
colorAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private colorService:ColorService) { }

  ngOnInit(): void {
  this.createColorAddForm();
  this.add();
  }
createColorAddForm(){
this.colorAddForm=this.formBuilder.group({
colorName:["",Validators.required]
})
}


add(){
  if(this.colorAddForm.valid){
    let carModel=Object.assign({},this.colorAddForm.value)
   this.colorService.add(carModel).subscribe(response=>{
this.toastrService.success("Başarılı")
   })
  }else{
    this.toastrService.error("Form Eksik")
  }
}


}
