import React from 'react';
import {PROFILE_FETCH_DATA_SUCCESS} from '../constants/profile';

export function profile(state = {yf_coins: 0}, action) {
    switch (action.type) {
        case PROFILE_FETCH_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}