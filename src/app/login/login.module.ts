import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {LoginPage} from "./pages/login/login";


@NgModule({
  imports: [SharedModule],
  declarations: [LoginPage],
  providers: [],
  entryComponents: [LoginPage]
})
export class LoginModule {
}
