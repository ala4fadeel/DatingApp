import {Routes} from '@angular/router';

import {HomeComponent} from '../app/components/home/home.component';
import {MemberListComponent} from '../app/components/members/member-list/member-list.component';
import {MessagesComponent} from '../app/components/messages/messages.component';
import {ListsComponent} from '../app/components/lists/lists.component';
import {AuthGuard} from '../app/guards/auth.guard';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import { MemberListResolver } from './resolvers/member-list.resolver';


//Protect children links
export const appRoutes: Routes = [
{path: '', component :HomeComponent},
{
    path: '', // localhost:4200
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component : MemberListComponent /*, resolve: {users:MemberListResolver}*/},
      {path: 'members/:id', component : MemberDetailComponent /*, resolve:{users:MemberDetailResolver}*/},
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
