import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavorisListPagePage } from './favoris-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: FavorisListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavorisListPagePageRoutingModule {}
