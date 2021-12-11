import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/data-table';

enum Actions {
  SET_POSTS = '[Posts] Set Posts',
  CREATE_POST = '[Posts] Create Post',
  UPDATE_POST = '[Posts] Update Post',
  DELETE_POST = '[Posts] Delete Post', 
  SEARCH_POST = '[Posts] Search Post', 
  PAGINATE_POST = '[Posts] Paginate Post', 
}

export const setData = createAction(Actions.SET_POSTS, props<any>());
export const createData = createAction(Actions.CREATE_POST, props<{ data: any[] }>());
export const updateData = createAction(Actions.UPDATE_POST, props<{ id: number }>());
export const deleteData = createAction(Actions.DELETE_POST, props<{ id: number }>());
export const searchData = createAction(Actions.SET_POSTS, props<{ name: string }>());
export const paginateData = createAction(Actions.PAGINATE_POST, props<{ page: number }>());




