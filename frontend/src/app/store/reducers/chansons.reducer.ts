import { Chansons } from '../models/chansons.model';
import { ChansonAction, ChansonsActionType } from '../actions/chansons.actions';
//create a dummy initial state
const initialState: Array<Chansons> = [
  {
    id_chanson : 1,
    titre_chanson : "init",
    id_album :-1,
    id_artiste : -1 ,
    genre_musical :"init",
  },
];
export function ChansonReducer(
  state: Array<Chansons> = initialState,
  action: ChansonAction
) {
  switch (action.type) {
    case ChansonsActionType.ADD_CHANSON:
      return [...state, action.payload];
    case  ChansonsActionType.ADD_CHANSONS:
      return  action.payload;
    default:
      return state;
  }
}