import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAlbumPageRoutingModule } from './modal-album-routing.module';

import { ModalAlbumPage } from './modal-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAlbumPageRoutingModule
  ],
  declarations: [ModalAlbumPage]
})
export class ModalAlbumPageModule {}
