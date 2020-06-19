import {COMMENTS_FETCH_DATA_SUCCESS} from '../constants/comments';

export function comments(state = {comments_list: [], max_pages: 1, next_pages: 1, news_id: 0}, action) {
    switch (action.type) {
        case COMMENTS_FETCH_DATA_SUCCESS:
            if (action.payload.next_pages === 2) {
                return action.payload;
            }
            return {comments_list: [...state.comments_list, ...action.payload.comments_list],
                max_pages: action.payload.max_pages, next_pages: action.payload.next_pages, news_id: action.payload.news_id};
        default:
            return state;
    }
}
