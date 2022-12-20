import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  
  constructor(private _http : HttpClient) { }

  saveQuantityChanges(id_album : number, quantite : number){
   console.log(" -- -- -  ", id_album)
   console.log(" -- -- -  ", quantite)
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>('http://127.0.0.1:8080/api/v1/modifierQuantiteAlbum',{
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

}
