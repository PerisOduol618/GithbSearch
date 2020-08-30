import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProfileRequestServiceService } from "./service/profile-request-service.service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfileRequestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
