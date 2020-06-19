import React, {Component} from 'react';
import './News.less';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import {NEW, POPULAR} from '../../constants/helper';
import Loader from '../core/Loader/Loader';
import {Spinner} from '@vkontakte/vkui';
import Post from './Post/Post';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        if (this.props.news.next_pages === 1) {
            this.props.newsFetchData('new-news-page/1/news');
        }

        if (!this.props.profile.rank) {
            this.props.profileFetchData('profile');
        }
    }

    UNSAFE_componentWillUpdate(nextProps) {
        if (nextProps.news.next_pages === this.props.news.next_pages || nextProps.newsPopular.next_pages === this.props.newsPopular.next_pages) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    onClickTabItem = key => {
        if (key !== this.props.activeNewsTabs) {
            this.props.activatingNewsTabs(key);
            document.documentElement.scrollTop = 0;
            if (key === NEW && this.props.news.news_list.length === 0) {
                this.props.newsFetchData(`new-news-page/${this.props.news.next_pages}/news`);
            }
            if (key === POPULAR && this.props.newsPopular.news_list.length === 0) {
                this.props.newsPopularFetchData(`popular-news-page/${this.props.newsPopular.next_pages}/news`);
            }
        }
    };


    handleScroll = () => {
        let newsElement = document.getElementById('news');
        let height = newsElement.scrollHeight - newsElement.clientHeight - 500;
        let scrollPosition = document.documentElement.scrollTop;
        if (height < 2000) return null;
        if (this.props.activeNewsTabs === NEW) {
            if (height < scrollPosition && this.props.news.next_pages <= this.props.news.max_pages && this.props.news.news_list.length !== 0) {
                window.removeEventListener('scroll', this.handleScroll);
                this.props.newsFetchData(`new-news-page/${this.props.news.next_pages}/news`);
            }
        }
        if (this.props.activeNewsTabs === POPULAR) {
            if (height < scrollPosition && this.props.newsPopular.next_pages <= this.props.newsPopular.max_pages && this.props.newsPopular.news_list.length !== 0) {
                window.removeEventListener('scroll', this.handleScroll);
                this.props.newsPopularFetchData(`popular-news-page/${this.props.newsPopular.next_pages}/news`);
            }
        }
    };

    generatePost = post => {
        return <Post
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            photo={post.photo}
            statusLike={post.status_like}
            countLike={post.count_likes}
            countComments={post.count_comments}
            user={post.user}
            rank={post.rank}
            tags={post.tags}
            timeAfterPublication={post.time_after_publication}
            newsDislikedFetch={this.props.newsDislikedFetch}
            newsLikedFetch={this.props.newsLikedFetch}
            isLoader={this.props.isLoader}
            commentsFetchData={this.props.commentsFetchData}
            navigationPanel={this.props.navigationPanel}
        />;
    }

    generatePostList = () => {
        if (this.props.activeNewsTabs === NEW) {
            return this.props.news.news_list.map(post => this.generatePost(post));
        }
        return this.props.newsPopular.news_list.map(post => this.generatePost(post));

    };

    render() {
        const postList = this.generatePostList();
        if (this.props.isLoader.news && this.props.news.news_list === [] && this.props.activeNewsTabs === NEW) return <Loader/>;
        if (this.props.isLoader.news && this.props.newsPopular.news_list === [] && this.props.activeNewsTabs === POPULAR) return <Loader/>;
        if (this.props.isLoader.profile) return <Loader/>;

        let newTab = this.props.activeNewsTabs === NEW ? '45px solid #37003C' : '45px solid rgba(84, 71, 85, 0.30)';
        let popularTab = this.props.activeNewsTabs === POPULAR ? '45px solid #37003C' : '45px solid rgba(84, 71, 85, 0.30)';

        return (
            <div className="news">
                <PersonalInfo
                    profile={this.props.profile}
                    navigationPanel={this.props.navigationPanel}
                />
                <div className="news__tabs">
                    <div className="news__tabs-new"
                        style={{borderTop: newTab}}/>
                    <div className="news__tabs-popular"
                        style={{borderBottom: popularTab}}/>
                    <div onClick={() => this.onClickTabItem(NEW)} className="news__tabs-text">Новое</div>
                    <div onClick={() => this.onClickTabItem(POPULAR)} className="news__tabs-text">Популярное</div>
                </div>
                <div className="post-list">
                    {postList}
                </div>
                {!this.props.isLoader.news ||
                <Spinner size="regular" style={{marginTop: 10, marginBottom: 10, color: '#fff'}}/>}
            </div>
        );
    }
}

export default News;