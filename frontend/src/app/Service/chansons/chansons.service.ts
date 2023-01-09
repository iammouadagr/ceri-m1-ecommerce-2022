import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import { Chansons } from 'src/app/store/models/chansons.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChansonsService {

  constructor(private _http : HttpClient) {
  }

  getListChansonsByAlbum(id_album : number){
   
    var listChanson={}
    return Observable.create((observer: Subscriber<object>) => { 
      this._http.post<any>(`${environment.API_URL}/chansonsAlbum`,{ album: id_album})
      .subscribe(
        data => {
            console.log(" data -- ", data)
            listChanson=data;
        },
        error=>{
          console.log(" erreur recuperation chansons ", error)
        },
        ()=>{
          observer.next(listChanson);
        }
      );
    })
  }

}
