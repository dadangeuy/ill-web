import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthenticationRoutingModule} from './authentication-routing.module';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent, LayoutComponent]
})
export class AuthenticationModule {
}
