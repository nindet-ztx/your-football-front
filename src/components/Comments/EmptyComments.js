import React, {Component} from 'react';
import './Comments.less';

class EmptyComments extends Component {

    render() {

        return (
            <div className="comments__empty">
                Комментариев пока нет. Оставьте первым комментарий.
            </div>
        );
    }
}

export default EmptyComments;