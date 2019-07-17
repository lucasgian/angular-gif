import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToShareComponent } from './to-share.component';

const routes: Routes = [
  {
    path: '',
    component: ToShareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToShareRoutingModule { }
