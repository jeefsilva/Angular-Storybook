import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';

const components = [
  ButtonComponent,
  TextComponent
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
export class AtomsModule {
}
