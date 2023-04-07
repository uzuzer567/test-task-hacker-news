import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { HackerNewsApiService } from '../../../core/services/hacker-news-api.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesListComponent {
  idsOfStoriesOnPage: number[] = [];
  idsOfAllStories: number[] = [];
  storiesType = 'newstories';
  numberOfStories = 25;

  scrollThrottle = 1000;
  scrollDistance = 2;

  constructor(
    private hackerNewsApiService: HackerNewsApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.hackerNewsApiService
      .getIdsOfAllStories(this.storiesType)
      .subscribe((ids: number[]) => {
        this.idsOfAllStories = ids;
        this.addStories(0, this.numberOfStories);
        this.cdr.markForCheck();
      });
  }

  addStories(startIndex: number, endIndex: number) {
    this.idsOfStoriesOnPage = [
      ...this.idsOfStoriesOnPage,
      ...this.idsOfAllStories.slice(startIndex, endIndex),
    ];
  }

  onScroll() {
    const startIndex = this.numberOfStories;
    this.numberOfStories += 10;
    this.addStories(startIndex, this.numberOfStories);
  }

  trackBy(index: number, story: number) {
    return story;
  }
}
