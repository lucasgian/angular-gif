import { NgModule } from '@angular/core';

import { UploadGifRoutingModule } from './upload-gif-routing.module';
import { UploadGifComponent } from './upload-gif.component';

import { BasicModulesImportModule } from '../../core/basic-modules-import/basic-modules-import.module';

@NgModule({
  declarations: [UploadGifComponent],
  imports: [
    UploadGifRoutingModule,
    BasicModulesImportModule
  ]
})
export class UploadGifModule { }
