import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

import { PublicComponent } from './public.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ContainerLoginComponent } from './pages/container-login/container-login.component';
import { CgSweetAlertModule } from 'src/app/commons/services/sweet-alert/sweet-alert.module';
import { CgLoadingModule } from 'src/app/commons/components/loading/loading.module';

const ANGULAR_MODULES = [
  PublicRoutingModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const PRIMENG_MODULES = [
  CardModule,
  InputTextModule,
  ButtonModule,
  PasswordModule
];

const COMPONENTS = [
  PublicComponent,
  SignInComponent,
  RecoverPasswordComponent,
  ChangePasswordComponent,
  ContainerLoginComponent
];

const LIB_MODULES = [
  CgSweetAlertModule,
  CgLoadingModule
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...PRIMENG_MODULES,
    ...LIB_MODULES
  ]
})
export class PublicModule { }
