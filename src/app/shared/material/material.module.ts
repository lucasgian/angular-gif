import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MzButtonModule, 
  MzSpinnerModule, 
  MzInputModule, 
  MzValidationModule, 
  MzNavbarModule, 
  MzCheckboxModule,
  MzRadioButtonModule 
} from 'ngx-materialize';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzValidationModule,
    MzNavbarModule,
    MzCheckboxModule,
    MzSpinnerModule,
    MzRadioButtonModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzValidationModule,
    MzNavbarModule,
    MzCheckboxModule,
    MzSpinnerModule,
    MzRadioButtonModule
  ]
})
export class MaterialModule { }
