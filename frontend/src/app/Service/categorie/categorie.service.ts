import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  
  constructor(private _http : HttpClient) { }

  getListGenreMusical(){
   
    var fav = {}; 
    return Observable.create((observer: Subscriber<Object>) => { 
      this._http.post<any>(`${environment.API_URL}/genreMusical`,{})
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
      this._http.post<any>(`${environment.API_URL}/albumGenre`,{ genre: genre})
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
