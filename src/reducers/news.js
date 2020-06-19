import {NEWS_DISLIKED_FETCH_SUCCESS, NEWS_FETCH_DATA_SUCCESS, NEWS_LIKED_FETCH_SUCCESS} from '../constants/news';

export function news(state = {news_list: [], max_pages: 1, next_pages: 1}, action) {
    switch (action.type) {
        case NEWS_FETCH_DATA_SUCCESS:
            return {
                news_list: [...state.news_list, ...action.payload.news_list],
                max_pages: action.payload.max_pages, next_pages: action.payload.next_pages,
            };
        case NEWS_LIKED_FETCH_SUCCESS:
            return {
                news_list: state.news_list.map(item => {
                    if (item.id === action.payload.newsId) {
                        return Object.assign({}, item, {
                            count_likes: ++item.count_likes,
                            status_like: !item.status_like,
                        });
                    }
                    return item;
                }), max_pages: state.max_pages, next_pages: state.next_pages,
            };
        case NEWS_DISLIKED_FETCH_SUCCESS:
            return {
                news_list: state.news_list.map(item => {
                    if (item.id === action.payload.newsId) {
                        return Object.assign({}, item, {
                            count_likes: --item.count_likes,
                            status_like: !item.status_like,
                        });
                    }
                    return item;
                }), max_pages: state.max_pages, next_pages: state.next_pages,
            };
        default:
            return state;
    }
}
