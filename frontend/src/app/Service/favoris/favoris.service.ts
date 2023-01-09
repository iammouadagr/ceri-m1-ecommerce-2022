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
   console.log(" id favoris")
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>('http://127.0.0.1:8080/api/v1/favorisUtilisateur',{ nom_utilisateur: id})
      .subscribe(
        data => {
            console.log(" data -- favoris get  ", data)
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
    return Observable.create((observer: Subscriber<any>) => { 
      this._http.post<any>('http://127.0.0.1:8080/api/v1/ajouterFavoris',{ 
        nom_utilisateur: id,
        album: id_album
      
      })
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
    return Observable.create((observer: Subscriber<Boolean>) => { 
      this._http.post<any>('http://127.0.0.1:8080/api/v1/supprimerFavoris',{ 
        nom_utilisateur: id,
        album: nomAl
      })
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
