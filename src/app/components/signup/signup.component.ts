import { Users } from './../../interfaces/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  errorMsg :string =''
  constructor(private as:AuthService,private us:UserService,private router:Router){}
  signup(form:any){
    let data:Users=form.value;
    this.as.signup(data.email,data.password)
    .then(result => {
      this.errorMsg = ''
      window.alert("You have been successfully registered!");
      this.us.addNewUser(result.user?.uid,data.name).then(()=>{
        this.router.navigate(['/login']);
      })
    } )
    .catch(err => {
      this.errorMsg = err.message
    })
  }
}
