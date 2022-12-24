import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AlbumsReducer } from './store/reducers/albums.reducer';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './Components/app/app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import {AlbumsService}  from './Service/albums/albums.service'
import {ChansonsService} from './Service/chansons/chansons.service'
import {UtilisateurService} from './Service/utilisateur/utilisateur.service'
import {FavorisService} from './Service/favoris/favoris.service'

import { ChansonReducer } from './store/reducers/chansons.reducer';
import { UserReducer } from './store/reducers/utilisateur.reducer';
import { FavorisReducer } from './store/reducers/favoris.reducer';
import { PanierReducer } from './store/reducers/paniers.reducer';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      album: AlbumsReducer,
      chanson : ChansonReducer,
      user : UserReducer,
      favoris : FavorisReducer,
      panier : PanierReducer
    }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    AlbumsService,
    ChansonsService,
    UtilisateurService,
    FavorisService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
