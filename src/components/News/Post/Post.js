import React, {Component} from 'react';
import './Post.less';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Tags from '../../core/Tags/Tags';
import icoComments from '../../../img/ico-comments.svg';
import {COMMENTS} from '../../../constants/navigation';
import Like from '../../Like/Like';
import {COLOR_ACTIVE_NEWS_LIKE, DESCRIPTION_LENGTH, HEIGHT_ICO_NEWS_LIKE} from '../../../constants/news';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.description.length <= DESCRIPTION_LENGTH,
            description: this.constructorDescription(),
        };
    }

    constructorDescription = () => {
        if (this.props.description.length > 600) {
            let description = this.props.description.slice(400, 450);
            description = description.split('');

            let endPosition = 0;
            let array = [];
            array.push(description.indexOf(',', 0));
            array.push(description.indexOf('.', 0));
            array.push(description.indexOf(')', 0));
            array.push(description.indexOf('?', 0));
            array.push(description.indexOf(';', 0));
            array.push(description.indexOf('!', 0));

            let positionsSpace = description.indexOf(' ', 0);

            endPosition = Math.max.apply(Math, array);
            endPosition = 401 + endPosition;

            if (endPosition > 401) return this.props.description.slice(0, endPosition);

            endPosition = 401 + positionsSpace;
            return this.props.description.slice(0, endPosition);
        }

        return this.props.description;
    };

    generateListTags = () => {
        return this.props.tags.map(tags => <Tags key={tags.id} img={tags.img}/>);
    };

    liked = () => {
        this.props.newsLikedFetch(`news/${this.props.id}/liked`, this.props.id);
    };

    disliked = () => {
        this.props.newsDislikedFetch(`news/${this.props.id}/disliked`, this.props.id);
    };

    openComments = () => {
        this.props.commentsFetchData(`news/${this.props.id}/comments-page/1/comments`);
        this.props.navigationPanel(COMMENTS);
    };

    openDescription = () => {
        this.setState({open: true, description: this.props.description});
    };

    render() {
        let tags = this.generateListTags();

        return (
            <div className="post">
                <div className="post__header">
                    <div className="post__header-avatar">
                        <Avatar src={this.props.user.photo} size={48}/>
                    </div>
                    <div className="post__header-user">
                        <div className="post__header-username">
                            {this.props.user.first_name + ' ' + this.props.user.last_name}
                        </div>
                        <div className="post__header-user-rank">{this.props.user.rank || 'Пользователь'}</div>
                    </div>
                    <div className="post__tags">{tags}</div>
                </div>
                <div className="post__body">
                    <div className="post__body-title">{this.props.title}</div>
                    <div className="post__body-photo">
                        <img className="post__body-photo-img" src={this.props.photo} alt='photo'/>
                    </div>
                    <div className={`post__body-description ${!this.state.open || 'post__body-description-open'}`}>
                        {this.state.description}
                    </div>
                    <div onClick={this.openDescription}
                        className={this.state.open ? 'description-open__text' : 'description-close__text'}>
                        Показать полностью...
                    </div>
                </div>
                <div className="post__footer">
                    <div className="post__footer-copyright">
                        <div>{this.props.timeAfterPublication}</div>
                        <div>Your Football</div>
                    </div>
                    <div className="post__footer-comments">
                        <div className="post__footer-comments-wrap" onClick={this.openComments}>
                            <div className="post__footer-comments-count">{this.props.countComments}</div>
                            <div className="post__footer-comments-img"><img src={icoComments} alt=''/></div>
                        </div>
                    </div>
                    <div className="post__footer-like">
                        <div className="post__footer-like-count">{this.props.countLike}</div>
                        {!this.props.isLoader.newsLiked ?
                            <div className="post__footer-like-img"
                                onClick={this.props.statusLike ? this.disliked : this.liked}>
                                <Like heightIco={HEIGHT_ICO_NEWS_LIKE} statusLike={this.props.statusLike}
                                    colorActive={COLOR_ACTIVE_NEWS_LIKE}/>
                            </div> :
                            <div className="loader-download">
                                <div className="loader-download__speeding-wheel"/>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;