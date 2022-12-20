import { Albums } from '../models/albums.model';
import { AlbumsAction, AlbumsActionType } from '../actions/albums.actions';
//create a dummy initial state
const initialState: Array<Albums> = [
  {
    id_album : -1,
    titre_album : "",
    artiste :-1,
    lien_image : "" ,
    annee :2022,
    prix : -1,
    genre_musical : "",
    quantite_max: -1, 
    nom : "",
  },
];
export function AlbumsReducer(
  state: Array<Albums> = initialState,
  action: AlbumsAction
) {
  switch (action.type) {
    case AlbumsActionType.ADD_ALBUM_SPEC_POS:
      var newObj = [... state]
      newObj.splice(action.position, 0, action.payload);
      console.log(" --- ajouter album posi ", newObj)
      return newObj;
    case AlbumsActionType.ADD_ALBUM:
      return [...state, action.payload];
    case  AlbumsActionType.ADD_ALBUMS:
      return  action.payload;
    case  AlbumsActionType.DELETE_ALBUM:
    
        let newState = [...state]; 
        console.log(" position :: ",state.indexOf(action.payload) )
         newState.splice(newState.indexOf(action.payload), 1);
        console.log(" delete album article = ", newState);
        return newState;
    default:
      return state;
  }
}