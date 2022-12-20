import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albums } from '../../store/models/albums.model';
import { Observable, throwError, Subscriber } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  // albumItems$: Observable<Array<Albums>>;
  
  constructor(private _http : HttpClient) {
    // this.albumItems$ = store.pipe(select('album'));
  }

  getListAlbum(){
   
    var listAlbum={}
    return Observable.create((observer: Subscriber<object>) => { 
      this._http.post<any>('http://127.0.0.1:8080/api/v1/albums',{})
      .subscribe(
        data => {
            //console.log(" data -- ", data)
            listAlbum=data;
        },
        error=>{
          console.log(" erreur recuperation albums ", error)
        },
        ()=>{
          observer.next(listAlbum);
        }
      );
    })
  }

}
