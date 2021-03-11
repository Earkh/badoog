import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },  {
    path: 'profile',
    loadChildren: () => import('./settings/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./settings/filter/filter.module').then( m => m.FilterPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
