import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService:AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  register()
  {
      console.log(this.model);
      this.authService.register(this.model).subscribe(next => {
      //console.log('registration completed successfully.');
      this.alertify.success('registration completed successfully.');
    }, error => {
      //console.log(error);
      this.alertify.error(error);
    });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
    //console.log('cancelled');
    this.alertify.warning('cancelled');
  }
  
}
