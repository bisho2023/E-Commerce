import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  errorMsg :string =''
  constructor(private as:AuthService,private router:Router){}
  login(form:any){
    let data=form.value
    this.as.login(data.email,data.password)
    .then(
      result =>{
        this.errorMsg = '',
        window.alert("You have been successfully signed in!");
      this.router.navigate(['/'])
         }   )
    .catch(err=>this.errorMsg = err.message)
  }


}

