import { Action } from '@ngrx/store';
import { Albums } from '../models/albums.model';

export enum AlbumsActionType {
    ADD_ALBUMS = '[ALBUM] Add All Albums',
    ADD_ALBUM = '[ALBUM] Add Albums',
    DELETE_ALBUM = '[ALBUM] delete one album ',
    ADD_ALBUM_SPEC_POS  = '[ALBUM] add an album to a specific place  '
}

export class AddAlbumAction implements Action {
    readonly type = AlbumsActionType.ADD_ALBUM;
    //add an optional payload
    constructor(public payload: Albums) {}
}

export class AddAlbumSpecPosAction implements Action {
    readonly type = AlbumsActionType.ADD_ALBUM_SPEC_POS;
    //add an optional payload
    constructor(public payload: Albums, public position : number) {}
}

export class DeleteAlbumAction implements Action {
    readonly type = AlbumsActionType.DELETE_ALBUM;
    //add an optional payload
    constructor(public payload: Albums) {}
}
export class AddAlbumsAction implements Action {
    readonly type = AlbumsActionType.ADD_ALBUMS;
    //add an optional payload
    constructor(public payload: Array<Albums>) {}
}
export type AlbumsAction = AddAlbumAction | AddAlbumsAction | AddAlbumSpecPosAction |  DeleteAlbumAction;
  