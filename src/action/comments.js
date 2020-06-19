import {completedFetch, FetchData, isFetchDataError, isLoading, startLoader} from './helper';
import {COMMENTS_FETCH_DATA_SUCCESS} from '../constants/comments';
import HelperRequest from '../helpers/helperRequest';

export function commentsFetchData(url) {
    return dispatch => {
        startLoader(dispatch, {comments: true});
        FetchData(url, HelperRequest.config('GET'))
            .then(comments => dispatch(commentsFetchDataSuccess(comments)))
            .catch(error => dispatch(isFetchDataError()))
            .finally(() => {
                dispatch(isLoading({comments: false}));
                completedFetch();
            });
    };
}

export function commentsFetchDataSuccess(comments) {
    return {
        type: COMMENTS_FETCH_DATA_SUCCESS,
        payload: comments,
    };
}