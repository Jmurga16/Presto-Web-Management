import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container-login',
  templateUrl: './container-login.component.html',
  styleUrls: ['./container-login.component.scss'],

})
export class ContainerLoginComponent {

  canChange: boolean = false;
  canRecover: boolean = false;

  changeBox(option: number) {
    let height = "";
    switch (option) {
      case 0: //Sign-in
        this.canRecover = false;
        this.canChange = false
        height = "26rem"
        break;
      case 1://Recover-Password
        this.canRecover = true;
        height = "20rem"
        break;
      case 2://Change-Password
        this.canRecover = false;
        this.canChange = true;
        height = "32rem"
        break;
      default:
        break;
    }


    const box = document.getElementById('form-main');
    if (box != null) {
      box.style.height = height;
    }
  }

}


