import {completedFetch, FetchData, isFetchDataError, isLoading, startLoader} from './helper';
import {
    NEWS_FETCH_DATA_SUCCESS,
    NEWS_LIKED_FETCH_SUCCESS,
    NEWS_DISLIKED_FETCH_SUCCESS,
    NEWS_POPULAR_FETCH_DATA_SUCCESS, NEWS_POPULAR_DISLIKED_FETCH_SUCCESS, NEWS_POPULAR_LIKED_FETCH_SUCCESS,
} from '../constants/news';
import HelperRequest from '../helpers/helperRequest';

export function newsFetchData(url) {
    return dispatch => {
        startLoader(dispatch, {news: true});
        FetchData(url, HelperRequest.config('GET'))
            .then(news => dispatch(newsFetchDataSuccess(news)))
            .catch(error => dispatch(isFetchDataError()))
            .finally(() => {
                dispatch(isLoading({news: false}));
                completedFetch();
            });
    };
}

export function newsFetchDataSuccess(news) {
    return {
        type: NEWS_FETCH_DATA_SUCCESS,
        payload: news,
    };
}

export function newsLikedFetch(url, newsId, body = {}) {
    return dispatch => {
        startLoader(dispatch, {newsLiked: true});
        FetchData(url, HelperRequest.config('POST', body))
            .then(liked => {
                dispatch(newsLikedFetchDataSuccess(liked, newsId));
                dispatch(newsPopularLikedFetchDataSuccess(liked, newsId));
            })
            .finally(() => {
                dispatch(isLoading({newsLiked: false}));
                completedFetch();
            });
    };
}

export function newsLikedFetchDataSuccess(liked, newsId) {
    return {
        type: NEWS_LIKED_FETCH_SUCCESS,
        payload: {liked, newsId},
    };
}

export function newsPopularLikedFetchDataSuccess(liked, newsId) {
    return {
        type: NEWS_POPULAR_LIKED_FETCH_SUCCESS,
        payload: {liked, newsId},
    };
}

export function newsDislikedFetch(url, newsId) {
    return dispatch => {
        startLoader(dispatch, {newsLiked: true});
        FetchData(url, HelperRequest.config('DELETE'))
            .then(disliked => {
                dispatch(newsDislikedFetchDataSuccess(disliked, newsId));
                dispatch(newsPopularDislikedFetchDataSuccess(disliked, newsId));
            })
            .finally(() => {
                dispatch(isLoading({newsLiked: false}));
                completedFetch();
            });
    };
}

export function newsDislikedFetchDataSuccess(disliked, newsId) {
    return {
        type: NEWS_DISLIKED_FETCH_SUCCESS,
        payload: {disliked, newsId},
    };
}

export function newsPopularDislikedFetchDataSuccess(disliked, newsId) {
    return {
        type: NEWS_POPULAR_DISLIKED_FETCH_SUCCESS,
        payload: {disliked, newsId},
    };
}

export function newsPopularFetchData(url) {
    return dispatch => {
        startLoader(dispatch, {news: true});
        FetchData(url, HelperRequest.config('GET'))
            .then(news => dispatch(newsPopularFetchDataSuccess(news)))
            .catch(error => dispatch(isFetchDataError()))
            .finally(() => {
                dispatch(isLoading({news: false}));
                completedFetch();
            });
    };
}

export function newsPopularFetchDataSuccess(news) {
    return {
        type: NEWS_POPULAR_FETCH_DATA_SUCCESS,
        payload: news,
    };
}