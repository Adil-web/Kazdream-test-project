import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './posts.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromReducer.postsFeatureKey,
      fromReducer.PostsReducer
    ),
  ],
})
export class DataTableModule {}
