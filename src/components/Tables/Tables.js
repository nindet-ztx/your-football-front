import React, {Component} from 'react';
import './Tables.less';
import Loader from '../core/Loader/Loader';

class Tables extends Component {

    render() {
        if (this.props.isLoader.tables) return <Loader/>;

        return (
            <div className="tables">
                Tables
            </div>
        );
    }
}

export default Tables;