import { Action } from '@ngrx/store';
import { Panier } from '../models/paniers.model';

export enum PanierActionType {
    ADD_PANIER = '[Panier] Add one article ',
    DELETE_PANIER = '[Panier] Delete one article ',
    ADD_ALL_PANIER= '[Panier] All all article ',
}

export class AddPanierAction implements Action {
    readonly type = PanierActionType.ADD_PANIER;
    //add an optional payload
    constructor(public payload: Panier) {}
}
export class DeletePanierAction implements Action {
    readonly type = PanierActionType.DELETE_PANIER;
    //add an optional payload
    constructor(public payload: Panier) {}
}

export class AddPanierAllAction implements Action {
    readonly type = PanierActionType.ADD_ALL_PANIER;
    //add an optional payload
    constructor(public payload: Array<Panier>) {}
}


export type PanierAction = AddPanierAction | DeletePanierAction | AddPanierAllAction;
  