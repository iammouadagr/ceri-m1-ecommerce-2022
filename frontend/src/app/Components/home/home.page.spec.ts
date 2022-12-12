import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed,  waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
 

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [provideMockStore({}), HttpClient],
    }).compileComponents();

    // TestBed.configureTestingModule({
    //   declarations: [ HomePage ],
    //   imports: [IonicModule.forRoot()]
    // }).compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', ()=> {
  //     expect(component).toBeTruthy();
  // });

  // it('should go ', () => {
  //     spyOn(component, 'goAccueil');
  //     expect(component.goAccueil).toHaveBeenCalled();
  // })
});


