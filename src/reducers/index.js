import {combineReducers} from 'redux';
import {news} from './news';
import {activePanel} from './navigation';
import {isLoader} from './loader';
import {comments} from './comments';
import {activeNewsTabs} from './news-tabs';
import {newsPopular} from './news-popular';
import {profile} from './profile';

const rootReducer = combineReducers({
    news,
    activePanel,
    isLoader,
    comments,
    activeNewsTabs,
    newsPopular,
    profile,
});

export default rootReducer;
