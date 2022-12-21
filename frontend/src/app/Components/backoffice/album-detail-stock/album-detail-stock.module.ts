import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumDetailStockPageRoutingModule } from './album-detail-stock-routing.module';

import { AlbumDetailStockPage } from './album-detail-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumDetailStockPageRoutingModule
  ],
  declarations: [AlbumDetailStockPage]
})
export class AlbumDetailStockPageModule {}
