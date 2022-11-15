import { Albums } from '../models/albums.model';
import { AlbumsAction, AlbumsActionType } from '../actions/albums.actions';
//create a dummy initial state
const initialState: Array<Albums> = [
  {
    id_album : 1,
    titre_album : "init",
    artiste :1,
    lien_image : "init" ,
    annee :2022,
    prix : 2,
    nom : "init",
  },
];
export function AlbumsReducer(
  state: Array<Albums> = initialState,
  action: AlbumsAction
) {
  switch (action.type) {
    case AlbumsActionType.ADD_ALBUM:
      return [...state, action.payload];
    case  AlbumsActionType.ADD_ALBUMS:
      return  action.payload;
    default:
      return state;
  }
}