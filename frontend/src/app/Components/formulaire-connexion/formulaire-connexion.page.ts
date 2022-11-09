import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddUserAction } from 'src/app/store/actions/utilisateur.actions';
import { User } from 'src/app/store/models/utilisateur.model';
import { UtilisateurService } from '../../Service/utilisateur/utilisateur.service'

@Component({
  selector: 'app-formulaire-connexion',
  templateUrl: './formulaire-connexion.page.html',
  styleUrls: ['./formulaire-connexion.page.scss'],
})
export class FormulaireConnexionPage implements OnInit {

  userName$: Observable<User>; // pour voir si on est co, sinon on stockera l'id de l'user 
  utilisateurService : UtilisateurService;  // pour  faire appelle au service, qui communique avec la bdd 
  username=""; // stock l'username

  constructor(private router: Router, _utilisateurService : UtilisateurService, private store: Store<{ user: User }>){
    this.utilisateurService = _utilisateurService;
    this.userName$ = store.pipe(select('user')); // on recupere le service store 
  }

  ngOnInit() {
    this.store.select('user').subscribe((data: User) => this.username = data.nom_utilisateur );
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
          this.router.navigate(['/home'])
        }
       // console.log("data -- ", data)
      },
      (error:any)=>{
        
        //console.log(" erreur  connexion utilisateur  : ", error)
        this.auth=false;
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
