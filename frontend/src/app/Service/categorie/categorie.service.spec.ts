import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CategorieService } from './categorie.service';

describe('CategorieService', () => {
  let service: CategorieService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  
  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CategorieService(httpClientSpy);
  });
});
