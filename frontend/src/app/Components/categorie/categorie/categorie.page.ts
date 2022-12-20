import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategorieService } from 'src/app/Service/categorie/categorie.service';
import { Albums } from 'src/app/store/models/albums.model';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  albumItems$: Observable<Array<Albums>>; // pour recuperer la liste des albums 
  userItem$ : Observable<User>;

  albumByGenre = new Array();
  categorieList; 

  username;  // stock l'username pour savoir si on est co ou non 
  
  categorieService : CategorieService;
  numberPanier = 0;

  // categorieSelected = new Array();
  // priceMin=-1;
  // priceMax=-1;

  constructor(private router: Router,_serviceCategorie : CategorieService,  private store: Store<{ album: Array<Albums> }>,   private storeUser: Store<{ user: User }>) { 
    this.categorieService = _serviceCategorie;
    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    this.userItem$ = storeUser.pipe(select('user')); // on recupere le service store 

  }



  ngOnInit() {
    this.categorieService.getListGenreMusical().subscribe(
      (data:any) => {
      //  console.log("data -- ", data)
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

  checkCat(categorie, index){
    this.categorieService.getListAlbumByGenreMusical(categorie).subscribe(
      (data:any) => {
      //  console.log("data -- ", data)
       this.albumByGenre = data; 
      },
      (error:any)=>{
        console.log(" erreur get list categorie : ", error)
      })
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
}
