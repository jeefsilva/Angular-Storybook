import { MdcAppBarModule, MdcButtonModule, MdcCardModule, MdcElevationModule, MdcIconModule, MdcTextFieldModule, MdcTypographyModule } from '@angular-mdc/web';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const mdcModules = [
  MdcButtonModule,
  MdcCardModule,
  MdcTypographyModule,
  MdcTextFieldModule,
  MdcElevationModule,
  MdcIconModule,
  MdcAppBarModule
];

const modules = [
  CommonModule,
  ...mdcModules
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {
}
