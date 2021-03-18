import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from '../../src/app/app-routing/app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AddplaygroundComponent } from './addplayground/addplayground.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ContactComponent } from './contact/contact.component';
import { PlaygroundService } from './http.service';



@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    AddplaygroundComponent,
    LoginComponent,
    HomeComponent,
    FavoritesComponent,
    ProfileComponent,
    UserpageComponent,
    ContactComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    GoogleMapsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
