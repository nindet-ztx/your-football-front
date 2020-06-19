import {completedFetch, FetchData, isFetchDataError, isLoading, startLoader} from './helper';
import HelperRequest from '../helpers/helperRequest';
import {PROFILE_FETCH_DATA_SUCCESS} from '../constants/profile';

export function profileFetchData(url) {
    return dispatch => {
        startLoader(dispatch, {profile: true});
        FetchData(url, HelperRequest.config('GET'))
            .then(data => dispatch(profileFetchDataSuccess(data)))
            .catch(error => dispatch(isFetchDataError()))
            .finally(() => {
                dispatch(isLoading({profile: false}));
                completedFetch();
            });
    };
}

export function profileFetchDataSuccess(data) {
    return {
        type: PROFILE_FETCH_DATA_SUCCESS,
        payload: data,
    };
}