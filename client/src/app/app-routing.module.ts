import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './logged-in.guard';

import { HomeComponent } from './components/home/home.component';
import { TravelsComponent } from './components/travels/travels.component';
import { TravelsListComponent } from './components/travels/travels-list/travels-list.component';
import { DetailComponent } from './components/travels/detail/detail.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NewTravelComponent } from './components/travels/new-travel/new-travel.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'viaggi', component: TravelsComponent, children: [
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: 'new-travel', component: NewTravelComponent},
    {path: '', pathMatch: 'full', component: TravelsListComponent}
  ]},
  {path: 'user', component: UserComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'registrazione', component: RegistrationComponent},
    {path: 'profilo', component: ProfileComponent, canActivate: [LoggedInGuard]},
    {path: '', pathMatch: 'full', component: HomeComponent}
  ]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
