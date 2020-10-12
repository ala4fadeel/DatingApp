
import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../services/user.service';
import {AlertifyService} from '../services/alertify.service';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<User>{
    constructor(private userService: UserService,
                private router:Router, private alertify: AlertifyService)
    {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
       return this.userService.getUser(route.params['id']).pipe(
            catchError( error => {
                this.alertify.error('Error retrieving data.');
                this.router.navigate(['/members']);
                return of(null);
            })
       );
    }
}