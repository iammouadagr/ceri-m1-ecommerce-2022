import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavorisListPagePageRoutingModule } from './favoris-list-page-routing.module';

import { FavorisListPagePage } from './favoris-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavorisListPagePageRoutingModule
  ],
  declarations: [FavorisListPagePage]
})
export class FavorisListPagePageModule {}
