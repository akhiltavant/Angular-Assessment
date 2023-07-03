import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShanuCartComponent } from './MyComponents/shanu-cart/shanu-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShanuCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ShanuCartComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
