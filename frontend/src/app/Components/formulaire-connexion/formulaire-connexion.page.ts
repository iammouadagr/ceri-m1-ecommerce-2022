import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-connexion',
  templateUrl: './formulaire-connexion.page.html',
  styleUrls: ['./formulaire-connexion.page.scss'],
})
export class FormulaireConnexionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  todo = {}
  logForm() {
    console.log(this.todo)
  }
}
