import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../data-wp.service';
import { Observable } from 'rxjs';
import { PostI } from '../post.interface';

@Component({
  selector: 'app-postsList',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [DataWpService]
})
export class PostsListComponent implements OnInit {

  constructor(private dataWp: DataWpService) { }
  posts$: Observable<PostI[]>;

  ngOnInit() {
    this.posts$ = this.dataWp.getPosts();
  }

}
