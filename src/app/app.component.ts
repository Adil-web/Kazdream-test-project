import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { FormControl } from '@angular/forms';

// RxJs
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// NgRx
import { Store } from '@ngrx/store';
import { PostsState } from './models/data-table';
import { setData } from './@ngrx/posts';
import { posts } from './services/posts';
import { selectPosts, selectDataTableState } from './@ngrx/posts/posts.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data!: any;
  headerRow = [
    { displayName: 'ID', key: 'id' },
    { displayName: 'Title', key: 'title' },
    { displayName: 'Body', key: 'body' },
  ];

  searchControl = new FormControl('')
  constructor(private dataService: DataService, private store: Store<PostsState>) {}

  ngOnInit() {
    this.store.dispatch(setData(posts))
    this.data = this.store.select(selectPosts)
    console.log(this.data);
    
  }
}
