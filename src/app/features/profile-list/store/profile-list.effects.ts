import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class ProfileListEffects {

  fetchProfiles$ = createEffect(() => this.actions$.pipe(
    ofType('[Profile-List] Init'),
    mergeMap(() => this.profileService.getProfiles()
      .pipe(
        map(users => ({ type: '[Profile List] Profiles Loaded Success', payload: users })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}