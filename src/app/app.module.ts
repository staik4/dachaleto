import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LandingModule} from './landing/landing.module';
import {RestService} from './services/rest.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
