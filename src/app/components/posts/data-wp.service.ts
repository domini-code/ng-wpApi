import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostI } from './post.interface';
import { Observable } from 'rxjs';

@Injectable()
export class DataWpService {

  constructor(private http: HttpClient) { }
  urlApi = 'https://academia-wp.online/wp-json/wp/v2/posts?_embed';

  getPosts(): Observable<PostI[]> {
    return this.http.get<PostI[]>(this.urlApi, {
      params: {
        per_page: '9'
      }
    });
  }
}
