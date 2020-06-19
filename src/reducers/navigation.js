import React from 'react';
import {ACTIVE_PANEL, WELCOME} from '../constants/navigation';

export function activePanel(state = WELCOME, action) {
    switch (action.type) {
        case ACTIVE_PANEL:
            return action.payload;
        default:
            return state;
    }
}