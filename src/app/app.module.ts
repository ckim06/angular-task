import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';

import { EffectsModule } from '@ngrx/effects';
import { ProfileListEffects } from '@features/profile-list/store/effects/profile-list.effects';
import { ProfileEffects } from '@features/profile/store/profile.effects';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        EffectsModule.forFeature([ProfileListEffects, ProfileEffects])
    ]
})
export class AppModule { }
