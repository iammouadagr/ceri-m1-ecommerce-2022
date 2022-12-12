import { Action } from '@ngrx/store';
import { User } from '../models/utilisateur.model';

export enum UserActionType {
    ADD_USER = '[USER] Add user ',
    DELETE_USER = '[USER] Delete user ',
    GET_USER= '[USER] Get user ',
}

export class AddUserAction implements Action {
    readonly type = UserActionType.ADD_USER;
    //add an optional payload
    constructor(public payload: User) {}
}
export class DeleteUserAction implements Action {
    readonly type = UserActionType.DELETE_USER;
    //add an optional payload
    constructor(public payload: User) {}
}

export class GetUserAction implements Action {
    readonly type = UserActionType.GET_USER;
    //add an optional payload
    constructor() {}
}


export type UserAction = AddUserAction | DeleteUserAction | GetUserAction;
  