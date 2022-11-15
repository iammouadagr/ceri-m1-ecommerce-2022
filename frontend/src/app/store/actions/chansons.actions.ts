import { Action } from '@ngrx/store';
import { Chansons } from '../models/chansons.model';

export enum ChansonsActionType {
    ADD_CHANSONS = '[CHANSON] Add All Chansons',
    ADD_CHANSON = '[CHANSON] Add Chanson',
}

export class AddChansonAction implements Action {
    readonly type = ChansonsActionType.ADD_CHANSON;
    //add an optional payload
    constructor(public payload: Chansons) {}
}
export class AddChansonsAction implements Action {
    readonly type = ChansonsActionType.ADD_CHANSONS;
    //add an optional payload
    constructor(public payload: Array<Chansons>) {}
}
export type ChansonAction = AddChansonAction | AddChansonsAction;
  