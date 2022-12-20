import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/Service/Panier/panier.service';
import { DeleteAllPanierAction } from 'src/app/store/actions/paniers.actions';
import { Panier } from 'src/app/store/models/paniers.model';
import { User } from 'src/app/store/models/utilisateur.model';


@Component({
  selector: 'app-achat',
  templateUrl: './achat.page.html',
  styleUrls: ['./achat.page.scss'],
})
export class AchatPage implements OnInit {

  userName$: Observable<User>; // pour voir si on est co, sinon on stockera l'id de l'user 
  panierItems$: Observable<Array<Panier>>; // pour voir si on est co, sinon on stockera l'id de l'user 
  totalPanier = -1; 
  username = ""
  panierService : PanierService;

  quantity = new Array()
  id_albums = new Array()
  
  constructor( private storePanier: Store<{ panier: Array<Panier> }>, private store: Store<{ user: User }>, private route: ActivatedRoute, private router: Router, _panierService:PanierService) { 
    this.panierItems$ = storePanier.pipe(select('panier')); // on recupere le service store 
    this.userName$ = store.pipe(select('user')); // on recupere le service store 
    this.panierService = _panierService;
    this.store.select('user').subscribe((data: User) => this.username=data.nom_utilisateur);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.totalPanier = this.router.getCurrentNavigation().extras.state.montant;
        this.quantity = this.router.getCurrentNavigation().extras.state.quantity;
        this.id_albums = this.router.getCurrentNavigation().extras.state.id_albums;
        console.log(" -- ok ok ok ko o k ok o ", this.quantity)
      }
    });
  }
  payer = false;

  acheter(){

    console.log(" quantitu - ",this.quantity)
    console.log(" id_albums - ",this.id_albums)
    this.panierService.commandeValidee(this.username, new Date().toLocaleDateString(), this.totalPanier, this.id_albums, this.quantity)
      .subscribe(
        (data:any) => {
        
          console.log(" data commande validé ", data)
          this.payer=true
          this.storePanier.dispatch(new DeleteAllPanierAction()); // on ajoute l'album en favoris        },
        },
        (error:any)=>{
          console.log(" erreur get add  valider  : ", error)
        })


  }
}
