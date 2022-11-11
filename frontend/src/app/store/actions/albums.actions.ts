import { Action } from '@ngrx/store';
import { Albums } from '../models/albums.model';

export enum AlbumsActionType {
    ADD_ALBUMS = '[ALBUM] Add All Albums',
    ADD_ALBUM = '[ALBUM] Add Albums',
}

export class AddAlbumAction implements Action {
    readonly type = AlbumsActionType.ADD_ALBUM;
    //add an optional payload
    constructor(public payload: Albums) {}
}
export class AddAlbumsAction implements Action {
    readonly type = AlbumsActionType.ADD_ALBUMS;
    //add an optional payload
    constructor(public payload: Array<Albums>) {}
}
export type AlbumsAction = AddAlbumAction | AddAlbumsAction;
  