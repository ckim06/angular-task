import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileListComponent } from './profile-list';
import { getProfileListReducer } from './store/profile-list.reducers';

@NgModule({
    declarations: [
        ProfileListComponent
    ],
    entryComponents: [
        ProfileListComponent
    ],
    exports: [
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile-list', getProfileListReducer)
        
    ]
})
export class ProfileListModule { }
