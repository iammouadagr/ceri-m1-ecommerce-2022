import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';

import { ArticleDetailsPage } from './article-details.page';

describe('ArticleDetailsPage', () => {
  let component: ArticleDetailsPage;
  let fixture: ComponentFixture<ArticleDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetailsPage ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  
});
