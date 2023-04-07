import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HackerNewsApiService } from '../../../core/services/hacker-news-api.service';
import { StoriesListComponent } from './stories-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('StoriesListComponent', () => {
  let component: StoriesListComponent;
  let fixture: ComponentFixture<StoriesListComponent>;

  const fakeHackerNewsApiService = jasmine.createSpyObj(
    'fakeHackerNewsApiService',
    ['getIdsOfAllStories', 'getStoryById']
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoriesListComponent],
      imports: [InfiniteScrollModule],
      providers: [
        {
          provide: HackerNewsApiService,
          useValue: fakeHackerNewsApiService,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(StoriesListComponent);
    component = fixture.componentInstance;

    fakeHackerNewsApiService.getIdsOfAllStories.and.returnValue(
      of(new Array(30).map((_, i) => i))
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the number of stories on page', () => {
    expect(component.idsOfStoriesOnPage.length).toBe(25);
    component.onScroll();
    expect(component.idsOfStoriesOnPage.length).toBe(30);
  });

  it('should return id for the array element', () => {
    const id = component.trackBy(2, 222);
    expect(id).toBe(222);
  });
});
