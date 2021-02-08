import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { IndoorPlaygroundComponent } from './indoor-playground/indoor-playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    IndoorPlaygroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
