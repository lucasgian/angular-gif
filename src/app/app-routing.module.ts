import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  { path: '', loadChildren: './template/home/home.module#HomeModule' },
  { path: 'upload', loadChildren: './template/upload-gif/upload-gif.module#UploadGifModule' },
  { path: 'create', loadChildren: './template/create-gif/create-gif.module#CreateGifModule' },
  { path: 'your', loadChildren: './template/to-share/to-share.module#ToShareModule' },
  { path: 'your/:link', loadChildren: './template/to-share/to-share.module#ToShareModule' },

  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
