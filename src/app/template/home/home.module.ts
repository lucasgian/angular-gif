import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphyInHighlightComponent } from '../../module/giphy-in-highlight/giphy-in-highlight.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [ HomeComponent, GiphyInHighlightComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
