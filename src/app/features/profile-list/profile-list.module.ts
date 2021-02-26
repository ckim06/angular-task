import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileListComponent } from './profile-list';
import { EffectsModule } from '@ngrx/effects';
import { getProfileListReducer } from './store/profile-list.reducers';
import { ProfileListEffects } from './store/profile-list.effects';

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
        EffectsModule.forFeature([ProfileListEffects]),
        StoreModule.forFeature('profile-list', getProfileListReducer)
        
    ]
})
export class ProfileListModule { }
