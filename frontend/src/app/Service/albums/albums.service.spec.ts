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
        titre_album : "",
        artiste :1,
        lien_image : "string" ,
        annee :2021,
        prix : 10,
        genre_musical : "",
        quantite_max: 9, 
        nom : "string",
      },
      {
        id_album : 2,
        titre_album : "string",
        artiste :2,
        lien_image : "string" ,
        annee :2022,
        prix : 12,
        genre_musical : "",
        quantite_max: 10, 
        nom : "string",
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
