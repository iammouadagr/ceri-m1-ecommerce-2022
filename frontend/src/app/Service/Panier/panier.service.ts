import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private _http : HttpClient) { }


  ajouterAuPanier(id_user:string, id_album : number ){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/ajouterPanier`,{ 
        nom_utilisateur: id_user,
        album: id_album
      })
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
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/panierUtilisateur`,{ nom_utilisateur: id_user})
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
  
  // supprimerDuPanier(id_user:string){
  //   var fav = {}; 
  //   let parametres = new HttpParams();
  //   parametres = parametres.append('nom_utilisateur', id_user);
  //   return Observable.create((observer: Subscriber<Object>) => { 
  //     this._http.get<any>('http://127.0.0.1:8080/api/v1/supprimerPanier',{ params: parametres})
  //     .subscribe(
  //       data => {
  //           console.log(" data -- ", data)
  //           fav=data;
  //       },
  //       error=>{
  //         console.log(" erreur recuperation favoris ", error)
  //       },
  //       ()=>{
  //         observer.next(fav);
  //       }
  //     );
  //   })
  // }

  commandeValidee(nom_utilisateur, date, prix, listAlbums, quantit){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/ajouterCommandes`,{ 
        nom_utilisateur: nom_utilisateur,
        date: date,
        prix: prix,
        listAlbums: listAlbums,
        listeAlbumQuantity: quantit
      })
      .subscribe(
        data => {
            console.log(" data -- ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur envoie commande ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

  getTotalPanier(nom_utilisateur:string){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/totalPanier`,{ nom_utilisateur: nom_utilisateur})
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

  majQtePanierAlbum(nom_utilisateur : string, id_album : number , quantite : number, action : boolean){
    console.log(" nom_utilisateur ",nom_utilisateur )
    console.log(" album ",id_album )
    console.log(" quantite ",quantite )
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/ajouterPanier`,{ 
        nom_utilisateur: nom_utilisateur,
        album: id_album,
        quantite: quantite,
        boolVar: action
      })
      .subscribe(
        data => {
            console.log(" data -- maj panier ", data)
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


  supprimerItemFromPanier(nom_utilisateur:string, id_album : number){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/supprimerPanier`,{ 
        nom_utilisateur: nom_utilisateur,
        album: id_album
      })
      .subscribe(
        data => {
            fav=data;
        },
        error=>{
          console.log(" erreur suppression items panier  ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })

  }

}
