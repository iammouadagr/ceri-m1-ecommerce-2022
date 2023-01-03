import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private _http : HttpClient) { }

  connexion(id : string, mdp : string){
   
    var correct = false; 
    
    return Observable.create((observer: Subscriber<Boolean>) => { 
      this._http.post<any>(`${environment.API_URL}/connexionUtilisateur`,
      { 
        nom_utilisateur: id,
        mot_de_passe :  mdp
      })
      .subscribe(
        data => {
           
            correct=data;
        },
        error=>{
          console.log(" erreur recuperation connexion ", error)
        },
        ()=>{
          observer.next(correct);
        }
      );
    })
  }

  getUserInformations(id : string){
   
    var infos ={}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/informationUtilisateur`,{ nom_utilisateur: id})
      .subscribe(
        data => {
           
            infos=data;
        },
        error=>{
          console.log(" erreur recuperation infos user ", error)
        },
        ()=>{
          observer.next(infos);
        }
      );
    })
  }

  createUser(nom : string, prenom : string, email : string, id : string, lieudenaissance : string, datedeNaissance : Date,
     mdp : string, status : string, sexe:string
    ){
   
    var correct = false; 
    let parametres = new HttpParams();
    parametres = parametres.append('prenom', prenom);
    parametres = parametres.append('nom', nom);
    parametres = parametres.append('nom_utilisateur', id);
    parametres = parametres.append('lieu_naissance', lieudenaissance);
    parametres = parametres.append('adresse_mail', email);
    parametres = parametres.append('date_naissance', datedeNaissance.toLocaleString());
    parametres = parametres.append('mot_de_passe', mdp);
    parametres = parametres.append('sexe', sexe);
    parametres = parametres.append('statut', status);
    return Observable.create((observer: Subscriber<Boolean>) => { 
      this._http.post<any>(`${environment.API_URL}/inscrireUtilisateur`,{ 
        prenom: prenom,
        nom: nom,
        nom_utilisateur: id,
        lieu_naissance: lieudenaissance,
        adresse_mail: email,
        date_naissance: datedeNaissance.toLocaleString(),
        mot_de_passe: mdp,
        sexe: sexe,
        statut: status
      })
      .subscribe(
        data => {
           
            correct=data;
        },
        error=>{
          console.log(" erreur inscription utilisateur  ", error)
        },
        ()=>{
          observer.next(correct);
        }
      );
    })
  }


  getCommandeEffectue(id_utilisateur : string){
    var infos ={}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/commandesUtilisateur`,{ id_utilisateur: id_utilisateur})
      .subscribe(
        data => {
    
            infos=data;
        },
        error=>{
          console.log(" erreur recuperation infos user ", error)
        },
        ()=>{
          observer.next(infos);
        }
      );
    })
  }
  
}
