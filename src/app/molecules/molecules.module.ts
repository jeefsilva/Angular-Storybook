import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { WelcomeComponent } from './access/welcome/welcome.component';
import { LoginComponent } from './access/login/login.component';
import { RequestComponent } from './access/request/request.component';
import { LogoComponent } from './general/logo.component';
import { OptionComponent } from './general/option.component';


const components = [
  WelcomeComponent,
  LoginComponent,
  RequestComponent,
  LogoComponent,
  OptionComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ...components
  ],
  declarations: [
    ...components
  ],
  providers: [],
})
export class MoleculesModule {
}
