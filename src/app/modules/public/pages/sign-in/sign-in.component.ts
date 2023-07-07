import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CgLoadingService } from 'src/app/commons/components/loading/services/loading.service';
import { CgSweetAlertService } from 'src/app/commons/services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: CgSweetAlertService,
    private loadingService: CgLoadingService,
  ) {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  signIn(): void {    
    if (this.form.valid) {
      this.validateCredentials();
    }
  }

  private validateCredentials(): void {
    this.loadingService.show();
  
    //const request: ISignInRequest = this.form.value as ISignInRequest;

    setTimeout(() => {
      this.loadingService.hide();      
      this.goToHome()
    }, 3000);
  }

  goToForgotPassword(): void {
    this.router.navigate(['public/recover-password']);
  }

  goToHome(): void {
    this.router.navigateByUrl('/admin');
  }
}
