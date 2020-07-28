import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { INIT_COORDS } from './tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: INIT_COORDS, useValue: {lat: -23.305064, long: -51.154187} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
