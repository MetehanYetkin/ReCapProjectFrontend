import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService) { }
    
loginForm:FormGroup;
mymail:string
  ngOnInit(): void {
    this.createLoginForm(),
    this.login()
  }




  createLoginForm(){
this.loginForm=this.formBuilder.group({
  email:["",Validators.required],   
  password:["",Validators.required]
})
  } 

 
  login(){
    if(this.loginForm.valid){
      
       localStorage.setItem("userValue", JSON.stringify(this.loginForm.value)      )
      console.log(this.loginForm.value)
      let loginModel=Object.assign({},this.loginForm.value)
  
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        console.log(response)
        localStorage.setItem("token",response.data.token)
      let tokensMail=  this.authService.decodeToken(response.data.token)
      console.log(tokensMail)
        
      },responseError=>{
        this.toastrService.error(responseError.error)
        
      });
     
    }

}
}