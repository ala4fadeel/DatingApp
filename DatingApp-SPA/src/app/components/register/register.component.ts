import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  register()
  {
      console.log(this.model);
      this.authService.register(this.model).subscribe(next => {
      console.log('registration completed successfully.');
    }, error => {
      console.log('We encountered an error during registration');
    });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
  
}
