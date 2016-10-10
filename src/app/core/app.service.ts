import {Injectable} from '@angular/core';
import {Events} from "ionic-angular";

@Injectable()
export class AppService {

  constructor(private events: Events) {

  }

  isAuthenticated() {
    return this.getToken() !== null;
  }

  login() {
    this.setToken();

    this.events.publish('loggedIn');
  }

  logout() {
    this.deleteToken();

    this.events.publish('loggedOut');
  }

  private getToken() {
    return window.localStorage.getItem('myAppToken');
  }

  private setToken() {
    return window.localStorage.setItem('myAppToken', 'fakeToken');
  }

  private deleteToken() {
    return window.localStorage.removeItem('myAppToken');
  }
}
