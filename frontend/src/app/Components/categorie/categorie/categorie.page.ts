import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategorieService } from 'src/app/Service/categorie/categorie.service';
import { FavorisService } from 'src/app/Service/favoris/favoris.service';
import { AddFavorisAction } from 'src/app/store/actions/favoris.actions';
import { Albums } from 'src/app/store/models/albums.model';
import { Favoris } from 'src/app/store/models/favoris.models';
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

  serviceFavoris : FavorisService; 
  albumByGenre = new Array();
  categorieList; 


  favSelected; 
  username;  // stock l'username pour savoir si on est co ou non 
  
  categorieService : CategorieService;
  
  numberPanier = 0;

  // categorieSelected = new Array();
  // priceMin=-1;
  // priceMax=-1;

  constructor(_favService :FavorisService, private storeFav: Store<{ favoris: Array<Favoris> }> , private router: Router,_serviceCategorie : CategorieService,  private store: Store<{ album: Array<Albums> }>,   private storeUser: Store<{ user: User }>) { 
    this.categorieService = _serviceCategorie;
    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    this.userItem$ = storeUser.pipe(select('user')); // on recupere le service store 
    this.favorisItems$ = storeFav.pipe(select('favoris')); // on recupere le service store 

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
  ajouterAuPanier(){
    this.numberPanier++;
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

  inside(categorie){
    // console.log("categorie ::: ", categorie)
    // if(this.categorieSelected.indexOf(categorie)==-1){
    //   // console.log(' not inside ', this.categorieSelected)
    //   return false; 
    // }
    // else  
    //   return true; 
  }

  prixMin(event){
    // console.log(" event : ", event)
    // this.priceMin = event
    // if ( event == "" || event == " ")
    //   this.priceMin = -1
  }

  prixMax(event){
    // this.priceMax = event
    // if ( event == "" || event == " ")
    //   this.priceMax = -1
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
              console.log("added")
             this.storeFav.dispatch(new AddFavorisAction(fav)); // on ajoute l'album en favoris 
             console.log("data -- ", fav)
            },
            (error:any)=>{
              console.log(" erreur get list album : ", error)
            })
          
        }
      }
    }
}
