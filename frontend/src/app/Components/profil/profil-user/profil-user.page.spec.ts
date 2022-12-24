import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';

import { ProfilUserPage } from './profil-user.page';

describe('ProfilUserPage', () => {
  let component: ProfilUserPage;
  let fixture: ComponentFixture<ProfilUserPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUserPage ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  
});
