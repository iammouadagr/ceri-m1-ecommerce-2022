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
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
