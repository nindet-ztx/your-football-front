import {connect} from 'react-redux';
import Comments from '../components/Comments/Comments';
import {commentsFetchData, navigationPanel} from '../action';
import {NEW} from '../constants/helper';

function mapStateToProps(state) {
    let news = [];
    if (state.activeNewsTabs === NEW) {
        news = state.news.news_list.find(news => (state.comments.news_id === news.id));
    } else {
        news = state.newsPopular.news_list.find(news => (state.comments.news_id === news.id));
    }
    return {
        isLoader: state.isLoader,
        comments: state.comments,
        news: news,
    };
}

const mapDispatchToProps = dispatch => ({
    navigationPanel: path => dispatch(navigationPanel(path)),
    commentsFetchData: url => dispatch(commentsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);