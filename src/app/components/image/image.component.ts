;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
images:Image[]=[];
cars:Car[]=[];
apiUrl:string ="https://localhost:44339/"
  constructor(private imageService:ImageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['carId']){
        this.getCarImagesById(params['carId']) 
      }
      else if(params["colorId"]&&params["brandId"]){
        this.getCarImagesColorAndBrandId(params["colorId"],params["brandId"])
        
      } else{

      }
  })
}

  getCarImagesById(carId:number){
    this.imageService.getImagesByCar(carId).subscribe(response=>{this.images=response.data})
  }
  getCarImagesColorAndBrandId(colorId:number,brandId:number){
    this.imageService.getCarsByColorAndBrandId(colorId,brandId).subscribe(response=>{this.images=response.data})
  }

  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
}
