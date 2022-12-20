import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage,
    children:[
     { 
        path:'stock',
        children:[
          {
            path :'',
            loadChildren: ()=> import ('../stock/stock.module').then(m=>m.StockPageModule)
          },
         
        ]
      },
      { 
        path:'albums',
        children:[
          {
            path :'',
            loadChildren: ()=> import ('../albums/albums.module').then(m=>m.AlbumsPageModule)
          }
        ]
      },
      { 
        path:'commandes',
        children:[
          {
            path :'',
            loadChildren: ()=> import ('../commandes/commandes.module').then(m=>m.CommandesPageModule)
          }
        ]
      },
     
       // {
          //   path :'album-detail-stock',
          //   loadChildren: ()=> import ('../album-detail-stock/album-detail-stock.module').then(m=>m.AlbumDetailStockPageModule)
          // },
    ]
  },
  // {
  //   path:'',
  //   redirectTo:'/stock',
  //   pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
