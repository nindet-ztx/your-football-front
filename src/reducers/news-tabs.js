import React from 'react';
import {NEW, ACTIVE_NEWS_TABS} from '../constants/helper';

export function activeNewsTabs(state = NEW, action) {
    switch (action.type) {
        case ACTIVE_NEWS_TABS:
            return action.payload;
        default:
            return state;
    }
}