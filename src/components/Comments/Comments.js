import React, {Component} from 'react';
import './Comments.less';
import Loader from '../core/Loader/Loader';
import ItemComments from './ItemComments/ItemComments';
import EmptyComments from './EmptyComments';
import {Spinner} from '@vkontakte/vkui';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isLoadPagination: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        if (this.props.news) {
            this.setState({title: this.props.news.title});
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    UNSAFE_componentWillUpdate(prevProps) {
        if (prevProps.news !== this.props.news) {
            this.setState({title: prevProps.news.title});
        }

        if (prevProps.comments.next_pages !== this.props.comments.next_pages) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    generateCommentsList = () => {
        if (this.props.comments.comments_list.length === 0) return <EmptyComments/>;

        return this.props.comments.comments_list.map(comment =>
            <ItemComments
                key={comment.id}
                {...comment}
            />
        );
    };

    handleScroll = () => {
        let newsElement = document.getElementById('comments');
        let height = newsElement.scrollHeight - newsElement.clientHeight - 500;
        let scrollPosition = document.documentElement.scrollTop;
        if (height < scrollPosition && this.props.comments.next_pages <= this.props.comments.max_pages && this.props.comments.news_id !== 0) {
            this.setState({isLoadPagination: true});
            window.removeEventListener('scroll', this.handleScroll);
            this.props.commentsFetchData(`news/${this.props.comments.news_id}/comments-page/${this.props.comments.next_pages}/comments`);
        }

        if (this.props.comments.next_pages > this.props.comments.max_pages) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };

    render() {
        if (this.props.isLoader.comments && !this.state.isLoadPagination) return <Loader/>;

        let commentsList = this.generateCommentsList();

        return (
            <div className="comments">
                <div className="comments__title">
                    {this.state.title}
                </div>
                <div className="comments__body">
                    {commentsList}
                </div>
                {this.props.isLoader.comments && <Spinner size="regular" style={{marginTop: 10, marginBottom: 10, color: '#fff'}}/>}
            </div>
        );
    }
}

export default Comments;