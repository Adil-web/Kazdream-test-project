import { Action, createReducer, on } from '@ngrx/store';
import * as DataTableActions from './posts.actions';
import { Post, PostsState } from 'src/app/models/data-table';

export const INITIAL_STATE: PostsState = {
  posts: []
};

export const postsFeatureKey = 'posts';


export const postsReducer = createReducer(
  INITIAL_STATE,
  on(DataTableActions.setData, (state, data) => {
    return {
      ...state,
      posts: data
    };
  }),
);

export function PostsReducer(state: PostsState, action: Action) {
  return postsReducer(state, action);
}
