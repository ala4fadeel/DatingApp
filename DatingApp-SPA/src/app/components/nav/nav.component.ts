import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any = {};
  constructor(public authService:AuthService, private alertify: AlertifyService, 
    private router:Router) { }

  ngOnInit() {
    
  }


  login()
  {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('logged-in successfully');
    }, error => {
      this.alertify.error(error);
    }, ()=>{
      this.router.navigate(['/members']);
    });
    
  }

  loggedIn()
  {
    return this.authService.loggedIn();
  }

  logout()
  {
    localStorage.removeItem('token');
    //console.log('logged out');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);

  }

}
