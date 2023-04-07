import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UrlPipe } from '../../../core/pipes/url.pipe';
import { TimePipe } from '../../../core/pipes/time.pipe';
import { HackerNewsApiService } from '../../../core/services/hacker-news-api.service';
import { StoriesListItemComponent } from './stories-list-item.component';

describe('StoriesListItemComponent', () => {
  let component: StoriesListItemComponent;
  let fixture: ComponentFixture<StoriesListItemComponent>;

  const fakeHackerNewsApiService = jasmine.createSpyObj(
    'fakeHackerNewsApiService',
    ['getIdsOfAllStories', 'getStoryById']
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoriesListItemComponent, UrlPipe, TimePipe],
      providers: [
        {
          provide: HackerNewsApiService,
          useValue: fakeHackerNewsApiService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StoriesListItemComponent);
    component = fixture.componentInstance;

    fakeHackerNewsApiService.getStoryById.and.returnValue(
      of({
        by: 'user',
        descendants: 1,
        id: 1,
        score: 10,
        time: 16748527,
        title: 'story',
        type: 'new',
        url: '',
      })
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
