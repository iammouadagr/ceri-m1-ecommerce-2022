import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';

import { FormulaireConnexionPage } from './formulaire-connexion.page';

describe('FormulaireConnexionPage', () => {
  let component: FormulaireConnexionPage;
  let fixture: ComponentFixture<FormulaireConnexionPage>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
 

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireConnexionPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [provideMockStore({}), HttpClient],
    }).compileComponents();

    // TestBed.configureTestingModule({
    //   declarations: [ HomePage ],
    //   imports: [IonicModule.forRoot()]
    // }).compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    fixture = TestBed.createComponent(FormulaireConnexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  
});
