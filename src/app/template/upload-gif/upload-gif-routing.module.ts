import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadGifComponent } from './upload-gif.component';

const routes: Routes = [
  {
    path: '',
    component: UploadGifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadGifRoutingModule { }
