import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieComponent } from './Movies/movie.component';
import { CopounsComponent } from './copouns/copouns.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CopounsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
