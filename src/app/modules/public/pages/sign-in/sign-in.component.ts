import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  // private validateCredentials(): void {
  //   this.loadingService.show();
  //   const request: ISignInRequest = this.form.value as ISignInRequest;

  //   setTimeout(() => {
  //     this.loadingService.hide();
  //     this.sessionService.saveIdentity(data);
  //     this.getUserInfo(data.access_token);
  //   }, 3000);
  // }

  goToForgtoPassword(): void {
    //this.router.navi
  }
}
