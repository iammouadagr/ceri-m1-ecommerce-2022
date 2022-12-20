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
    titre_album : "init",
    quantite : -1,
    quantite_max : -1

  },
];
export function PanierReducer(
  state: Array<Panier> = initialState,
  action: PanierAction
) {
  switch (action.type) {
    case PanierActionType.ADD_ALL_SPEC_POS:
      
      var newObj = [... state]
      newObj.splice(action.position, 0, action.payload);
      console.log(" --- ajouter panier posi ", state)
      return newObj;
    case PanierActionType.ADD_PANIER:
      return [...state, action.payload];
    case  PanierActionType.ADD_ALL_PANIER:
      return  action.payload;
    case PanierActionType.DELETE_ALL_PANIER:
        return []
    case  PanierActionType.DELETE_PANIER:
    
        let newState = [...state]; 
        console.log(" position :: ",state.indexOf(action.payload) )
         newState.splice(newState.indexOf(action.payload), 1);
        console.log(" delete paneir article = ", newState);
        return newState;
    default:
      return state;
  }
}