import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HackerNewsApiService } from './hacker-news-api.service';

describe('HackerNewsApiService', () => {
  let service: HackerNewsApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HackerNewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
