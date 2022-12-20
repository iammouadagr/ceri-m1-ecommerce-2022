import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackofficeService } from 'src/app/Service/backoffice/backoffice.service';
import { ChansonsService } from 'src/app/Service/chansons/chansons.service';
import { AddAlbumSpecPosAction, DeleteAlbumAction } from 'src/app/store/actions/albums.actions';
import { Albums } from 'src/app/store/models/albums.model';
import { Chansons } from 'src/app/store/models/chansons.model';

@Component({
  selector: 'app-album-detail-stock',
  templateUrl: './album-detail-stock.page.html',
  styleUrls: ['./album-detail-stock.page.scss'],
})
export class AlbumDetailStockPage implements OnInit {



  


  chansonsItems$ : Observable<Array<Chansons>>; // recuperer les données dans le store chansons
  albumItems$: Observable<Array<Albums>>; // recuperer les données dans le store  albums
  serviceChanson:ChansonsService;  // pour appeler le service 

  numberPanier=0; // nb elements dans le panier 
  id_album=-1
  
  serviceBackOffice : BackofficeService;


  // informations de l'album 
  album: Albums = {
    id_album : -1,
    titre_album : "",
    artiste :-1,
    lien_image : "" ,
    annee :2022,
    prix : -1,
    genre_musical : "",
    quantite_max: -1, 
    nom : "",
  };
  musique=[]
  index_pos ;

  album_aux: Albums = {
    id_album : -1,
    titre_album : "",
    artiste :-1,
    lien_image : "" ,
    annee :2022,
    prix : -1,
    genre_musical : "",
    quantite_max: -1, 
    nom : "",
  };

  constructor(_serviceBackOffice : BackofficeService,  private route: ActivatedRoute, private router: Router, public store: Store<{ album: Array<Albums> }>, _serviceChanson:ChansonsService, public storeMusique: Store<{ chanson: Array<Chansons> }>) {
    // this.chansonsItems$ = storeMusique.pipe(select('chanson'));
    // je recupere l'id de l'album passée en parametre de la route 
    // this.serviceChanson = _serviceChanson;

    this.serviceBackOffice = _serviceBackOffice; 


    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id_album = this.router.getCurrentNavigation().extras.state.album;
        this.index_pos = this.router.getCurrentNavigation().extras.state.index;
      }
    });
    

    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    
  }

  ngOnInit() {
    // console.log(" --  here --- ", this.id_album)
    alert(this.id_album);
    this.store.select('album').subscribe((data: Array<Albums>) =>{
      for (let i=0; i<data.length; i++){
        if(data[i].id_album == this.id_album){
          this.album = data[i];
          console.log(" album --> ",this.album )
          break;
        }
      }
      
    } );  
    console.log(" alubim -- ", this.album)
    // console.log(" id : ", this.id_album)
    // this.serviceChanson.getListChansonsByAlbum(this.id_album).subscribe(
    //   (data:any) => {
    //     this.storeMusique.dispatch(new AddChansonsAction(data)); // on ajoute les données 
    //     //console.log("data -- ", data)
    //   },
    //   (error:any)=>{
    //     console.log(" erreur get list chanson : ", error)
    //   })
  }


  enregistrer( ){
    console.log("event ", this.album )
    this.serviceBackOffice.saveQuantityChanges(this.id_album, this.album_aux.quantite_max).subscribe(
    (data:any) => {
      if ( data ){
        console.log(" -------- ", this.album)
        console.log(" ------- AUC - ", this.album_aux)
        alert("Modification enregistrée")
        this.store.dispatch(new DeleteAlbumAction( this.album)); // on ajoute l'album en favoris 
        this.store.dispatch(new AddAlbumSpecPosAction( this.album_aux, this.index_pos)); // on ajoute l'album en favoris 

        this.album = this.album_aux
      }
      else{
        alert(" erreur modification")
      }
    },
    (error:any)=>{
      console.log(" erreur get list chanson : ", error)
    })
    
  }

  updateQTE(qt){
    let aux = {
      id_album :  this.album.id_album,
      titre_album :  this.album.titre_album,
      artiste : this.album.artiste,
      lien_image : this.album.lien_image,
      annee : this.album.annee,
      prix : this.album.prix,
      genre_musical :  this.album.genre_musical,
      quantite_max: qt,
      nom : this.album.nom
    };
    this.album_aux = aux
  }
}
