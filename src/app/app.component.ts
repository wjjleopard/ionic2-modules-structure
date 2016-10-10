import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, Events} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {TabsPage} from './tabs/tabs/tabs';
import {AppService} from "./core/app.service";
import {LoginPage} from "./login/pages/login/login";


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage;

  @ViewChild(Nav) nav;

  constructor(platform: Platform, private appService: AppService, private events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      this.checkAuth();

      this.events.subscribe('loggedIn', () => this.checkAuth());
      this.events.subscribe('loggedOut', () => this.checkAuth());

    });
  }

  checkAuth() {
    if (this.appService.isAuthenticated()) {
      this.nav.setRoot(TabsPage);
    } else {
      this.nav.setRoot(LoginPage)
    }
  }
}
