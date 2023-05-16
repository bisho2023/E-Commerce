import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { ClotheComponent } from './components/clothe/clothe.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"" ,redirectTo:"home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"clothe",component:ClotheComponent},
  {path:"contact",component:ContactComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"cart",component:CartComponent,canActivate:[AuthGuard]},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
