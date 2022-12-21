import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'formulaire-connexion',
    loadChildren: () => import('./Components/formulaire-connexion/formulaire-connexion.module').then( m => m.FormulaireConnexionPageModule)
  },
  {
    path: 'article-details',
    loadChildren: () => import('./Components/article-details/article-details.module').then( m => m.ArticleDetailsPageModule)
  },
  {
    path: 'profil-user',
    loadChildren: () => import('./Components/profil/profil-user/profil-user.module').then( m => m.ProfilUserPageModule)
  },
  {
    path: 'formulaire-inscription',
    loadChildren: () => import('./Components/inscription/formulaire-inscription/formulaire-inscription.module').then( m => m.FormulaireInscriptionPageModule)
  },
  {
    path: 'favoris-list-page',
    loadChildren: () => import('./Components/favoris/favoris-list-page/favoris-list-page.module').then( m => m.FavorisListPagePageModule)
  },
  {
    path: 'categorie',
    loadChildren: () => import('./Components/categorie/categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./Components/panier/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'achat',
    loadChildren: () => import('./Components/achat/achat.module').then( m => m.AchatPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./Components/backoffice/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./Components/backoffice/stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./Components/backoffice/albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./Components/backoffice/commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'album-detail-stock',
    loadChildren: () => import('./Components/backoffice/album-detail-stock/album-detail-stock.module').then( m => m.AlbumDetailStockPageModule)
  },
  {
    path: 'modal-album',
    loadChildren: () => import('./Components/backoffice/modal-album/modal-album.module').then( m => m.ModalAlbumPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
