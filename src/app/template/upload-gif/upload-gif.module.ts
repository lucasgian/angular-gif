import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadGifRoutingModule } from './upload-gif-routing.module';
import { UploadGifComponent } from './upload-gif.component';

import { MaterialModule } from '../../shared/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [UploadGifComponent],
  imports: [
    CommonModule,
    UploadGifRoutingModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class UploadGifModule { }
