import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGifComponent } from './create-gif.component';


const routes: Routes = [
  {
    path: '',
    component: CreateGifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateGifRoutingModule { }
