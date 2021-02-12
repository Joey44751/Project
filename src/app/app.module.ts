import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AddplaygroundComponent } from './addplayground/addplayground.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    AddplaygroundComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
