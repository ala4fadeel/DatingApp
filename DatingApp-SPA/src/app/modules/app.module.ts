import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from '../components/app/app.component';
import { NavComponent } from '../components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ErrorInterceptorProvider } from '../services/error.interceptor';

import {HomeComponent} from '../components/home/home.component';
import {RegisterComponent} from '../components/register/register.component';


@NgModule({
  declarations: [		AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
