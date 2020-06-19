import {connect} from 'react-redux';
import News from '../components/News/News';
import {
    commentsFetchData,
    newsDislikedFetch,
    newsFetchData,
    newsLikedFetch,
    activatingNewsTabs,
    navigationPanel,
    newsPopularFetchData,
    profileFetchData,
} from '../action';

const mapStateToProps = state => ({
    news: state.news,
    newsPopular: state.newsPopular,
    isLoader: state.isLoader,
    activeNewsTabs: state.activeNewsTabs,
    profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
    newsFetchData: url => dispatch(newsFetchData(url)),
    newsLikedFetch: (url, newsId, body) => dispatch(newsLikedFetch(url, newsId, body)),
    newsDislikedFetch: (url, newsId) => dispatch(newsDislikedFetch(url, newsId)),
    commentsFetchData: url => dispatch(commentsFetchData(url)),
    navigationPanel: path => dispatch(navigationPanel(path)),
    activatingNewsTabs: key => dispatch(activatingNewsTabs(key)),
    newsPopularFetchData: url => dispatch(newsPopularFetchData(url)),
    profileFetchData: url => dispatch(profileFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);