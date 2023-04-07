import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Story } from '../interfaces/story';

@Injectable({
  providedIn: 'root',
})
export class HackerNewsApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  }

  getIdsOfAllStories(type: string): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}${type}.json`);
  }

  getStoryById(id: number): Observable<Story> {
    return this.http.get<Story>(`${this.baseUrl}item/${id}.json`);
  }
}
