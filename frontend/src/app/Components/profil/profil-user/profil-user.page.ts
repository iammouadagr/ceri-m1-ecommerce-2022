import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumsService } from 'src/app/Service/albums/albums.service';
import { FavorisService } from 'src/app/Service/favoris/favoris.service';
import { UtilisateurService } from 'src/app/Service/utilisateur/utilisateur.service';
import { DeleteALLFavorisAction } from 'src/app/store/actions/favoris.actions';
import { DeleteAllPanierAction } from 'src/app/store/actions/paniers.actions';
import { AddUserAction } from 'src/app/store/actions/utilisateur.actions';
import { Favoris } from 'src/app/store/models/favoris.models';
import { Panier } from 'src/app/store/models/paniers.model';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.page.html',
  styleUrls: ['./profil-user.page.scss'],
})
export class ProfilUserPage implements OnInit {

  panierItems$: Observable<Array<Panier>>; // pour voir si on est co, sinon on stockera l'id de l'user 
  userName$: Observable<User>; // pour voir si on est co, sinon on stockera l'id de l'user 
  username; // stocke l'username 
  adresse_email;
  nom;
  prenom;
  lieu_naissance;
  date_naissance;
  sexe;
  status;

  id_utilisateur; 

  serviceUser : UtilisateurService; 
  favorisService : FavorisService; 
  favorisItems$: Observable<Array<Favoris>>; // pour recuperer la liste des favoris 
  serviceAlbum : AlbumsService; 

  constructor(private storePanier: Store<{ panier: Array<Panier> }>,_serviceAlbum : AlbumsService,  private router: Router,_serviceUser : UtilisateurService, private store: Store<{ user: User }>, private storeFav: Store<{ favoris: Array<Favoris> }>, _serviceFavoris :FavorisService) {
    this.serviceUser = _serviceUser;
    this.userName$ = store.pipe(select('user')); // on recupere le service store 
    this.favorisService = _serviceFavoris;
    this.favorisItems$ = storeFav.pipe(select('favoris')); // on recupere le service store 
    this.serviceAlbum = _serviceAlbum; 
    this.panierItems$ = storePanier.pipe(select('panier')); // on recupere le service store 

   }

  ngOnInit() {

    
    this.store.select('user').subscribe((data: User) => this.username=data.nom_utilisateur);
    
    
    this.serviceUser.getUserInformations(this.username)
    .subscribe(
      (data:any) => {
        console.log(" info user ", data)
        this.adresse_email=data[0].adresse_mail;
        this.date_naissance= new Date(data[0].date_naissance);
        this.nom = data[0].nom;
        this.prenom = data[0].prenom;
        this.sexe = data[0].sexe;
        this.status = data[0].statut;
        this.id_utilisateur = data[0].id_utilisateur;
        this.lieu_naissance = data[0].lieu_naissance;

        this.loadCommande()
      },
      (error:any)=>{
        
        console.log(" erreur  connexion utilisateur  : ", error)
       
      })


      
  }

  suivi_commande=new Array()

  loadCommande(){
    this.serviceUser.getCommandeEffectue(this.id_utilisateur)
    .subscribe(
      (data:any) => {
       console.log(" conmmande ", data)
       this.suivi_commande = data; 
      },
      (error:any)=>{
        
        console.log(" erreur  suivi commande  : ", error)
       
      })
  }

  goFavoris(){
    this.router.navigate(['/favoris-list-page']);
  }

  goPanier(){
    // console.log(" okk ")
      if (this.username=="") this.router.navigate(['/formulaire-connexion']);
      else this.router.navigate(['/panier']);
    
  }


  deconnecter(){
    let userN ={
      nom_utilisateur : ""
    }
    this.storePanier.dispatch(new DeleteAllPanierAction())
    this.storeFav.dispatch(new DeleteALLFavorisAction()); // on ajoute les données 
    this.store.dispatch(new AddUserAction(userN)); // on ajoute les données 
    this.router.navigate(['/home']);
  }


  searchOn = false; 
  searchName="";
  tabSearch = []

  recuperationSearch(event : any){
    this.searchOn = true; 
    this.searchName=event; 
    if (event !="")
    {
        this.serviceAlbum.search(event).subscribe(
        (data:any) => {
          this.tabSearch = data; 
          console.log("data -- ", data)
        },
        (error:any)=>{
          console.log(" erreur add panier : ", error)
        })
      }
    console.log(" search ... ", event)
  }

  stopSearch(){
    this.searchOn = false; 
    console.log(" close research ")
  }
}
