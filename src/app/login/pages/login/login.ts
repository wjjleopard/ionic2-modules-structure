import {Component} from '@angular/core';
import {AppService} from "../../../core/app.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  constructor(private appService: AppService) {

  }

  logMeIn() {
    this.appService.login();
  }

}
