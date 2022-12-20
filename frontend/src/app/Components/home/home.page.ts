import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddAlbumAction, AddAlbumsAction } from 'src/app/store/actions/albums.actions';
import { Albums } from '../../store/models/albums.model';
import { State } from '../../store/models/state.model';
import {AlbumsService} from '../../Service/albums/albums.service'
import { Favoris } from 'src/app/store/models/favoris.models';
import { User } from 'src/app/store/models/utilisateur.model';
import { AddFavorisAction } from 'src/app/store/actions/favoris.actions';
import { FavorisService } from 'src/app/Service/favoris/favoris.service';
import { PanierService } from 'src/app/Service/Panier/panier.service';
import { Panier } from 'src/app/store/models/paniers.model';
import { AddPanierAction, AddPanierActionSpecPos, AddPanierAllAction, DeletePanierAction } from 'src/app/store/actions/paniers.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  serviceAlbum:AlbumsService;  // pour appeler le service 
  serviceFavoris : FavorisService; 
  servicePanier : PanierService; 

  albumItems$: Observable<Array<Albums>>; // pour recuperer la liste des albums 
  favorisItems$: Observable<Array<Favoris>>; // pour recuperer la liste des favoris 
  userItem$ : Observable<User>;
  paniersItem$ :  Observable<Array<Panier>>; 

  username;  // stock l'username pour savoir si on est co ou non 
  favSelected; 
  compteur = 4;
  numberPanier=0;  // nb elements dans le panier 
  valeurBestSeller = 6; // nb de best seller à afficher 
  mouseOn=false; // si mouse on ou pas 
  indexItemMouseOnOff=-1;  // pour eviter que le mouse on agisse sur toutes les cases 



  top = [
    {
      titre: ' Mr. Morale & the Big Steppers ',
      artiste : 'Kendrick Lamar',
      musique:['Die Hard', 'Silent Hill', 'Crown', 'N95'],
      // eslint-disable-next-line max-len
      image:'https://media.pitchfork.com/photos/627c1023d3c744a67a846260/16:9/w_1280,c_limit/Kendrick-Lamar-Mr-Morale-And-The-Big-Steppers.jpg',
      prix: 36
    }
  ];

  // pour tester 
  // album = [
  //   {
  //     titre: 'Will of the People',
  //     artiste : 'MUSE',
  //     musique:['will of the people', 'Compliance', 'Verona', 'Euphoria'],
  //     image:'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1',
  //     prix: 20
  //   },
  //   {
  //     titre: 'Mini World',
  //     artiste : 'Indila',
  //     musique:['Derniere danse', 'Tourner dans le vide', 'Run run', 'S.O.S'],
  //     image:'https://m.media-amazon.com/images/I/711eVQjNxzL._SL1400_.jpg',
  //     prix: 30

  //   },
  //   {
  //     titre: 'Born Pink',
  //     artiste:'Black Pink',
  //     musique:['Shut Down', 'Pink Venom', 'Typa Girl', 'Yeah Yeah Yeah'],
  //     image:'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg',
  //     prix: 40
  //   },
  //   {
  //     titre: 'Map of the Soul: 7',
  //     artiste :'BTS',
  //     musique:['Filter', 'Boy With Luv', 'Black Swan', 'Intro : Persona'],
  //     image:'https://m.media-amazon.com/images/I/61Pj0N8bp2L._SL1469_.jpg',
  //     prix: 35
  //   },
  //   {
  //     titre: 'Future Nostalgia',
  //     artiste :'Dua Lipa',
  //     musique:['Cool', 'Future Nostalgia', 'Levitating', 'Break My Heart'],
  //     image:'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg',
  //     prix: 10
  //   },
  //   {
  //     titre: 'Nonante-Cinq',
  //     artiste :'Angèle',
  //     musique:['Bruxelle je t\'aime','Libre', 'Solo', 'Démons'],
  //     image:'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg',
  //     prix: 25
  //   },
  //   {
  //     titre: '30',
  //     artiste :'Adèle',
  //     musique:['Easy On Me','My Little Love', 'Oh My God', 'Can I Get It'],
  //     image:'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg',
  //     prix: 45
  //   },
  //   {
  //     titre: 'Future Nostalgia',
  //     artiste :'Dua Lipa',
  //     musique:['Cool', 'Future Nostalgia', 'Levitating', 'Break My Heart'],
  //     image:'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg',
  //     prix: 10
  //   },
  //   {
  //     titre: 'Nonante-Cinq',
  //     artiste :'Angèle',
  //     musique:['Bruxelle je t\'aime','Libre', 'Solo', 'Démons'],
  //     image:'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg',
  //     prix: 25
  //   },
  //   {
  //     titre: '30',
  //     artiste :'Adèle',
  //     musique:['Easy On Me','My Little Love', 'Oh My God', 'Can I Get It'],
  //     image:'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg',
  //     prix: 45
  //   },
  //   {
  //     titre: 'Future Nostalgia',
  //     artiste :'Dua Lipa',
  //     musique:['Cool', 'Future Nostalgia', 'Levitating', 'Break My Heart'],
  //     image:'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg',
  //     prix: 10
  //   },
  //   {
  //     titre: 'Nonante-Cinq',
  //     artiste :'Angèle',
  //     musique:['Bruxelle je t\'aime','Libre', 'Solo', 'Démons'],
  //     image:'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg',
  //     prix: 25
  //   },
  //   {
  //     titre: '30',
  //     artiste :'Adèle',
  //     musique:['Easy On Me','My Little Love', 'Oh My God', 'Can I Get It'],
  //     image:'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg',
  //     prix: 45
  //   },
  //   {
  //     titre: 'Will of the People',
  //     artiste : 'MUSE',
  //     musique:['will of the people', 'Compliance', 'Verona', 'Euphoria'],
  //     image:'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1',
  //     prix: 20
  //   },
  //   {
  //     titre: 'Mr. Morale & the Big Steppers',
  //     artiste : 'Kendrick Lamar',
  //     musique:['N95', 'Die Hard', 'Crown', 'Silent Hill'],
  //     image:'https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png',
  //     prix: 30

  //   },
  //   {
  //     titre: 'Born Pink',
  //     artiste:'Black Pink',
  //     musique:['Shut Down', 'Pink Venom', 'Typa Girl', 'Yeah Yeah Yeah'],
  //     image:'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg',
  //     prix: 40
  //   },
  //   {
  //     titre: 'Will of the People',
  //     artiste : 'MUSE',
  //     musique:['will of the people', 'Compliance', 'Verona', 'Euphoria'],
  //     image:'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1',
  //     prix: 20
  //   },
  //   {
  //     titre: 'Mr. Morale & the Big Steppers',
  //     artiste : 'Kendrick Lamar',
  //     musique:['N95', 'Die Hard', 'Crown', 'Silent Hill'],
  //     image:'https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png',
  //     prix: 30

  //   },
  //   {
  //     titre: 'Born Pink',
  //     artiste:'Black Pink',
  //     musique:['Shut Down', 'Pink Venom', 'Typa Girl', 'Yeah Yeah Yeah'],
  //     image:'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg',
  //     prix: 40
  //   },
  // ];

  constructor( _panierService : PanierService,  _favService : FavorisService, private router: Router,  private storePanier: Store<{ panier: Array<Panier> }> ,  private store: Store<{ album: Array<Albums> }>, private storeFav: Store<{ favoris: Array<Favoris> }>,  private storeUser: Store<{ user: User }>, _serviceAlbum:AlbumsService ){

    this.serviceAlbum = _serviceAlbum;  // initialisation du service 
    this.serviceFavoris = _favService; // initialisation du service 
    this.servicePanier = _panierService;   // initialisation du service 

    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    this.favorisItems$ = storeFav.pipe(select('favoris')); // on recupere le service store 
    this.userItem$ = storeUser.pipe(select('user')); // on recupere le service store 
    this.paniersItem$ = storePanier.pipe(select('panier')); // on recupere le service store 
    
  }


  ngOnInit() {
    //this.store.dispatch(new AddAlbumsAction(this.al));
    this.loadData();
  }

  loadData(){
    this.serviceAlbum.getListAlbum().subscribe(
      (data:any) => {
        console.log(" DATA ;;; ", data)
        let alldata = new Array();
        for (let i=0; i< data.length; i++){
            let donnee = {
              id_album : data[i].id_album,
              titre_album : data[i].titre_album,
              artiste :data[i].artiste,
              lien_image : data[i].lien_image ,
              annee :data[i].annee, 
              prix : data[i].prix,
              genre_musical : data[i].genre_musical,
              quantite_max: data[i].quantiteMax, 
              nom : data[i].nom,
            }
            alldata.push(donnee)
        }
       
        this.store.dispatch(new AddAlbumsAction(alldata)); // on ajoute les données 
       // console.log("data -- ", data)
      },
      (error:any)=>{
        console.log(" erreur get list album : ", error)
      })
      this.storeUser.select('user').subscribe((data: User) =>{
        // console.log(" data - ", data)
        this.username = data.nom_utilisateur
      })
  }




  // montrer le prix quand la souris est sur la card
  showPrice(index){
    this.mouseOn=true;
    this.indexItemMouseOnOff=index;
  }
  // cacher le prix quand la souris est hors  card
  hidePrice(){
    this.mouseOn=false;
  }

  // aller à la page de connexion
  navigate(){
    this.router.navigate(['/formulaire-connexion']);
  }


  // pour voir les details d'un albums 
  seeDetails(songs: any){
    let navigationExtras: NavigationExtras = {
      state: {
        album : songs.id_album // je donne l'id de l'album 
      }
    };
    this.router.navigate(['/article-details'], navigationExtras); 
  }

  // pour revenir à l'accueil 
  goAccueil(){
    this.router.navigate(['/home']);
  }

  // pour ajouter au panier 
  ajouterAuPanier(album : Albums){
   
    console.log(" ----  album ------ ", album)
    if( this.username == "") this.router.navigate(['/formulaire-connexion']);
    else{
      // je recup la quantité max 
      let nbQte = 0; 
      let id = -1; 
      let article; 

      // recup
      this.storePanier.select('panier').subscribe((data: Array<Panier>) =>{
            for (let i=0; i<data.length; i++){
                if (data[i].id_album == album.id_album){
                  nbQte = data[i].quantite
                  id = i; 
                  article = data[i];
                }

            }
              });
              
      // je verifie que la quantité max n'est pas dépassé 
      if (nbQte < album.quantite_max){
            
        this.servicePanier.majQtePanierAlbum(this.username, album.id_album, 1, true).subscribe(
          (data:any) => {
            
            
            let donnee=   {
              annee : album.annee, 
              id_album : album.id_album, 
              id_panier : data.id_panier,
              id_utilisateur : data.id_utilisateur,
              lien_image : album.lien_image, 
              prix : album.prix,
              titre_album : album.titre_album,
              quantite : nbQte+1, 
              quantite_max : album.quantite_max
            }
            if (nbQte == 0 && id==-1) 
              this.storePanier.dispatch(new AddPanierAction(donnee)); // on ajoute l'album en favoris 
            else{
              this.storePanier.dispatch(new AddPanierActionSpecPos( donnee, id)); // on ajoute l'album en favoris 
              this.storePanier.dispatch(new DeletePanierAction( article)); // on ajoute l'album en favoris 
            }
          console.log("data -- ", data)
          },
          (error:any)=>{
            console.log(" erreur add panier : ", error)
          })
          this.numberPanier++;
        }
        
    }
   
  }

  // pour voir la liste des favoris de l'user 
  goFavoris(){
    if (this.username=="") this.router.navigate(['/formulaire-connexion']);
    else this.router.navigate(['/favoris-list-page']);
  }

  goPanier(){
    if (this.username=="") this.router.navigate(['/formulaire-connexion']);
    else this.router.navigate(['/panier']);
  }

  // pour ajouter ou enlever un album des favoris
  addOrDeletefavoris(albu : Albums){
    if(this.username=="")  this.router.navigate(['/formulaire-connexion']);
    else{
      let albumSelected;
      this.store.select('album').subscribe((data: Array<Albums>) =>  albumSelected = data.indexOf(albu));
      this.storeFav.select('favoris').subscribe((data: Array<Favoris>) =>  {
        for (let i=0; i<data.length; i++){
          if( data[i].id_album == albumSelected.id_album){
            this.favSelected =  data[i]; 
          }
          else this.favSelected = -1;
        }
      });
      if ( this.favSelected==-1){
        this.serviceFavoris.ajouterFavoris(this.username, albu.id_album).subscribe(
          (data:any) => {
            let fav = {
              id_favoris : data.id_favoris,
              id_utilisateur:data.id_utilisateur,
              id_album : data.id_album, 
              titre_album : albu.titre_album,
              artiste :albu.artiste,
              lien_image : albu.lien_image ,
              annee :albu.annee,
              prix : albu.prix,
              genre_musical : albu.genre_musical,
              quantite_max: albu.quantite_max, 
              nom : albu.nom,

            }
           this.storeFav.dispatch(new AddFavorisAction(fav)); // on ajoute l'album en favoris 
           console.log("data -- ", fav)
          },
          (error:any)=>{
            console.log(" erreur get list album : ", error)
          })
        
      }
    }
  }
}
