import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ContainerLoginComponent } from './pages/container-login/container-login.component';
import { PublicRoutingModule } from './public.routing';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ContainerLoginComponent,
    SignInComponent,
    RecoverPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PublicModule { }
