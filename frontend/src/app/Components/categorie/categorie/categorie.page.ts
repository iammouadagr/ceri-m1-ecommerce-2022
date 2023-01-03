import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumsService } from 'src/app/Service/albums/albums.service';
import { CategorieService } from 'src/app/Service/categorie/categorie.service';
import { FavorisService } from 'src/app/Service/favoris/favoris.service';
import { PanierService } from 'src/app/Service/Panier/panier.service';
import { AddFavorisAction } from 'src/app/store/actions/favoris.actions';
import { AddPanierAction, AddPanierActionSpecPos, DeletePanierAction } from 'src/app/store/actions/paniers.actions';
import { Albums } from 'src/app/store/models/albums.model';
import { Favoris } from 'src/app/store/models/favoris.models';
import { Panier } from 'src/app/store/models/paniers.model';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  favorisItems$: Observable<Array<Favoris>>; // pour recuperer la liste des favoris 
  albumItems$: Observable<Array<Albums>>; // pour recuperer la liste des albums 
  userItem$ : Observable<User>;
  paniersItem$ :  Observable<Array<Panier>>; 



  serviceFavoris : FavorisService; 
  albumByGenre = new Array();
  categorieList; 
  servicePanier : PanierService; 

  searchOn = false; /// pour changer l'affichage si la bar de recherche est actif 
  serviceAlbum : AlbumsService



  favSelected; 
  username;  // stock l'username pour savoir si on est co ou non 
  
  categorieService : CategorieService;
  
  numberPanier = 0;

  // categorieSelected = new Array();
  // priceMin=-1;
  // priceMax=-1;

  constructor(  _serviceAlbum : AlbumsService,    _panierService : PanierService, _favService :FavorisService, private storePanier: Store<{ panier: Array<Panier> }> ,  private storeFav: Store<{ favoris: Array<Favoris> }> , private router: Router,_serviceCategorie : CategorieService,  private store: Store<{ album: Array<Albums> }>,   private storeUser: Store<{ user: User }>) { 
    this.servicePanier = _panierService;   // initialisation du service 
    this.categorieService = _serviceCategorie;
    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    this.userItem$ = storeUser.pipe(select('user')); // on recupere le service store 
    this.favorisItems$ = storeFav.pipe(select('favoris')); // on recupere le service store 
    this.serviceAlbum = _serviceAlbum; 
    this.serviceFavoris = _favService; // initialisation du service 

  }



  ngOnInit() {
    this.categorieService.getListGenreMusical().subscribe(
      (data:any) => {
      //  console.log("data -- genre musique ", data)
       this.categorieList = data; 
      },
      (error:any)=>{
        console.log(" erreur get list categorie : ", error)
      })

      this.storeUser.select('user').subscribe((data: User) => this.username = data.nom_utilisateur)
  }

    // pour voir les details d'un albums 
    seeDetails(songs: any){
      let navigationExtras: NavigationExtras = {
        state: {
          album : songs.id_album // je donne l'id de l'album 
        }
      };
      this.router.navigate(['/article-details'], navigationExtras); 
    }

  // pour ajouter au panier 
  ajouterAuPanier(album : Albums){
    console.log(" ----  album ------ ", album)
    if( this.username == "") this.router.navigate(['/formulaire-connexion']);
    else{
      // je recup la quantité max 
      let nbQte = 0; 
      let id = -1; 
      let article; 

      // recup
      this.storePanier.select('panier').subscribe((data: Array<Panier>) =>{
            for (let i=0; i<data.length; i++){
                if (data[i].id_album == album.id_album){
                  nbQte = data[i].quantite
                  id = i; 
                  article = data[i];
                }

            }
              });
              
      // je verifie que la quantité max n'est pas dépassé 
      if (nbQte < album.quantite_max){
            
        this.servicePanier.majQtePanierAlbum(this.username, album.id_album, 1, true).subscribe(
          (data:any) => {
            
            
            let donnee=   {
              annee : album.annee, 
              id_album : album.id_album, 
              id_panier : data.id_panier,
              id_utilisateur : data.id_utilisateur,
              lien_image : album.lien_image, 
              prix : album.prix,
              titre_album : album.titre_album,
              quantite : nbQte+1, 
              quantite_max : album.quantite_max
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


  goPanier(){
    if (this.username=="") this.router.navigate(['/formulaire-connexion']);
    else this.router.navigate(['/panier']);
  }


  // pour voir la liste des favoris de l'user 
  goFavoris(){
    if (this.username=="") this.router.navigate(['/formulaire-connexion']);
    else this.router.navigate(['/favoris-list-page']);
  }

  categorieAdded=new Array()
  checkCat(categorie, index){
    let indi = this.categorieAdded.indexOf(categorie)
    console.log("   INDIVE ", indi)
    if (indi==-1){
      this.categorieService.getListAlbumByGenreMusical(categorie).subscribe(
        (data:any) => {
         console.log("data -- cat ", data)
         for (let i =0; i< data.length; i++){
          this.albumByGenre.push(data[i]); 

         }
         this.categorieAdded.push(categorie)
        },
        (error:any)=>{
          console.log(" erreur get list categorie : ", error)
        })
    }
    else{
      for(let i=0; i<this.albumByGenre.length; i++){
        if ( this.albumByGenre[i].genre_musical==categorie){
          console.log(" !!!! !!! !  ! !! ! ",this.albumByGenre[i] )
          this.albumByGenre.splice(i,1)
        }
      }
      this.categorieAdded.splice(indi, 1)

      console.log(" cat ad ",this.categorieAdded )
      console.log(" album genre :: ", this.albumByGenre)
    }

    

    
    // if ( this.categorieSelected.indexOf(categorie)==-1)
    //   this.categorieSelected.push(categorie)
    // else {
    //   let indi = this.categorieSelected.indexOf(categorie)
    //   this.categorieSelected.splice(indi, 1)
    // }

    // console.log(" list cvat selec", this.categorieSelected)


  }

  
    // pour ajouter ou enlever un album des favoris
  addOrDeletefavoris(albu : Albums){
    if(this.username=="")  this.router.navigate(['/formulaire-connexion']);
    else{
      
      let albumSelected;
      this.store.select('album').subscribe((data: Array<Albums>) =>  albumSelected = data.indexOf(albu));
      this.storeFav.select('favoris').subscribe((data: Array<Favoris>) =>  {
        console.log(" fav data ", data.length )
        for (let i=0; i<data.length; i++){
          if( data[i].id_album == albumSelected.id_album){
          
            this.favSelected =  data[i]; 
          }
          else this.favSelected = -1;
        }
        if(data.length==0) this.favSelected = -1; 
      });
      alert( this.favSelected)
      if ( this.favSelected== -1){
        
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
