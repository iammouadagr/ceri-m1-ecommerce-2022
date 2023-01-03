import { StringDecoder } from "string_decoder";

export interface Albums {
    id_album : number,
    titre_album : string,
    artiste :number,
    lien_image : string ,
    annee :number,
    prix : number,
    genre_musical : string,
    quantite_max: number, 
    nom : string,
  }