import {NgModule} from '@angular/core';
import {TabsPage} from "./tabs/tabs";
import {SharedModule} from "../shared/shared.module";
import {AboutPage} from "./pages/about/about";
import {ContactPage} from "./pages/contact/contact";
import {HomePage} from "./pages/home/home";
import {TabsService} from "./shared/tabs.service";


@NgModule({
  imports: [SharedModule],
  declarations: [TabsPage, AboutPage, ContactPage, HomePage],
  providers: [TabsService],
  entryComponents: [TabsPage, AboutPage, ContactPage, HomePage]
})
export class TabsModule {
}
