import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/Service/categorie/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categorieService : CategorieService;
  
  constructor(_serviceCategorie : CategorieService) { 
    this.categorieService = _serviceCategorie;

  }

  ngOnInit() {
    this.categorieService.getListGenreMusical().subscribe(
      (data:any) => {
       console.log("data -- ", data)
      },
      (error:any)=>{
        console.log(" erreur get list categorie : ", error)
      })
  }

}
