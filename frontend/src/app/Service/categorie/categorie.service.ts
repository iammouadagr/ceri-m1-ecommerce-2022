import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  
  constructor(private _http : HttpClient) { }

  getListGenreMusical(){
   
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>('http://127.0.0.1:8080/api/v1/genreMusical',{})
      .subscribe(
        data => {
            console.log(" data -- ", data)
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

  getListAlbumByGenreMusical(genre : string){
   
    var fav = {}; 
    
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>('http://127.0.0.1:8080/api/v1/albumGenre',{ genre: genre})
      .subscribe(
        data => {
            console.log(" data -- ", data)
            fav=data;
        },
        error=>{
          console.log(" erreur recuperation liste album genre musical ", error)
        },
        ()=>{
          observer.next(fav);
        }
      );
    })
  }
}
