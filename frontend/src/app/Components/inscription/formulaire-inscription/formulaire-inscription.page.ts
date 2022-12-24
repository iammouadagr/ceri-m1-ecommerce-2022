import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UtilisateurService } from 'src/app/Service/utilisateur/utilisateur.service';
import { AddUserAction, GetUserAction, UserActionType } from 'src/app/store/actions/utilisateur.actions';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.page.html',
  styleUrls: ['./formulaire-inscription.page.scss'],
})
export class FormulaireInscriptionPage implements OnInit {

  userName$: Observable<User>; // pour voir si on est co, sinon on stockera l'id de l'user 
  utilisateurService : UtilisateurService;  // pour  faire appelle au service, qui communique avec la bdd 
  username=""; // stock l'username
  dataInfo : User;

  form = {
    id:"",
    nom:"",
    prenom:"",
    mdp:"",
    mdp2:"",
    email:"",
    lieunaissance:"",
    datenaissance:new Date(),
    sexe:""
  }

  auth=true; 
  mdpSame=true; 
  valManquante = false;

  constructor(private router: Router, _utilisateurService : UtilisateurService, private store: Store<{ user: User }>){
    this.utilisateurService = _utilisateurService;
    this.userName$ = store.pipe(select('user')); // on recupere le service store 
  }

  ngOnInit() {
    this.getUserName()
  }

  getUserName(){
    return this.store.select('user').subscribe((data: User) => this.username = data.nom_utilisateur );

  }

  inscription(){
    console.log(" form : ", this.form)
    if(this.form.mdp!=this.form.mdp2) this.mdpSame=false; 
    else if ( this.form.mdp=="" || this.form.nom=="" || this.form.prenom =="" || this.form.id=="" || this.form.mdp2=="" || this.form.email=="" || this.form.lieunaissance=="" || this.form.sexe=="") this.valManquante = true;  
    else{
      this.utilisateurService.createUser(this.form.nom, this.form.prenom, this.form.email, this.form.id, this.form.lieunaissance, this.form.datenaissance,
        this.form.mdp, "user", this.form.sexe)
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
  }

}
