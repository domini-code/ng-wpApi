import { Component, OnInit, Input } from '@angular/core';
import { PostI } from '../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: PostI;
  constructor() { }

  ngOnInit() {
  }

}
