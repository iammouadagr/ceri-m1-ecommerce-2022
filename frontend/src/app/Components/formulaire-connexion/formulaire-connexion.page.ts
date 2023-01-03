import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavorisService } from 'src/app/Service/favoris/favoris.service';
import { PanierService } from 'src/app/Service/Panier/panier.service';
import { AddAllFavorisAction } from 'src/app/store/actions/favoris.actions';
import { AddPanierAllAction } from 'src/app/store/actions/paniers.actions';
import { AddUserAction } from 'src/app/store/actions/utilisateur.actions';
import { Favoris } from 'src/app/store/models/favoris.models';
import { Panier } from 'src/app/store/models/paniers.model';
import { User } from 'src/app/store/models/utilisateur.model';
import { UtilisateurService } from '../../Service/utilisateur/utilisateur.service'

@Component({
  selector: 'app-formulaire-connexion',
  templateUrl: './formulaire-connexion.page.html',
  styleUrls: ['./formulaire-connexion.page.scss'],
})
export class FormulaireConnexionPage implements OnInit {

  userName$: Observable<User>; // pour voir si on est co, sinon on stockera l'id de l'user 
  panierItems$: Observable<Array<Panier>>; // pour voir si on est co, sinon on stockera l'id de l'user 
  
  favorisService : FavorisService; 
  favorisItems$: Observable<Array<Favoris>>; // pour recuperer la liste des favoris 

  
  utilisateurService : UtilisateurService;  // pour  faire appelle au service, qui communique avec la bdd 
  username=""; // stock l'username


  servicePanier : PanierService; // permet d'acceder aux fonctions du service

  constructor(_servicePanier : PanierService, private router: Router,_serviceFavoris :FavorisService,  _utilisateurService : UtilisateurService, private store: Store<{ user: User }>, private storeFav: Store<{ favoris: Array<Favoris> }>,  private storePanier: Store<{ panier: Array<Panier> }>){
    this.utilisateurService = _utilisateurService;
    this.servicePanier = _servicePanier;
    this.userName$ = store.pipe(select('user')); // on recupere le service store 
    this.panierItems$ = storePanier.pipe(select('panier')); // on recupere le service store 
    this.favorisService = _serviceFavoris;
    this.favorisItems$ = storeFav.pipe(select('favoris')); // on recupere le service store 

  }

  ngOnInit() {
    this.store.select('user').subscribe((data: User) => this.username = data.nom_utilisateur );
    // if(this.username!=""){
    //   this.favorisService.getListFavoris(this.username)
    //   .subscribe(
    //     (data:any) => {
    //       console.log(" -. zezljf ljzrfnzlejbfzlejfbzjb")
    //       this.storeFav.dispatch(new AddAllFavorisAction(data)); // on ajoute les données 
    //       console.log("data -- favoris  ", data)
    //     },
    //     (error:any)=>{
    //       console.log(" erreur get list album : ", error)
    //     })
    //   }
    
  }

  form = {
    id:"",
    mdp:""
  }
  auth=true;

  connexion(){
    //console.log(" form ", this.form)
    this.utilisateurService.connexion(this.form.id, this.form.mdp )
    .subscribe(
      (data:any) => {
        if( data == false )  this.auth=false;
        else{
          this.auth=true;
          let userN ={
            nom_utilisateur : this.form.id
          }
          this.store.dispatch(new AddUserAction(userN)); // on ajoute les données 
          this.loadDataCart();
          this.router.navigate(['/home'])
          
        }
       // console.log("data -- ", data)
      },
      (error:any)=>{
        
        //console.log(" erreur  connexion utilisateur  : ", error)
        this.auth=false;
      })
  }

  loadDataCart(){
    this.servicePanier.getPanierList(this.username).subscribe(
      (data:any) => {
        console.log(" panier recup ", data)
        let panierArticle = new Array<Panier>();
        for (let i=0; i< data.length; i++){
          let donnee=   {
            annee : data[i].annee, 
            id_album : data[i].id_album, 
            id_panier : data[i].id_panier,
            id_utilisateur : data[i].id_utilisateur,
            lien_image : data[i].lien_image, 
            prix : data[i].prix,
            titre_album : data[i].titre_album,
            quantite :  data[i].quantite, 
            quantite_max : data[i].quantiteMax
          }
          panierArticle.push(donnee)

        }
        // console.log(panierArticle)
       this.storePanier.dispatch(new AddPanierAllAction(panierArticle)); // on ajoute l'album en favoris 
       console.log("data -- panier  ", panierArticle)
      },
      (error:any)=>{
        console.log(" erreur get all panier  panier : ", error)
      })

      this.favorisService.getListFavoris(this.username)
      .subscribe(
        (data:any) => {
          console.log(" -. zezljf ljzrfnzlejbfzlejfbzjb ", data)
          this.storeFav.dispatch(new AddAllFavorisAction(data)); // on ajoute les données 
          console.log("data -- favoris  ", data)
        },
        (error:any)=>{
          console.log(" erreur get list album : ", error)
        })
      
  }

  ionViewDidEnter(){
    if(this.username!=""){
      this.router.navigate(['/profil-user'])
    }
    
  }

  goInscription(){
    this.router.navigate(['/formulaire-inscription'])
  }
  
}
