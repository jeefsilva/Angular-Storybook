import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { CardComponent } from './access/card/card.component';
import { TopmenuComponent } from './general/topmenu/topmenu.component';



const components = [
  CardComponent,
  TopmenuComponent
];

@NgModule({
  imports: [
    SharedModule,
    MoleculesModule
  ],
  exports: [
    ...components
  ],
  declarations: [
    ...components
  ],
  providers: [],
})
export class OrganismsModule {
}
