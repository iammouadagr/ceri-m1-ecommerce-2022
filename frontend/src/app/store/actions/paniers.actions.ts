import { Action } from '@ngrx/store';
import { Panier } from '../models/paniers.model';


export enum PanierActionType {
  ADD_PANIER = '[Panier] Add one article ',
  DELETE_PANIER = '[Panier] Delete one article ',
  DELETE_ALL_PANIER = '[Panier] Delete the contains of the panier ',
  ADD_ALL_PANIER = '[Panier] All all article ',
  ADD_ALL_SPEC_POS = '[Panier] Ajouter un article à un element précis ',
  DeleteAllPanierAction = "DeleteAllPanierAction"
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

export class DeleteAllPanierAction implements Action {
    readonly type = PanierActionType.DELETE_ALL_PANIER;
    //add an optional payload
    constructor() {}
}


export class AddPanierActionSpecPos implements Action {
    readonly type = PanierActionType.ADD_ALL_SPEC_POS;
    //add an optional payload
    constructor(public payload: Panier, public position : number) {}
}

export class AddPanierAllAction implements Action {
    readonly type = PanierActionType.ADD_ALL_PANIER;
    //add an optional payload
    constructor(public payload: Array<Panier>) {}
}


export type PanierAction = AddPanierAction | DeletePanierAction | AddPanierAllAction | AddPanierActionSpecPos | DeleteAllPanierAction; 
  