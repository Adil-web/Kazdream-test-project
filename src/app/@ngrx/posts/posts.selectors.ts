import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from 'src/app/models/data-table';
import * as fromDataTable from './posts.reducer';

export const selectDataTableState = createFeatureSelector<PostsState>(fromDataTable.postsFeatureKey);

export const selectPosts = createSelector(selectDataTableState, (state: PostsState) => state.posts);
