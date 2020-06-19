import React, {Component} from 'react';
import './ReplyItems.less';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Tags from '../../core/Tags/Tags';

class ReplyItems extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    generateListTags = () => {
        return this.props.user.tags.map(tags => <Tags key={tags.id} img={tags.img}/>);
    };

    render() {
        let tags = this.generateListTags();

        return (
            <div className="reply-comments">
                <div className="reply-comments__user-info">
                    <Avatar src={this.props.user.photo} size={25}/>
                    <div className="reply-comments__username">
                        <div
                            className="reply-comments__name">{this.props.user.first_name} {this.props.user.last_name}</div>
                        <div className="reply-comments__rank">{this.props.user.rank || 'Пользователь'}</div>
                    </div>
                    <div className="reply-comments__tags">{tags}</div>
                </div>
                <div className="reply-comments__text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default ReplyItems;