import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Albums } from 'src/app/store/models/albums.model';

import { AlbumsService } from './albums.service';

describe('AlbumsService', () => {
  let service: AlbumsService;


  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let albumService: AlbumsService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    albumService = new AlbumsService(httpClientSpy);
  });

it('should return expected albums ', (done: DoneFn) => {
  const expectedAlbums: Albums[] =
    [
      {
        id_album : 1,
        titre_album : 'alb1',
        artiste :1,
        lien_image : 'http' ,
        annee :2021,
        prix : 23,
        nom : 'nom',
      },
      {
        id_album : 2,
        titre_album : 'alb2',
        artiste :2,
        lien_image : 'http' ,
        annee :2022,
        prix : 23,
        nom : 'nom2',
      },

    ];

  httpClientSpy.get.and.returnValue(of(expectedAlbums));

  albumService.getListAlbum().subscribe({
    next: albums => {
      expect(albums)
        .withContext('expected list albums')
        .toEqual(expectedAlbums);
      done();
    },
    error: done.fail
  });
  expect(httpClientSpy.get.calls.count())
    .withContext('one call')
    .toBe(1);
});
});
