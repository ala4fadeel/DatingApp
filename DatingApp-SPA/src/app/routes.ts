import {Routes} from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {MemberListComponent} from '../app/components/member-list/member-list.component';
import {MessagesComponent} from '../app/components/messages/messages.component';
import {ListsComponent} from '../app/components/lists/lists.component';
import {AuthGuard} from '../app/guards/auth.guard';


//Protect children links
export const appRoutes: Routes = [
{path: '', component :HomeComponent},
{
    path: '', // localhost:4200
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component : MemberListComponent, canActivate: [AuthGuard]},
      {path: 'messages', component : MessagesComponent},
      {path: 'lists', component : ListsComponent}
    ]
},
{path: '**', redirectTo : '', pathMatch : 'full'}

];


 //Protect each link separately
/*export const appRoutes: Routes = [
{path: 'home', component :HomeComponent},
{path: 'members', component : MemberListComponent, canActivate: [AuthGuard]},
{path: 'messages', component : MessagesComponent},
{path: 'lists', component : ListsComponent},
{path: '**', redirectTo : 'home', pathMatch : 'full'}
];*/
