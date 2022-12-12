import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ChansonsService } from './chansons.service';

describe('ChansonsService', () => {
  let service: ChansonsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ChansonsService(httpClientSpy);
  });
});
