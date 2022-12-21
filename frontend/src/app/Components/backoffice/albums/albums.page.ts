import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackofficeService } from 'src/app/Service/backoffice/backoffice.service';
import { Albums } from 'src/app/store/models/albums.model';
import { ModalController } from '@ionic/angular';
import { ModalAlbumPage } from '../modal-album/modal-album.page';
import { AddAlbumAction, DeleteAlbumAction } from 'src/app/store/actions/albums.actions';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  albumItems$: Observable<Array<Albums>>; // pour recuperer la liste des albums 
  serviceBackOff : BackofficeService

  
  constructor( private modalCtrl: ModalController, private store: Store<{ album: Array<Albums> }>, private router: Router, _serviceBackOff : BackofficeService) { 
    this.albumItems$ = store.pipe(select('album')); // on recupere le service store 
    this.serviceBackOff = _serviceBackOff; 
    
  }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalAlbumPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(" data modal :: ---- ", data)
      this.serviceBackOff.ajouterAlbum(data.new.artiste, data.new.lien_image,data.new.titre_album, data.new.annee, data.new.quantite, data.new.genre_musical, data.new.description, data.new.prix, data.new.chansons )
      .subscribe(
        (dataa:any) => {
          console.log("dataaaaa a aa a    ", dataa)
          let alb = {
            id_album : dataa[0].id_album,
            titre_album : dataa[0].titre_album,
            artiste :dataa[0].nom,
            lien_image : dataa[0].lien_image ,
            annee :dataa[0].annee,
            prix : dataa[0].prix,
            genre_musical : dataa[0].genre_musical,
            quantite_max: dataa[0].quantiteMax, 
            nom : dataa[0].nom,
          }
          console.log(" albu to add ", alb)
          this.store.dispatch(new AddAlbumAction(alb))
        },
        (error:any)=>{
          
          console.log(" erreur  ajout album r  : ", error)
        
        })
      // this.message = `Hello, ${data}!`;
    }
  }


  delete(song){
    this.serviceBackOff.removeAlbum(song.id_album)
    .subscribe(
      (dataa:any) => {
        this.store.dispatch(new DeleteAlbumAction(song))
      },
      (error:any)=>{
        
        console.log(" erreur  suppression album  : ", error)
      
      })
  }
}
