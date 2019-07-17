import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToShareComponent } from './to-share.component';

import { ToShareRoutingModule } from './to-share-routing.module';
import { BasicModulesImportModule } from '../../core/basic-modules-import/basic-modules-import.module';


@NgModule({
  declarations: [ToShareComponent],
  imports: [
    CommonModule,
    ToShareRoutingModule,
    BasicModulesImportModule
  ]
})
export class ToShareModule { }
