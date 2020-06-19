import React, {Component} from 'react';
import './ItemComments.less';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import ReplyItems from '../ReplyItems/ReplyItems';
import Like from '../../Like/Like';
import {COLOR_ACTIVE_COMMENTS_LIKE, HEIGHT_ICO_COMMENTS_LIKE} from '../../../constants/comments';
import replyIco from '../../../img/ico-reply.svg';
import Tags from '../../core/Tags/Tags';

class ItemComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openReplyComments: false,
        };
    }

    generateReplyCommentsList = () => {
        return this.props.reply_comments.map(comment =>
            <ReplyItems
                key={comment.id}
                {...comment}
            />
        );
    };

    generateListTags = () => {
        return this.props.user.tags.map(tags => <Tags key={tags.id} img={tags.img}/>);
    };

    replyClick = () => {
        this.setState(prev => ({openReplyComments: !prev.openReplyComments}));
    };

    render() {
        const replyCommentsList = <div className='reply-list'>{this.generateReplyCommentsList()}</div>;
        let tags = this.generateListTags();

        return (
            <div className="item-comments">
                <div className="item-comments__user-info">
                    <Avatar src={this.props.user.photo} size={40}/>
                    <div className="item-comments__username">
                        <div className="item-comments__name">
                            {this.props.user.first_name + ' ' + this.props.user.last_name}</div>
                        <div className="item-comments__rank">{this.props.user.rank || 'Пользователь'}</div>
                    </div>
                    <div className="item-comments__tags">{tags}</div>
                </div>
                <div className="item-comments__text">
                    {this.props.text}
                </div>
                <div className="item-comments__action">
                    <div className="item-comments__action_reply">Ответить</div>
                    <div className="item-comments__action_open" onClick={this.replyClick}>
                        Ответы {this.props.count_reply_comments}
                        <div className={`ico-reply ${this.state.openReplyComments ? 'reply-open' : 'reply-close'}`}>
                            <img src={replyIco} alt='V'/>
                        </div>
                    </div>
                    <div className="item-comments__action_like">
                        {this.props.count_likes}
                        <div className="item-comments__ico_like">
                            <Like heightIco={HEIGHT_ICO_COMMENTS_LIKE} statusLike={this.props.statusLike}
                                colorActive={COLOR_ACTIVE_COMMENTS_LIKE}/>
                        </div>
                    </div>
                </div>
                <div>{!this.state.openReplyComments || replyCommentsList}</div>
            </div>
        );
    }
}

export default ItemComments;