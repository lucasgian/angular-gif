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
  MzToastModule,
  MzBadgeModule
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
    MzToastModule,
    MzBadgeModule
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
    MzToastModule,
    MzBadgeModule
  ]
})
export class MaterialModule { }
