import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UtilisateurService } from './utilisateur.service';

describe('UtilisateurService', () => {
  let service: UtilisateurService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  
  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UtilisateurService(httpClientSpy);
  });
});
