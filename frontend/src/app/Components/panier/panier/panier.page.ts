import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/Service/Panier/panier.service';
import { AddPanierAction, AddPanierActionSpecPos, DeletePanierAction } from 'src/app/store/actions/paniers.actions';
import { Panier } from 'src/app/store/models/paniers.model';
import { User } from 'src/app/store/models/utilisateur.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  userName$: Observable<User>; // pour voir si on est co, sinon on stockera l'id de l'user 
  panierItems$: Observable<Array<Panier>>; // pour voir si on est co, sinon on stockera l'id de l'user 
  prixPanier=-1; 
  panierService : PanierService;
  username = ""
  qte = []
  oldArticle = []

  constructor( private storePanier: Store<{ panier: Array<Panier> }>, private router: Router, _panierService:PanierService, private store: Store<{ user: User }>) { 
    this.panierItems$ = storePanier.pipe(select('panier')); // on recupere le service store 
    this.userName$ = store.pipe(select('user')); // on recupere le service store 
    this.panierService = _panierService;
    this.store.select('user').subscribe((data: User) => this.username=data.nom_utilisateur);
    console.log(" ok ok ", this.username  )
  }

  ngOnInit() {
    
    // if ( this.username!=""){
    //   this.panierService.getTotalPanier(this.username)
    //   .subscribe(
    //     (data:any) => {
    //       // console.log(" data ;; panier ;; ", data)
    //       this.prixPanier = data.total; 
    //     },
    //     (error:any)=>{
    //       console.log(" erreur get panier total : ", error)
    //     })
    // }

    this.storePanier.select('panier').subscribe((data: Array<Panier>) =>{
      let total = 0; 
      for (let i=0; i<data.length; i++){
        this.qte.push(data[i].quantite);
      }
      this.prixPanier = total
    });

    
    console.log("qté ; ", this.qte)

    this.totalPanier()

  }

  totalPanier(){
    this.storePanier.select('panier').subscribe((data: Array<Panier>) =>{
      let total = 0; 
      for (let i=0; i<data.length; i++){
        let un = this.qte[i] * data[i].prix;
        total = total+un; 
      }
      this.prixPanier = total
    });

  }

  plusQte(id, article : Panier){
    console.log(" panier -- ", article)
    console.log(" id -- ", id)
    if(this.qte[id]+1 < article.quantite_max ){
      this.qte[id]=this.qte[id]+1;
      let newprice = article.prix * this.qte[id]; 
      console.log(" new prixz : ", newprice)
      let panier = {
        annee : article.annee, 
        id_album : article.id_album, 
        id_panier : article.id_panier,
        id_utilisateur : article.id_utilisateur,
        lien_image : article.lien_image, 
        prix : article.prix,
        titre_album : article.titre_album, 
        quantite :  this.qte[id],
        quantite_max : article.quantite_max

      };
      this.storePanier.dispatch(new AddPanierActionSpecPos( panier, id)); // on ajoute l'album en favoris 
      this.storePanier.dispatch(new DeletePanierAction( article)); // on ajoute l'album en favoris 
      this.totalPanier()
      this.panierService.majQtePanierAlbum(this.username,  article.id_album , this.qte[id] , false  )
        .subscribe(
          (data:any) => {
            console.log(" data ;;  maj qté  ;; ", data)
        
          },
          (error:any)=>{
            console.log(" erreur maj qté : ", error)
          })
    }
    else{
      alert( "quantité maximum atteinte")
    }
  }

  moinsQte(id, article : Panier){
    if (this.qte[id] >=2  ){
      let newprice = article.prix / this.qte[id]; 
      this.qte[id]=this.qte[id]-1;
      let panier = {
        annee : article.annee, 
        id_album : article.id_album, 
        id_panier : article.id_panier,
        id_utilisateur : article.id_utilisateur,
        lien_image : article.lien_image, 
        prix : article.prix,
        titre_album : article.titre_album,
        quantite :  this.qte[id],
        quantite_max : article.quantite_max
      };
      this.storePanier.dispatch(new AddPanierActionSpecPos( panier, id)); // on ajoute l'album en favoris 
      this.storePanier.dispatch(new DeletePanierAction( article)); // on ajoute l'album en favoris 
      this.totalPanier()
      this.panierService.majQtePanierAlbum(this.username, article.id_album, this.qte[id], false  )
      .subscribe(
        (data:any) => {
          console.log(" data ;;  maj qté  ;; ", data)
       
        },
        (error:any)=>{
          console.log(" erreur maj qté : ", error)
        })
    }
    else if ( this.qte[id]==1){
      alert( "suppressin ... ? ")
    }
  }

  acheter(){
    let quant = new Array();
    for (let j = 0; j< this.qte.length; j++){
      quant.push(this.qte[j])
    }
    let albarray = new Array();
    this.storePanier.select('panier').subscribe((data: Array<Panier>) =>{
   
      for (let i=0; i<data.length; i++){
        albarray.push(data[i].id_album);
      }
    });


    let navigationExtras: NavigationExtras = {
      state: {
        montant : this.prixPanier, // je donne le total du panier 
        quantity : quant, // je donne le total du panier 
        id_albums :albarray// je donne le total du panier 
      }
    };
    this.router.navigate(['/achat'], navigationExtras); 
  }


  deleteItemPanier(article){
    this.panierService.supprimerItemFromPanier(this.username, article.titre_album )
      .subscribe(
        (data:any) => {
          console.log(" data ;;  maj qté  ;; ", data)
          this.storePanier.dispatch(new DeletePanierAction( article)); // on ajoute l'album en favoris 

        },
        (error:any)=>{
          console.log(" erreur maj qté : ", error)
        })
  }

}
