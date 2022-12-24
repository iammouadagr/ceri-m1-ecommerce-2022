import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private _http : HttpClient) { }


  ajouterAuPanier(id_user:string, id_album : number ){
    var fav = {}; 
    let parametres = new HttpParams();
    parametres = parametres.append('nom_utilisateur', id_user);
    parametres = parametres.append('album', id_album);
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/ajouterPanier',{ params: parametres})
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

  getPanierList(id_user:string){
    var fav = {}; 
    let parametres = new HttpParams();
    parametres = parametres.append('nom_utilisateur', id_user);
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/panierUtilisateur',{ params: parametres})
      .subscribe(
        data => {
            console.log(" data -- opanier", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation list panier ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }
  
  supprimerDuPanier(id_user:string){
    var fav = {}; 
    let parametres = new HttpParams();
    parametres = parametres.append('nom_utilisateur', id_user);
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/supprimerPanier',{ params: parametres})
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

  commandeValidee(nom_utilisateur, date, prix, listAlbums){
    var fav = {}; 
    let parametres = new HttpParams();
    parametres = parametres.append('nom_utilisateur', nom_utilisateur);
    parametres = parametres.append('date', date);
    parametres = parametres.append('prix', prix);
    parametres = parametres.append('listAlbums', listAlbums);
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/addPurchase',{ params: parametres})
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

  getTotalPanier(username:string){
    var fav = {}; 
    let parametres = new HttpParams();
    parametres = parametres.append('nom_utilisateur', username);
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/addPurchase',{ params: parametres})
      .subscribe(
        data => {
            console.log(" data -- ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation total panier  ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

}
