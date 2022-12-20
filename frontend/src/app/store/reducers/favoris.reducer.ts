import { Favoris } from '../models/favoris.models';
import {  } from '../actions/chansons.actions';
import { FavorisActionType,  AddFavorisAction , AddAllFavorisAction , DeleteFavorisAction, FavorisAction } from '../actions/favoris.actions';
//create a dummy initial state
const initialState: Array<Favoris> =[
  {
    id_favoris : -1,
    id_utilisateur:-1,
    id_album : -1, 
    titre_album : "",
    artiste :-1,
    lien_image : "" ,
    annee :-1,
    prix : -1,
    genre_musical : "",
    quantite_max: -1, 
    nom : "",

  }]
;
export function FavorisReducer(
  state: Array<Favoris>= initialState,
  action: FavorisAction
) {
  switch (action.type) {
    case FavorisActionType.ADD_ALL_FAVORIS:
      return action.payload;
    case  FavorisActionType.ADD_FAVORIS:
      return  [...state, action.payload];
    case  FavorisActionType.DELETE_FAVORIS:
      let newState = [...state]; 
      console.log(" position :: ",state.indexOf(action.payload) )
       newState.splice(newState.indexOf(action.payload), 1);
      console.log(" delete fav article = ", newState);
      return newState;
        
    default:
      return state;
  }
}