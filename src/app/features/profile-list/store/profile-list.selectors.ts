import { ProfileListState } from '../interfaces/profile-list';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileListState = createFeatureSelector<ProfileListState>('profile-list');

export const getProfileList = createSelector(getProfileListState, ({ users }) => {

    return users;

});
