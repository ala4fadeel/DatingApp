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
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule} from '@angular/router';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


import {HomeComponent} from '../components/home/home.component';
import {RegisterComponent} from '../components/register/register.component';
import {ListsComponent} from '../components/lists/lists.component';
import {MemberListComponent} from '../components/members/member-list/member-list.component';
import {MemberCardComponent} from '../components/members/member-card/member-card.component';
import {MemberDetailComponent} from '../components/members/member-detail/member-detail.component';
import {MessagesComponent} from '../components/messages/messages.component';
import {appRoutes} from '../routes';
import { JwtModule } from '@auth0/angular-jwt';
import {MemberDetailResolver} from '../resolvers/member-detail.resolver';
import {MemberListResolver} from '../resolvers/member-list.resolver';


export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [		AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['cnn.com']
      }
    }) ,


   ],
   exports:[
    BsDropdownModule,
    TabsModule,
    NgxGalleryModule
   ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    MemberDetailResolver,
    MemberListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
