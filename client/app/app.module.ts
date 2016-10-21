import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { routing }   from './app.routes';

import { PurpleNavComponent } from './components/purple-nav.component';
import { RegisterFormComponent } from './components/forms/register-form.component';
import { RegisterUserService } from './components/forms/register-form.service';
import { SignInFormComponent } from './components/forms/sign-in-form.component';
import { SignInUserService } from './components/forms/sign-in-form.service';
import { BlankComponent } from './components/blank.component';
import { LandingComponent } from  './components/landing.component'
@NgModule({
  imports:      [ 
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,routing ],
  declarations: [ AppComponent, PurpleNavComponent, BlankComponent,RegisterFormComponent,SignInFormComponent,LandingComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ RegisterUserService, SignInUserService, { provide: LocationStrategy, useClass: HashLocationStrategy } ]
})
export class AppModule { }