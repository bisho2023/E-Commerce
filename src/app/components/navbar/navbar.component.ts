import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  // isUser:boolean = false;

//   loggedIn = new BehaviorSubject<boolean>(false);
// loggedIn$ = this.loggedIn.asObservable();
  constructor(private as:AuthService ,public afAuth:AngularFireAuth){

  }

  ngOnInit()   {
    // this.as.user.subscribe(user=>{
    //   if (user) this.isUser = true;
    //   else this.isUser = false;
    // })
  }
  logout(){
    this.as.logout().then(()=>{console.log("logout")});
  }
}
