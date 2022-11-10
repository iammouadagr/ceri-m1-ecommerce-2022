import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavorisService } from 'src/app/Service/favoris/favoris.service';
import { AddAllFavorisAction, DeleteFavorisAction } from 'src/app/store/actions/favoris.actions';
import { Favoris } from 'src/app/store/models/favoris.models';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-favoris-list-page',
  templateUrl: './favoris-list-page.page.html',
  styleUrls: ['./favoris-list-page.page.scss'],
})
export class FavorisListPagePage implements OnInit {

  favorisService : FavorisService; 
  favorisItems$: Observable<Array<Favoris>>; // pour recuperer la liste des favoris 

  userItem$ : Observable<User>;
  username;
  
  constructor(private router: Router,private storeFav: Store<{ favoris: Array<Favoris> }>, private storeUser: Store<{ user: User }>, _serviceFavoris :FavorisService ) { 
    this.favorisService = _serviceFavoris;
    this.favorisItems$ = storeFav.pipe(select('favoris')); // on recupere le service store 
    this.userItem$ = storeUser.pipe(select('user')); // on recupere le service store 
  }

  ngOnInit() {
    this.storeUser.select('user').subscribe((data: User) =>  this.username = data.nom_utilisateur)
    if(this.username!=""){
      this.favorisService.getListFavoris(this.username)
      .subscribe(
        (data:any) => {
          this.storeFav.dispatch(new AddAllFavorisAction(data)); // on ajoute les données 
          console.log("data -- ", data)
        },
        (error:any)=>{
          console.log(" erreur get list album : ", error)
        })
      }
    
  }

  supprimer(nom_album : string, fav : Favoris){
    this.favorisService.supprimerFavoris(this.username, nom_album)
      .subscribe(
        (data:any) => {
          this.storeFav.dispatch(new DeleteFavorisAction(fav)); // on ajoute les données 
          console.log("data -- ", data)
        },
        (error:any)=>{
          console.log(" erreur get list album : ", error)
        })
      
  }

}
