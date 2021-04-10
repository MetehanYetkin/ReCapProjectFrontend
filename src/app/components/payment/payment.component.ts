import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
paySuccess:boolean;

  constructor(private paymentService:PaymentService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.pay()
  }
  pay(){
    this.paymentService.pay().subscribe(response=>{
      this.paySuccess=true;
      this.toastrService.success(response.message,"İşlem Başarılı")
    
    },
    error=>{
      this.paySuccess=false;
      this.toastrService.error(error.error.message,"İşlem Geçersiz");
      
    }
    )
  }

}
