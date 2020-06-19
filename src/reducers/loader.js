import {IS_LOADING} from '../constants/helper';

export function isLoader(state = {newsLiked: false}, action) {
    switch (action.type) {
        case IS_LOADING:
            return {...state, ...action.payload};
        default:
            return state;
    }
}