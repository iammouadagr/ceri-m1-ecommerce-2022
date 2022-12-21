import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-album',
  templateUrl: './modal-album.page.html',
  styleUrls: ['./modal-album.page.scss'],
})
export class ModalAlbumPage implements OnInit {

  album={
    id_album : -1,
    titre_album : "Titre album",
    artiste :-1,
    lien_image : "https://www.unamur.be/sciences/chimie/rco/membres-images/inconnu/image_preview" ,
    annee :2022,
    prix : -1,
    genre_musical : "genre",
    quantite_max: 0, 
    nom : "nom",
  }

  musique = new Array(); 

  newAlbum={
    artiste:"",
    lien_image:"",
    titre_album:"",
    annee:2022,
    quantite:-1, 
    genre_musical:"",
    description:"",
    prix:-1
  }

  ngOnInit() {
  }


  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({album : this.album, new :  this.newAlbum}, 'confirm');
  }

  changeNomArtiste(event){
    this.newAlbum.artiste = event.target.value;
    this.album.artiste = event.target.value;
    this.album.nom = event.target.value;

  }

  changeTitreAlbum(event){
    this.newAlbum.titre_album = event.target.value;
    this.album.titre_album = event.target.value;

  }

  changeImage(event){
    this.newAlbum.lien_image=event.target.value;
    this.album.lien_image=event.target.value;
  }

  changeAnnee(event){
    this.newAlbum.annee = event.target.value
    this.album.annee = event.target.value
  }

  changePrix(event){
    this.newAlbum.prix = event.target.value;
    this.album.prix = event.target.value;
  }

  changeDescription(event){
    this.newAlbum.description = event.target.value;
  }


  changeGenre(event){
    this.newAlbum.genre_musical = event.target.value;
  }


  changeQuantiteMax(event){
    this.newAlbum.quantite = event.target.value;
    this.album.quantite_max = event.target.value;
  }

  titreMusique =""
  changeAlbumMusique(event){
    this.titreMusique = event.target.value
  }

  ajouterChanson(){
    this.musique.push(this.titreMusique)
    this.titreMusique=" "
  }
}
