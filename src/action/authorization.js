import {NEWS} from '../constants/navigation';
import navigationPanel from './navigation';
import {completedFetch, domain, FetchData, isFetchDataError, isLoading, startLoader} from './helper';
import HelperRequest from '../helpers/helperRequest';
import {AUTHORIZATION_FETCH_DATA_SUCCESS} from '../constants/helper';

export function authorization(url) {
    return dispatch => {
        startLoader(dispatch, {authorization: true});
        let body = {
            social_id: '7654243',
            first_name: 'Илья',
            last_name: 'Малиновский',
            photo: 'https://sun9-66.userapi.com/c840221/v840221225/360df/_Kn8Fo0SDew.jpg',
        };
        FetchData(url, HelperRequest.config('POST', body))
            .then(data => dispatch(authorizationFetchDataSuccess(data)))
            .then(() => dispatch(navigationPanel(NEWS)))
            .catch(error => dispatch(isFetchDataError()))
            .finally(() => {
                dispatch(isLoading({authorization: false}));
                completedFetch();
            });
    };
}

export function authorizationFetchDataSuccess(data) {
    document.cookie = `access_token=${data.access_token}; domain=${domain}; path=/`;
    return {
        type: AUTHORIZATION_FETCH_DATA_SUCCESS,
        payload: data,
    };
}