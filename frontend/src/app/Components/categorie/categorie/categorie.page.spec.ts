import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';

import { CategoriePage } from './categorie.page';

describe('CategoriePage', () => {
  let component: CategoriePage;
  let fixture: ComponentFixture<CategoriePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriePage ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 
});
