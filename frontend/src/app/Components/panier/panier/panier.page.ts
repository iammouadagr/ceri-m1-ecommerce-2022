import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/Service/Panier/panier.service';
import { Panier } from 'src/app/store/models/paniers.model';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  userName$: Observable<User>; // pour voir si on est co, sinon on stockera l'id de l'user 
  panierItems$: Observable<Array<Panier>>; // pour voir si on est co, sinon on stockera l'id de l'user 
  prixPanier=-1; 
  panierService : PanierService;
  username = ""

  constructor( private storePanier: Store<{ panier: Array<Panier> }>, private router: Router, _panierService:PanierService, private store: Store<{ user: User }>) { 
    this.panierItems$ = storePanier.pipe(select('panier')); // on recupere le service store 
    this.userName$ = store.pipe(select('user')); // on recupere le service store 
    this.panierService = _panierService;
  }

  ngOnInit() {
    this.store.select('user').subscribe((data: User) => this.username=data.nom_utilisateur);


    this.panierService.getTotalPanier(this.username)
    .subscribe(
      (data:any) => {
        console.log(" data ;; panier ;; ", data)
      },
      (error:any)=>{
        console.log(" erreur get panier total : ", error)
      })
  }

  acheter(){
   
    this.router.navigate(['/achat']); 
  }

}
