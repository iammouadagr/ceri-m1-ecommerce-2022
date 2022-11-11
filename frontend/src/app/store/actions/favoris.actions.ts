import { Action } from '@ngrx/store';
import { Favoris } from '../models/favoris.models';

export enum FavorisActionType {
    ADD_FAVORIS = '[FAVORIS] Add favoris ',
    ADD_ALL_FAVORIS = '[FAVORIS] Add all favoris ',
    DELETE_FAVORIS = '[FAVORIS] Delete favoris ',
}

export class AddFavorisAction implements Action {
    readonly type = FavorisActionType.ADD_FAVORIS;
    //add an optional payload
    constructor(public payload: Favoris) {}
}
export class AddAllFavorisAction implements Action {
    readonly type = FavorisActionType.ADD_ALL_FAVORIS;
    //add an optional payload
    constructor(public payload: Array<Favoris>) {}
}
export class DeleteFavorisAction implements Action {
    readonly type = FavorisActionType.DELETE_FAVORIS;
    //add an optional payload
    constructor(public payload: Favoris) {}
}
export type FavorisAction = AddFavorisAction | AddAllFavorisAction | DeleteFavorisAction;
  