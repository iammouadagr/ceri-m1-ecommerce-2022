import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

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
}
