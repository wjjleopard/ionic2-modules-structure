import {NgModule} from '@angular/core';
import {IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {CoreModule} from "./core/core.module";
import {TabsModule} from "./tabs/tabs.module";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    CoreModule, TabsModule, LoginModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: []
})
export class AppModule {
}
