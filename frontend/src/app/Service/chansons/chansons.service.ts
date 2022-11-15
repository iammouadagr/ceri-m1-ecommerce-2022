import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import { Chansons } from 'src/app/store/models/chansons.model';

@Injectable({
  providedIn: 'root'
})
export class ChansonsService {
  chansonsItems$: Observable<Array<Chansons>>;
  constructor(private _http : HttpClient, private store: Store<{ chanson: Array<Chansons> }>) {
    this.chansonsItems$ = store.pipe(select('chanson'));
  }

  getListChansonsByAlbum(id_album : number){
   
    var listChanson={}
    let parametres = new HttpParams();
    parametres = parametres.append('album', id_album);
    return Observable.create((observer: Subscriber<object>) => { 
      this._http.get<any>('http://127.0.0.1:8080/api/v1/chansonsAlbum',{ params: parametres})
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
