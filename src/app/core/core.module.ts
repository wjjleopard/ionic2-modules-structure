import {NgModule} from '@angular/core';

import {IonicModule} from 'ionic-angular';
import {MyApp} from '../app.component';
import {AppService} from "./app.service";

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  declarations: [],
  providers: [AppService],
  exports: [IonicModule]
})
export class CoreModule {
}
