import {Component} from '@angular/core';

import {TabsService} from "../../shared/tabs.service";
import {AppService} from "../../../core/app.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  serviceName: string = '';

  constructor(private tabsService: TabsService, private appService: AppService) {
    this.serviceName = this.tabsService.getServiceName();
  }


  logMeOut() {
    this.appService.logout();
  }

}
