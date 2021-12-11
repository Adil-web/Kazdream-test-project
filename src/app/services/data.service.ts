import { Injectable } from '@angular/core';
import { posts } from './posts';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  getData() {
    return posts
  }
}
