import {IS_ERROR, IS_LOADING, LOADER_DELAY} from '../constants/helper';
import {NEWS_FETCH_DATA_SUCCESS} from '../constants/news';

const URL = process.env.API_URL;
export const domain = window.location.hostname;
export let isCompleted = false;

export const FetchData = (path = '', config) => {

    return fetch(`${URL}${path}`, config)
        .then(response => {
            return response.json();
        }).then(result => {

            if (result.success) {
                return result.data;
            }
            switch (result.error.code) {
                case 1:
                    return result.error.message;
                default:
                    return 'unknown error';
            }
        }
        );
};

export function isFetchDataError() {
    return {
        type: IS_ERROR,
        isError: true,
    };
}

export function startLoader(dispatch, object) {
    isCompleted = false;
    setTimeout(() => {
        if (isCompleted) return;

        dispatch(isLoading(object));
    }, LOADER_DELAY);
}

export function isLoading(object) {
    return {
        type: IS_LOADING,
        payload: object,
    };
}

export function completedFetch() {
    isCompleted = true;
}