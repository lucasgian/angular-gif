import { NgModule } from '@angular/core';

import { CreateGifRoutingModule } from './create-gif-routing.module';
import { CreateGifComponent } from './create-gif.component'; 

import { BasicModulesImportModule } from '../../core/basic-modules-import/basic-modules-import.module';

@NgModule({
  declarations: [CreateGifComponent],
  imports: [
    CreateGifRoutingModule,
    BasicModulesImportModule
  ]
})
export class CreateGifModule { }
