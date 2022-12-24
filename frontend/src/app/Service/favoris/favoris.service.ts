import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Albums } from 'src/app/store/models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private _http : HttpClient) { }

  getListFavoris(id : string){
   
    var fav = {}; 
    let parametres = new HttpParams();
    parametres = parametres.append('nom_utilisateur', id);
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/favorisUtilisateur',{ params: parametres})
      .subscribe(
        data => {
            console.log(" data -- ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation favoris ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

  ajouterFavoris(id: string , id_album : number){
    var fav : number; 
    let parametres = new HttpParams();
    parametres = parametres.append('nom_utilisateur', id);
    parametres = parametres.append('album', id_album);
    return Observable.create((observer: Subscriber<any>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/ajouterFavoris',{ params: parametres})
      .subscribe(
        data => {
            console.log(" data -- ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur ajout favoris ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })

  }

  supprimerFavoris(id : string, nomAl : string){
   
    var fav = false; 
    let parametres = new HttpParams();
    parametres = parametres.append('nom_utilisateur', id);
    parametres = parametres.append('album', nomAl);
    return Observable.create((observer: Subscriber<Boolean>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/supprimerFavoris',{ params: parametres})
      .subscribe(
        data => {
            console.log(" data -- ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur suppression favoris ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }
}
