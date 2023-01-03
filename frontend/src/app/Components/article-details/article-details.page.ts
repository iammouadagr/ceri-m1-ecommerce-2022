import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChansonsService } from 'src/app/Service/chansons/chansons.service';
import { FavorisService } from 'src/app/Service/favoris/favoris.service';
import { PanierService } from 'src/app/Service/Panier/panier.service';
import { AddChansonsAction } from 'src/app/store/actions/chansons.actions';
import { AddFavorisAction } from 'src/app/store/actions/favoris.actions';
import { AddPanierAction, AddPanierActionSpecPos, DeletePanierAction } from 'src/app/store/actions/paniers.actions';
import { Albums } from 'src/app/store/models/albums.model';
import { Chansons } from 'src/app/store/models/chansons.model'
import { Favoris } from 'src/app/store/models/favoris.models';
import { Panier } from 'src/app/store/models/paniers.model';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

  serviceFavoris : FavorisService; 
  servicePanier : PanierService; 

  favorisItems$: Observable<Array<Favoris>>; // pour recuperer la liste des favoris 
  userItem$ : Observable<User>;
  paniersItem$ :  Observable<Array<Panier>>; 

  chansonsItems$ : Observable<Array<Chansons>>; // recuperer les données dans le store chansons
  albumItems$: Observable<Array<Albums>>; // recuperer les données dans le store  albums
  serviceChanson:ChansonsService;  // pour appeler le service 

  favSelected; 

  
  numberPanier=0; // nb elements dans le panier 
  username;  // stock l'username pour savoir si on est co ou non 

  id_album; // id de l'album sur lequel on a cliquer 

  // informations de l'album 
  album: Albums = {
    id_album : -1,
    titre_album : "",
    artiste :-1,
    lien_image : "" ,
    annee :2022,
    prix : -1,
    genre_musical : "",
    quantite_max: -1, 
    nom : "",
  };
  musique=[]

  constructor( _panierService : PanierService,  _favService : FavorisService,  private storePanier: Store<{ panier: Array<Panier> }> , private storeFav: Store<{ favoris: Array<Favoris> }>,  private storeUser: Store<{ user: User }>,private route: ActivatedRoute, private router: Router, public store: Store<{ album: Array<Albums> }>, _serviceChanson:ChansonsService, public storeMusique: Store<{ chanson: Array<Chansons> }>) {
    this.serviceFavoris = _favService; // initialisation du service 
    this.servicePanier = _panierService;   // initialisation du service 
    this.favorisItems$ = storeFav.pipe(select('favoris')); // on recupere le service store 
    this.userItem$ = storeUser.pipe(select('user')); // on recupere le service store 
    this.paniersItem$ = storePanier.pipe(select('panier')); // on recupere le service store 
    
    
    this.chansonsItems$ = storeMusique.pipe(select('chanson'));
    // je recupere l'id de l'album passée en parametre de la route 
    this.serviceChanson = _serviceChanson;
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id_album = this.router.getCurrentNavigation().extras.state.album;
      }
    });
    
    
    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    this.storeUser.select('user').subscribe((data: User) =>  this.username = data.nom_utilisateur)

  }

  ngOnInit() {
    this.store.select('album').subscribe((data: Array<Albums>) =>{
      for (let i=0; i<data.length; i++){
        if(data[i].id_album == this.id_album){
          this.album = data[i];
          break;
        }
      }
      
    } );
    console.log(" alubim -- ", this.album)
    console.log(" id : ", this.id_album)
    this.serviceChanson.getListChansonsByAlbum(this.id_album).subscribe(
      (data:any) => {
        this.storeMusique.dispatch(new AddChansonsAction(data)); // on ajoute les données 
        //console.log("data -- ", data)
      },
      (error:any)=>{
        console.log(" erreur get list chanson : ", error)
      })
  }


  // pour retourner à l'accueil
  goAccueil(){
    this.router.navigate(['/home']);
  }
  
  // pour ajouter au panier 
  ajouterAuPanier(){
    console.log(" ----  album ------ ", this.album)
    if( this.username == "") this.router.navigate(['/formulaire-connexion']);
    else{
      // je recup la quantité max 
      let nbQte = 0; 
      let id = -1; 
      let article; 

      // recup
      this.storePanier.select('panier').subscribe((data: Array<Panier>) =>{
            for (let i=0; i<data.length; i++){
                if (data[i].id_album == this.album.id_album){
                  nbQte = data[i].quantite
                  id = i; 
                  article = data[i];
                }

            }
              });
              
      // je verifie que la quantité max n'est pas dépassé 
      if (nbQte < this.album.quantite_max){
            
        this.servicePanier.majQtePanierAlbum(this.username, this.album.id_album, 1, true).subscribe(
          (data:any) => {
            
            
            let donnee=   {
              annee : this.album.annee, 
              id_album : this.album.id_album, 
              id_panier : data.id_panier,
              id_utilisateur : data.id_utilisateur,
              lien_image : this.album.lien_image, 
              prix : this.album.prix,
              titre_album : this.album.titre_album,
              quantite : nbQte+1, 
              quantite_max : this.album.quantite_max
            }
            if (nbQte == 0 && id==-1) 
              this.storePanier.dispatch(new AddPanierAction(donnee)); // on ajoute l'album en favoris 
            else{
              this.storePanier.dispatch(new AddPanierActionSpecPos( donnee, id)); // on ajoute l'album en favoris 
              this.storePanier.dispatch(new DeletePanierAction( article)); // on ajoute l'album en favoris 
            }
          console.log("data -- ", data)
          },
          (error:any)=>{
            console.log(" erreur add panier : ", error)
          })
          this.numberPanier++;
        }
        
    }
  }

  // pour ajouter ou enlever un album des favoris
  addOrDeletefavoris(albu : Albums){
    if(this.username=="")  this.router.navigate(['/formulaire-connexion']);
    else{
      let albumSelected;
      this.store.select('album').subscribe((data: Array<Albums>) =>  albumSelected = data.indexOf(albu));
      this.storeFav.select('favoris').subscribe((data: Array<Favoris>) =>  {
        for (let i=0; i<data.length; i++){
          if( data[i].id_album == albumSelected.id_album){
            this.favSelected =  data[i]; 
          }
          else this.favSelected = -1;
        }
        if(data.length==0) this.favSelected = -1; 
      });
      if ( this.favSelected==-1){
        this.serviceFavoris.ajouterFavoris(this.username, albu.id_album).subscribe(
          (data:any) => {
            let fav = {
              id_favoris : data.id_favoris,
              id_utilisateur:data.id_utilisateur,
              id_album : data.id_album, 
              titre_album : albu.titre_album,
              artiste :albu.artiste,
              lien_image : albu.lien_image ,
              annee :albu.annee,
              prix : albu.prix,
              genre_musical : albu.genre_musical,
              quantite_max: albu.quantite_max, 
              nom : albu.nom,

              
            }
           this.storeFav.dispatch(new AddFavorisAction(fav)); // on ajoute l'album en favoris 
           console.log("data -- ", fav)
          },
          (error:any)=>{
            console.log(" erreur get list album : ", error)
          })
        
      }
    }
  }

   // pour voir la liste des favoris de l'user 
   goFavoris(){
    if (this.username=="") this.router.navigate(['/formulaire-connexion']);
    else this.router.navigate(['/favoris-list-page']);
  }

  goPanier(){
    if (this.username=="") this.router.navigate(['/formulaire-connexion']);
    else this.router.navigate(['/panier']);
  }


}
