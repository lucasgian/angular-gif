import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: 'login', loadChildren: './login/login.module#LoginModule' },
  //{ path: 'login/:id', loadChildren: './login/login.module#LoginModule' },
  //{ path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  //{ path: 'termo-de-privacidade', loadChildren: './terms-private/terms-private.module#TermsPrivateModule' },
  { path: '', loadChildren: './template/home/home.module#HomeModule' },
  { path: 'upload', loadChildren: './template/upload-gif/upload-gif.module#UploadGifModule' },

  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
