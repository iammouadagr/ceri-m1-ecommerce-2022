import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Panier } from 'src/app/store/models/paniers.model';


@Component({
  selector: 'app-achat',
  templateUrl: './achat.page.html',
  styleUrls: ['./achat.page.scss'],
})
export class AchatPage implements OnInit {

  panierItems$: Observable<Array<Panier>>; // pour voir si on est co, sinon on stockera l'id de l'user 
  totalPanier = -1; 
  constructor( private storePanier: Store<{ panier: Array<Panier> }>, private router: Router) { 
    this.panierItems$ = storePanier.pipe(select('panier')); // on recupere le service store 
  }

  ngOnInit() {
   
  }
  payer = false;

  acheter(){
    this.payer = true
  }
}
