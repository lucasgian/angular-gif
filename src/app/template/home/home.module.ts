import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphyInHighlightComponent } from '../../module/giphy-in-highlight/giphy-in-highlight.component';

import { BasicModulesImportModule } from '../../core/basic-modules-import/basic-modules-import.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [ HomeComponent, GiphyInHighlightComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BasicModulesImportModule
  ]
})
export class HomeModule { }
