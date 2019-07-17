import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MzButtonModule, 
  MzSpinnerModule, 
  MzInputModule, 
  MzValidationModule, 
  MzNavbarModule, 
  MzCheckboxModule,
  MzRadioButtonModule,
  MzModalModule,
  MzIconModule, 
  MzIconMdiModule,
  MzDatepickerModule,
  MzToastModule
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
    MzRadioButtonModule,
    MzModalModule,
    MzIconModule, 
    MzIconMdiModule,
    MzDatepickerModule,
    MzToastModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzValidationModule,
    MzNavbarModule,
    MzCheckboxModule,
    MzSpinnerModule,
    MzRadioButtonModule,
    MzModalModule,
    MzIconModule, 
    MzIconMdiModule,
    MzDatepickerModule,
    MzToastModule
  ]
})
export class MaterialModule { }
