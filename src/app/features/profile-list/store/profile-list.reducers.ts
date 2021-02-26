import { Action, createReducer, on } from '@ngrx/store';
import { profileListActions } from '@store/actions';
import { ProfileListState } from '../interfaces/profile-list';
import {UserProfile} from '@interfaces';
const dummyProfile: UserProfile = {
    cellNumber: '888-888-8888',
    city: 'Los Angeles',
    dateOfBirth: 'Jan 1st, 1966',
    email: 'test@crexi.com',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    picture: '/content/img/default_user.png',
    state: 'CA'
};

const dummyProfiles = [dummyProfile, dummyProfile, dummyProfile];

const initialListState: ProfileListState = {};

const reducer = createReducer(
    initialListState,
    on(profileListActions.initProfileList, (state) => {
        
        return { ...state, users: dummyProfiles };

    })
);

// tslint:disable only-arrow-functions
export function getProfileListReducer (state: ProfileListState | undefined, action: Action) {

    return reducer(state, action);

}
