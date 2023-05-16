
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ClotheComponent } from './components/clothe/clothe.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CartComponent } from './components/cart/cart.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpinComponent } from './components/spin/spin.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,

    LoginComponent,
    SignupComponent,
    ClotheComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    CartComponent,
    SpinComponent,
    ProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AppRoutingModule,
    RouterModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireModule,
    HttpClientModule,

    AngularFireModule.initializeApp({

      apiKey: "AIzaSyAOY1-wUSQaS7NttFno_HWLfestJv607is",

      authDomain: "e-commerce-2f3e0.firebaseapp.com",

      projectId: "e-commerce-2f3e0",

      storageBucket: "e-commerce-2f3e0.appspot.com",

      messagingSenderId: "142845563831",

      appId: "1:142845563831:web:ecc2320819a6b059028e32",

      measurementId: "G-EQKR39YSHV"

    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
