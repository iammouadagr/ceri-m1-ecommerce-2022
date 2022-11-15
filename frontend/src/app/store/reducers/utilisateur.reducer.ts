import { User } from '../models/utilisateur.model';
import {  } from '../actions/chansons.actions';
import { UserAction, UserActionType } from '../actions/utilisateur.actions';
//create a dummy initial state
const initialState: User =
  {
    nom_utilisateur : "",
  }
;
export function UserReducer(
  state: User= initialState,
  action: UserAction
) {
  switch (action.type) {
    case UserActionType.ADD_USER:
      return action.payload;
    case  UserActionType.DELETE_USER:
      return  initialState;
    default:
      return state;
  }
}