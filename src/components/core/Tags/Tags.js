import React, {Component} from 'react';
import './Tags.less';

class Tags extends Component {

    render() {
        return (
            <div className="tags">
                <img className="tags__img" src={this.props.img} alt='Tag'/>
            </div>
        );
    }
}

export default Tags;