import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password'
import { DividerModule } from 'primeng/divider'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ToastModule } from 'primeng/toast';

import { FooterComponent } from './components/footer/footer.component';
import { TravelsComponent } from './components/travels/travels.component';
import { HomeComponent } from './components/home/home.component';
import { TravelCardComponent } from './shared/travel-card/travel-card.component';
import { DetailComponent } from './components/travels/detail/detail.component';
import { TravelsListComponent } from './components/travels/travels-list/travels-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { UserComponent } from './components/user/user.component';
import { PaginatorModule } from 'primeng/paginator';
import { NewTravelComponent } from './components/travels/new-travel/new-travel.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    TravelsComponent,
    HomeComponent,
    TravelCardComponent,
    DetailComponent,
    TravelsListComponent,
    RegistrationComponent,
    UserComponent,
    NewTravelComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialExampleModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    PaginatorModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule,
    CKEditorModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
