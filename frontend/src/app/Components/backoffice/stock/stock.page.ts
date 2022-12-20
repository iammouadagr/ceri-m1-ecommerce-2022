import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Albums } from 'src/app/store/models/albums.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {


  albumItems$: Observable<Array<Albums>>; // pour recuperer la liste des albums 

  constructor( private store: Store<{ album: Array<Albums> }>, private router: Router) { 
    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    
  }

  ngOnInit() {
  }

  albumID = -1; 
  
  goBack(){
    this.albumID=-1; 
  }
  

  seeDetails(songs: any, i : number){
    // console.log(" --- ", songs)
    // this.albumID = songs.id_album

    let navigationExtras: NavigationExtras = {
      state: {
        album : songs.id_album ,// je donne l'id de l'album 
        index : i
      }
    };
    this.router.navigate(['/album-detail-stock'], navigationExtras); 
    // this.router.navigate(['/album-detail-stock'], navigationExtras); 
  }


}
