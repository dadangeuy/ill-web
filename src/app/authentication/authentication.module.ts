import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent, LayoutComponent, HomeComponent]
})
export class AuthenticationModule {
}
