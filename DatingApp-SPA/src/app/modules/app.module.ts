import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from '../components/app/app.component';
import { NavComponent } from '../components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ErrorInterceptorProvider } from '../services/error.interceptor';
import { AlertifyService } from '../services/alertify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule} from '@angular/router';


import {HomeComponent} from '../components/home/home.component';
import {RegisterComponent} from '../components/register/register.component';
import {ListsComponent} from '../components/lists/lists.component';
import {MemberListComponent} from '../components/member-list/member-list.component';
import {MessagesComponent} from '../components/messages/messages.component';
import {appRoutes} from '../routes';


@NgModule({
  declarations: [		AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
   ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
