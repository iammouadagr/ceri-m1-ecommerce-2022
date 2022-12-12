import { Component, OnInit } from '@angular/core';
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
  categorieList; 

  username;  // stock l'username pour savoir si on est co ou non 
  
  categorieService : CategorieService;
  numberPanier = 0;
  
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


  // pour voir la liste des favoris de l'user 
  goFavoris(){
    if (this.username=="") this.router.navigate(['/formulaire-connexion']);
    else this.router.navigate(['/favoris-list-page']);
  }
}
