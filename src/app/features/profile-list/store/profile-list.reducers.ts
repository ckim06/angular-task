import { createReducer, on } from '@ngrx/store';
import { profileListActions } from '@store/actions';
import { ProfileListState } from '../interfaces/profile-list';

const initialListState: ProfileListState = {};

const reducer = createReducer(
    initialListState,
    on(profileListActions.initProfileList, (state) => {

        return { ...state, users: [] };

    })
);

// tslint:disable only-arrow-functions
export function getProfileListReducer(state: ProfileListState | undefined, action: any) {  // Not sure what type to use here.
    switch (action.type) {
        case '[Profile List] Profiles Loaded Success':
            return {
                ...state,
                users: action.payload
            }
            break;
        default:
            return reducer(state, action);
    }

}
