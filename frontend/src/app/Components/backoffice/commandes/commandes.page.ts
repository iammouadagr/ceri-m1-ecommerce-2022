import { Component, OnInit } from '@angular/core';
import { BackofficeService } from 'src/app/Service/backoffice/backoffice.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.page.html',
  styleUrls: ['./commandes.page.scss'],
})
export class CommandesPage implements OnInit {


  serviceBackOff : BackofficeService

  constructor(_serviceBackOffice :BackofficeService ) {
    this.serviceBackOff = _serviceBackOffice
   }

  commandeEnAttente=new Array();
  commandeValider=new Array();
  commandeExpedier=new Array();
  commandeLivrer=new Array();

  filtre="t"

  /*
    t = traitement 
    e = expédié 
    l = livrée 
    v = validée 

  */
  choices = ["attente de traitement", "validée","expédiée","livrée"  ]

  ngOnInit() {
    this.loadData()
  }


  loadData(){
    this.serviceBackOff.getCommandesEnAttentes()
    .subscribe(
      (data:any) => {
        this.commandeEnAttente = data;
        console.log(" commande en attente ::: ", this.commandeEnAttente)
      },
      (error:any)=>{
        
        console.log(" erreur  connexion utilisateur  : ", error)
       
      })

      this.serviceBackOff.getCommandesValider()
      .subscribe(
        (data:any) => {
          this.commandeValider = data;
          console.log(" commande en valider ::: ", this.commandeValider)
        },
        (error:any)=>{
          
          console.log(" erreur  connexion utilisateur  : ", error)
        
        })

        this.serviceBackOff.getCommandesExpédier()
      .subscribe(
        (data:any) => {
          this.commandeExpedier = data;
          console.log(" commande en expedier ::: ", this.commandeExpedier)
        },
        (error:any)=>{
          
          console.log(" erreur  connexion utilisateur  : ", error)
        
        })

        this.serviceBackOff.getCommandesLivrer()
        .subscribe(
          (data:any) => {
            this.commandeLivrer = data;
            console.log(" commande en livrée ::: ", this.commandeLivrer)
          },
          (error:any)=>{
            
            console.log(" erreur  connexion utilisateur  : ", error)
          
          })

  }


  changeStatut(event, att, ind, mode){
    
    if ( event.target.value != att.statut){
      this.serviceBackOff.modifierStatus(att.id_suivi,event.target.value )
        .subscribe(
          (data:any) => {
            if (data){
                if(event.target.value=="attente de traitement"){
                 
                  if (mode=='v'){
                    this.commandeValider.splice(ind, 1)
                    this.commandeEnAttente.push(att)
                  }
                  if (mode=='e'){
                    this.commandeExpedier.splice(ind, 1)
                    this.commandeEnAttente.push(att)
                  }
                  // if (mode=='l'){
                  //   this.commandeLivrer.splice(ind, 1)
                  //   this.commandeEnAttente.push(att)
                  // }
                }
                if(event.target.value=="validée"){
                  if (mode=='t') {
                    this.commandeEnAttente.splice(ind, 1)
                    this.commandeValider.push(att)
                  }
                  if (mode=='e'){
                    this.commandeExpedier.splice(ind, 1)
                    this.commandeValider.push(att)
                  }
                  // if (mode=='l'){
                  //   this.commandeLivrer.splice(ind, 1)
                  //   this.commandeValider.push(att)
                  // }
                }
                if(event.target.value=="expédiée"){
                  if (mode=='t') {
                    this.commandeEnAttente.splice(ind, 1)
                    this.commandeExpedier.push(att)
                  }
                  if (mode=='v'){
                    this.commandeValider.splice(ind, 1)
                    this.commandeExpedier.push(att)
                  }
                 
                  // if (mode=='l'){
                  //   this.commandeExpedier.splice(ind, 1)
                  //   this.commandeValider.push(att)
                  // }
                }
                if(event.target.value=="livrée"){
                  if (mode=='t') {
                    this.commandeEnAttente.splice(ind, 1)
                    this.commandeLivrer.push(att)
                  }
                  if (mode=='v'){
                    this.commandeValider.splice(ind, 1)
                    this.commandeLivrer.push(att)
                  }
                  if (mode=='e'){
                    this.commandeExpedier.splice(ind, 1)
                    this.commandeLivrer.push(att)
                  }
                  
                }
            }
            console.log(" commande en livrée ::: ", this.commandeLivrer)
          },
          (error:any)=>{
            
            console.log(" erreur  connexion utilisateur  : ", error)
          
          })
    }
    console.log(" event ", event.target.value)
    console.log(" i ", att)

  }


  changeFiltre(e){
    this.filtre=e
  }

}
