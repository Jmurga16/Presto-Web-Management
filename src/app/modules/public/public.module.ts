import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';



@NgModule({
  declarations: [
    SignInComponent,
    RecoverPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
