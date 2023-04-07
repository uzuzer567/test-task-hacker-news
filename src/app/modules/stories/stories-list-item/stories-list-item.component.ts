import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { HackerNewsApiService } from '../../../core/services/hacker-news-api.service';
import { Story } from '../../../core/interfaces/story';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-stories-list-item',
  templateUrl: './stories-list-item.component.html',
  styleUrls: ['./stories-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesListItemComponent {
  @Input() storyNumber!: number;
  @Input() storyId!: number;
  story!: Story;
  loading = true;

  constructor(
    private hackerNewsApiService: HackerNewsApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.hackerNewsApiService
      .getStoryById(this.storyId)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe(story => {
        this.story = story;
      });
  }
}
