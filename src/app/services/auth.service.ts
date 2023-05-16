import { Users } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';
import * as firebase from 'firebase/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged:BehaviorSubject<boolean>;
constructor(private afAuth : AngularFireAuth,private router:Router) {
  this.isLogged=new BehaviorSubject<boolean>(this.userLoggedState);
}

get userLoggedState():boolean
{
  return (localStorage.getItem('user'))?true:false;
}




  signup(email:any,password:any) {
   return this.afAuth.createUserWithEmailAndPassword(email,password)
  }
  login(email:any,password:any){
    let obj={email:email,password:password}
    localStorage.setItem("user",JSON.stringify(obj))
    this.isLogged.next(true);
    return this.afAuth.signInWithEmailAndPassword(email,password)
    
  }
  logout(){
    localStorage.removeItem('user');
    this.isLogged.next(false);
    this.router.navigate(['/home']);
    return this.afAuth.signOut()
  }
}
