import React from 'react';
import './Welcome.less';
import Loader from '../core/Loader/Loader';

class Welcome extends React.Component {

    componentDidMount() {

    }

    render() {

        if (this.props.isLoader.authorization) return <Loader/>;

        return (
            <div className="welcome">
                <div className="welcome-header">YOUR FOOTBALL</div>
                <div>
                    <div onClick={() => this.props.authorization('auth/login')} className='welcome-button'>войти</div>
                    <div className="welcome-text">чтобы войти в приложение разрешите доступ</div>
                </div>
            </div>
        );
    }
}

export default Welcome;