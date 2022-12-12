import { Panier } from '../models/paniers.model';
import { PanierAction , PanierActionType } from '../actions/paniers.actions';
//create a dummy initial state
const initialState: Array<Panier> = [
  {
    annee : -1, 
    id_album : -1, 
    id_panier : -1,
    id_utilisateur : -1,
    lien_image : "init", 
    prix : -1,
    titre_album : "init"
  },
];
export function PanierReducer(
  state: Array<Panier> = initialState,
  action: PanierAction
) {
  switch (action.type) {
    case PanierActionType.ADD_PANIER:
      return [...state, action.payload];
    case  PanierActionType.ADD_ALL_PANIER:
      return  action.payload;
    case  PanierActionType.DELETE_PANIER:
        let newState = [...state]; 
        newState = newState.splice(newState.indexOf(action.payload), 1);
        console.log(" delete paneir article = ", newState);
        return newState;
    default:
      return state;
  }
}