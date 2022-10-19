import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaireConnexionPage } from './formulaire-connexion.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireConnexionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaireConnexionPageRoutingModule {}
