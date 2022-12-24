import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FavorisService } from './favoris.service';

describe('FavorisService', () => {
  let service: FavorisService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new FavorisService(httpClientSpy);
  });
});
