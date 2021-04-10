import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})
export class SelectFilterComponent implements OnInit {
colors:Color[]=[]
brands:Brand[]=[]
currentColorId:number
currentBrandId:number
  constructor(private colorService:ColorService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.getColors();  
    this.getBrands();
  
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{this.colors=response.data

})
 }
 getBrands(){
  this.brandService.getBrands().subscribe(response=>{this.brands=response.data

 })

}
setCurrentColor(colorId:number){
  colorId===this.currentColorId?true:false;
}
setCurrentBrand(brandId:number){
 brandId===this.currentBrandId?true:false;
}






}
