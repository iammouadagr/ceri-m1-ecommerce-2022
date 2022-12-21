import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumDetailStockPage } from './album-detail-stock.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumDetailStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumDetailStockPageRoutingModule {}
