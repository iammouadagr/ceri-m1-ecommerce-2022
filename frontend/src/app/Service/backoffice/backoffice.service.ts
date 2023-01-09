import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  
  constructor(private _http : HttpClient) { }

  saveQuantityChanges(id_album : number, quantite : number){
  //  console.log(" -- -- -  ", id_album)
  //  console.log(" -- -- -  ", quantite)
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/modifierQuantiteAlbum`,{
          id_album : id_album,
          quantite : quantite
      })
      .subscribe(
        data => {
            console.log(" data -- modif ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation liste genre musical ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

  getCommandesEnAttentes(){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/commandesEnAttente`,{
        
      })
      .subscribe(
        data => {
            console.log(" data -- modif ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation commandes en attentes", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

  getCommandesValider(){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/commandesValidee`,{
        
      })
      .subscribe(
        data => {
            console.log(" data -- modif ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation commandes valider ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

  getCommandesExpédier(){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/commandesExpediee`,{
        
      })
      .subscribe(
        data => {
            console.log(" data -- modif ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation commandes expédiée  ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

  getCommandesLivrer(){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/commandesLivree`,{
        
      })
      .subscribe(
        data => {
            console.log(" data -- modif ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation commandes livrée  ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }


  modifierStatus(id_suivi : number, statut : string){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/modifierStatut`,{
        id_suivi : id_suivi, 
        statut : statut
      })
      .subscribe(
        data => {
            console.log(" data -- modif status ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur modif status   ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

  
  removeAlbum(id_album : number){
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/supprimerAlbum`,{
        id_album : id_album, 
      })
      .subscribe(
        data => {
            console.log(" data -- suppression album ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur suppression album   ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

 
  ajouterAlbum(artiste : string, lien_image:string, titre_album:string , annee:number, quantite:number, genre_musical:string, description:string , prix:number , chansons : Array<string>){
   console.log(" appelleeee r")
    
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/ajouterAlbum`,{
        artiste : artiste, 
        description : description, 
        lien_image : lien_image, 
        titre_album : titre_album, 
        annee : annee, 
        quantite : quantite, 
        genre_musical : genre_musical, 
        prix : prix, 
        listeChansons : chansons
      })
      .subscribe(
        data => {
            console.log(" data -- ajout album ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur ajout album   ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }

}
