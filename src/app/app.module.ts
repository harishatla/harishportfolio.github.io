import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './portfolio/home/home.component';
import { PortfolioModule } from './portfolio/portfolio.module';
 
 

 

@NgModule({
  declarations: [
    AppComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
