import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChansonsService } from 'src/app/Service/chansons/chansons.service';
import { AddChansonsAction } from 'src/app/store/actions/chansons.actions';
import { Albums } from 'src/app/store/models/albums.model';
import { Chansons } from 'src/app/store/models/chansons.model'

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

  chansonsItems$ : Observable<Array<Chansons>>; // recuperer les données dans le store chansons
  albumItems$: Observable<Array<Albums>>; // recuperer les données dans le store  albums
  serviceChanson:ChansonsService;  // pour appeler le service 

  numberPanier=0; // nb elements dans le panier 
   
  id_album; // id de l'album sur lequel on a cliquer 

  // informations de l'album 
  album: Albums = {
    id_album : 1,
    titre_album : "",
    artiste :1,
    lien_image : "" ,
    annee :0,
    prix : 1,
    nom : "",
  };
  musique=[]

  constructor(private route: ActivatedRoute, private router: Router, public store: Store<{ album: Array<Albums> }>, _serviceChanson:ChansonsService, public storeMusique: Store<{ chanson: Array<Chansons> }>) {
    this.chansonsItems$ = storeMusique.pipe(select('chanson'));
    // je recupere l'id de l'album passée en parametre de la route 
    this.serviceChanson = _serviceChanson;
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id_album = this.router.getCurrentNavigation().extras.state.album;
      }
    });
    
    
    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    
  }

  ngOnInit() {
    this.store.select('album').subscribe((data: Array<Albums>) =>{
      for (let i=0; i<data.length; i++){
        if(data[i].id_album == this.id_album){
          this.album = data[i];
          break;
        }
      }
      
    } );
    console.log(" alubim -- ", this.album)
    console.log(" id : ", this.id_album)
    this.serviceChanson.getListChansonsByAlbum(this.id_album).subscribe(
      (data:any) => {
        this.storeMusique.dispatch(new AddChansonsAction(data)); // on ajoute les données 
        //console.log("data -- ", data)
      },
      (error:any)=>{
        console.log(" erreur get list chanson : ", error)
      })
  }


  // pour retourner à l'accueil
  goAccueil(){
    this.router.navigate(['/home']);
  }
  
  // pour ajouter au panier 
  ajouterAuPanier(){
    this.numberPanier++;
  }

}
