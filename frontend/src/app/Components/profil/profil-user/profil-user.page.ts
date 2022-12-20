import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavorisService } from 'src/app/Service/favoris/favoris.service';
import { UtilisateurService } from 'src/app/Service/utilisateur/utilisateur.service';
import { Favoris } from 'src/app/store/models/favoris.models';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.page.html',
  styleUrls: ['./profil-user.page.scss'],
})
export class ProfilUserPage implements OnInit {

  userName$: Observable<User>; // pour voir si on est co, sinon on stockera l'id de l'user 
  username; // stocke l'username 
  adresse_email;
  nom;
  prenom;
  lieu_naissance;
  date_naissance;
  sexe;
  status;

  serviceUser : UtilisateurService; 
  favorisService : FavorisService; 
  favorisItems$: Observable<Array<Favoris>>; // pour recuperer la liste des favoris 


  constructor( _serviceUser : UtilisateurService, private store: Store<{ user: User }>, private storeFav: Store<{ favoris: Array<Favoris> }>, _serviceFavoris :FavorisService) {
    this.serviceUser = _serviceUser;
    this.userName$ = store.pipe(select('user')); // on recupere le service store 
    this.favorisService = _serviceFavoris;
    this.favorisItems$ = storeFav.pipe(select('favoris')); // on recupere le service store 

   
   }

  ngOnInit() {

    
    this.store.select('user').subscribe((data: User) => this.username=data.nom_utilisateur);
    
    this.serviceUser.getUserInformations(this.username)
    .subscribe(
      (data:any) => {
        this.adresse_email=data[0].adresse_mail;
        this.date_naissance= new Date(data[0].date_naissance);
        this.nom = data[0].nom;
        this.prenom = data[0].prenom;
        this.sexe = data[0].sexe;
        this.status = data[0].statut;
        this.lieu_naissance = data[0].lieu_naissance;
      },
      (error:any)=>{
        
        console.log(" erreur  connexion utilisateur  : ", error)
       
      })
  }

}
