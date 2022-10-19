import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  compteur = 0;

  mouseOn=false;
  indexItemMouseOnOff=-1;
  album = [
    {
      titre: "Will of the People",
      artiste : "MUSE",
      musique:["will of the people", "Compliance", "Verona", "Euphoria"],
      image:"https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1",
      prix: 20
    }, 
    {
      titre: "Mr. Morale & the Big Steppers",
      artiste : "Kendrick Lamar",
      musique:["N95", "Die Hard", "Crown", "Silent Hill"],
      image:"https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png",
      prix: 30

    }, 
    {
      titre: "Born Pink",
      artiste:"Black Pink",
      musique:["Shut Down", "Pink Venom", "Typa Girl", "Yeah Yeah Yeah"],
      image:"https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg",
      prix: 40
    }, 
    {
      titre: "Map of the Soul: 7",
      artiste :"BTS", 
      musique:["Filter", "Boy With Luv", "Black Swan", "Intro : Persona"],
      image:"https://m.media-amazon.com/images/I/61Pj0N8bp2L._SL1469_.jpg",
      prix: 35
    }, 
    {
      titre: "Future Nostalgia",
      artiste :"Dua Lipa", 
      musique:["Cool", "Future Nostalgia", "Levitating", "Break My Heart"],
      image:"https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg",
      prix: 10
    }, 
    {
      titre: "Nonante-Cinq",
      artiste :"Angèle", 
      musique:["Bruxelle je t'aime","Libre", "Solo", "Démons"],
      image:"https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg",
      prix: 25
    }, 
    {
      titre: "30",
      artiste :"Adèle", 
      musique:["Easy On Me","My Little Love", "Oh My God", "Can I Get It"],
      image:"https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg",
      prix: 45
    }, 
    {
      titre: "Future Nostalgia",
      artiste :"Dua Lipa", 
      musique:["Cool", "Future Nostalgia", "Levitating", "Break My Heart"],
      image:"https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg",
      prix: 10
    }, 
    {
      titre: "Nonante-Cinq",
      artiste :"Angèle", 
      musique:["Bruxelle je t'aime","Libre", "Solo", "Démons"],
      image:"https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg",
      prix: 25
    }, 
    {
      titre: "30",
      artiste :"Adèle", 
      musique:["Easy On Me","My Little Love", "Oh My God", "Can I Get It"],
      image:"https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg",
      prix: 45
    }, 
    {
      titre: "Future Nostalgia",
      artiste :"Dua Lipa", 
      musique:["Cool", "Future Nostalgia", "Levitating", "Break My Heart"],
      image:"https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg",
      prix: 10
    }, 
    {
      titre: "Nonante-Cinq",
      artiste :"Angèle", 
      musique:["Bruxelle je t'aime","Libre", "Solo", "Démons"],
      image:"https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg",
      prix: 25
    }, 
    {
      titre: "30",
      artiste :"Adèle", 
      musique:["Easy On Me","My Little Love", "Oh My God", "Can I Get It"],
      image:"https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg",
      prix: 45
    },
    {
      titre: "Will of the People",
      artiste : "MUSE",
      musique:["will of the people", "Compliance", "Verona", "Euphoria"],
      image:"https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1",
      prix: 20
    }, 
    {
      titre: "Mr. Morale & the Big Steppers",
      artiste : "Kendrick Lamar",
      musique:["N95", "Die Hard", "Crown", "Silent Hill"],
      image:"https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png",
      prix: 30

    }, 
    {
      titre: "Born Pink",
      artiste:"Black Pink",
      musique:["Shut Down", "Pink Venom", "Typa Girl", "Yeah Yeah Yeah"],
      image:"https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg",
      prix: 40
    }, 
    {
      titre: "Will of the People",
      artiste : "MUSE",
      musique:["will of the people", "Compliance", "Verona", "Euphoria"],
      image:"https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1",
      prix: 20
    }, 
    {
      titre: "Mr. Morale & the Big Steppers",
      artiste : "Kendrick Lamar",
      musique:["N95", "Die Hard", "Crown", "Silent Hill"],
      image:"https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png",
      prix: 30

    }, 
    {
      titre: "Born Pink",
      artiste:"Black Pink",
      musique:["Shut Down", "Pink Venom", "Typa Girl", "Yeah Yeah Yeah"],
      image:"https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg",
      prix: 40
    }, 
  ]

  constructor(private router: Router){}

  ngOnInit() {
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
    this.router.navigate(['/formulaire-connexion'])
  }
}
