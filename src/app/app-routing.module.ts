import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';


const routes: Routes = [
  {
    path:"",
    component:HomeBannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
