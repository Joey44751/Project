import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from '../../src/app/app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AddplaygroundComponent } from './addplayground/addplayground.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    AddplaygroundComponent,
    LoginComponent,
    HomeComponent,
    FavoritesComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
