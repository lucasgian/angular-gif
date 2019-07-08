import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MzButtonModule, MzInputModule, MzValidationModule, MzNavbarModule, MzCheckboxModule } from 'ngx-materialize';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzValidationModule,
    MzNavbarModule,
    MzCheckboxModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzValidationModule,
    MzNavbarModule,
    MzCheckboxModule
  ]
})
export class MaterialModule { }
