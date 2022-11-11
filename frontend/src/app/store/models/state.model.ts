import { Albums } from './albums.model';

export interface State {
  readonly albums: Array<Albums>;
}