import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
import { ImageComponent } from './components/image/image.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentPageComponent } from './components/rent-page/rent-page.component';
import { RentalComponent } from './components/rental/rental.component';
import { ImageService } from './services/image.service';

const routes: Routes = [{path:"",pathMatch:"full",component:CarComponent},{path:"rental",component:RentalComponent},
{path:"cars/brands/:brandId",component:CarComponent},
{path:"cars/colors/:colorId",component:CarComponent},
{path:"cars/images/:carId",component:ImageComponent},
{path:"cars/filter/:colorId/:brandId",component:ImageComponent},
{path:"cars/rental/:carId",component:RentPageComponent},
{path:"rental/payment",component:PaymentComponent},
{path:"car/add",component:CarAddComponent},
{path:"color/add",component:ColorAddComponent},
{path:"brand/add",component:BrandAddComponent },
{path:"cars/update/:carId",component:CarUpdateComponent},
{path:"colorUpdatePage",component:ColorUpdateComponent},
{path:"colorUpdatePage/colorUpdatePage/:colorId",component:ColorUpdateComponent},
{path:"brandUpdatePage",component:BrandUpdateComponent},
{path:"brandUpdatePage/brandUpdatePage/:brandId",component:BrandUpdateComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
