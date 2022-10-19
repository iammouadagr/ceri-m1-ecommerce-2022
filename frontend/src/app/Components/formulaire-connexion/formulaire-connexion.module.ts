import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulaireConnexionPageRoutingModule } from './formulaire-connexion-routing.module';

import { FormulaireConnexionPage } from './formulaire-connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulaireConnexionPageRoutingModule
  ],
  declarations: [FormulaireConnexionPage]
})
export class FormulaireConnexionPageModule {}
