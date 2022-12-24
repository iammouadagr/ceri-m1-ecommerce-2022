import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';

import { FavorisListPagePage } from './favoris-list-page.page';

describe('FavorisListPagePage', () => {
  let component: FavorisListPagePage;
  let fixture: ComponentFixture<FavorisListPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorisListPagePage ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(FavorisListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  
});
