import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { User } from 'src/app/store/models/utilisateur.model';

import { FormulaireInscriptionPage } from './formulaire-inscription.page';

describe('FormulaireInscriptionPage', () => {
  let component: FormulaireInscriptionPage;
  let fixture: ComponentFixture<FormulaireInscriptionPage>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let store: MockStore<{ user: User }>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireInscriptionPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [provideMockStore({}), HttpClient],
    }).compileComponents();


    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    fixture = TestBed.createComponent(FormulaireInscriptionPage);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  }));

  // it('should return "" if the user state is not logged in', () => {
  //   const expected = cold('(a|)', { a: false });
 
  //   expect(guard.canActivate()).toBeObservable(expected);
  // });


});
