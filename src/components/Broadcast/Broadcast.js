import React, {Component} from 'react';
import './Broadcast.less';
import Loader from '../core/Loader/Loader';

class Broadcast extends Component {

    render() {
        if (this.props.isLoader.broadcast) return <Loader/>;

        return (
            <div className="broadcast">
                Broadcast
            </div>
        );
    }
}

export default Broadcast;