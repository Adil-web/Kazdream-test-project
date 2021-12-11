import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataTableModule } from './posts/posts.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),

    DataTableModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10, 
      logOnly: environment.production, 
      autoPause: true, 
    }),
  ]
})
export class RootStoreModule {}
