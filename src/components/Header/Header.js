import React, {Component} from 'react';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {BROADCAST, COMMENTS, MORE, NEWS, PROFILE, TABLES} from '../../constants/navigation';
import './Header.less';
import backIco from '../../img/ico-back.svg';

class Header extends Component {

    pageUp = () => {
        let t;
        let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        if (top > 0) {
            window.scrollBy(0, -100);
            t = setTimeout(this.pageUp(), 20);
        } else clearTimeout(t);
        return false;
    };

    render() {
        let score = <div className="header-score__wrapper">
            <div className="header-score">{this.props.profile.yf_coins}</div>
        </div>;

        let title = null;
        let leftContent = null;

        switch (this.props.activePanel) {
            case NEWS:
                title = <div className="header-title" onClick={this.pageUp}>Your Football</div>;
                leftContent = score;
                break;
            case COMMENTS:
                title = <div onClick={this.pageUp}>{score}</div>;
                leftContent =
                    <div className="header-back" onClick={() => this.props.navigationPanel(NEWS)}>
                        <div className="header-back__wrap">
                            <img src={backIco} alt='<'/>
                            <div className="header-back__text">Назад</div>
                        </div>
                    </div>;
                break;
            case TABLES:
            case BROADCAST:
            case MORE:
                title = <div className="header-title">Your Football</div>;
                leftContent = score;
                break;
            case PROFILE:
                title = <div className="header-title">Your Football</div>;
                leftContent = <div/>;
                break;
        }

        return (
            <PanelHeader left={leftContent}>
                {title}
            </PanelHeader>
        );
    }
}

export default Header;