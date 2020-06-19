import React, {Component} from 'react';
import './More.less';
import Loader from '../core/Loader/Loader';
import Icon24LogoLivejournal from '@vkontakte/icons/dist/24/logo_livejournal';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';

class More extends Component {

    render() {
        if (this.props.isLoader.more) return <Loader/>;

        return (
            <div className="more">
                <div className='more__standard'>
                    <div className='more__standard-img'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="1 1 26 26" id="prifle_28">
                            <g fill="none">
                                <path d="M0 0h28v28H0z"/>
                                <path d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 18.5c-2.086 0-4.08.582-5.797 1.649A9.952 9.952 0 0 0 14 24c2.16 0 4.161-.685 5.796-1.85A10.94 10.94 0 0 0 14 20.5zM14 4C8.477 4 4 8.477 4 14a9.964 9.964 0 0 0 2.648 6.779A12.934 12.934 0 0 1 14 18.5c2.67 0 5.215.808 7.353 2.277A9.962 9.962 0 0 0 24 14c0-5.523-4.477-10-10-10zm0 3.5a4.749 4.749 0 0 1 4.75 4.75A4.749 4.749 0 0 1 14 17a4.749 4.749 0 0 1-4.75-4.75A4.749 4.749 0 0 1 14 7.5zm0 2c-1.52 0-2.75 1.23-2.75 2.75S12.48 15 14 15s2.75-1.23 2.75-2.75S15.52 9.5 14 9.5z"
                                    fill="white"/>
                            </g>
                        </svg>
                    </div>
                    <div className='more__standard-text'>Профиль</div>
                </div>

                <div className='more__standard'>
                    <div className='more__standard-img'>
                        <Icon24LogoLivejournal/>
                    </div>
                    <div className='more__standard-text'>Предложить публикацию</div>
                </div>

                <div className='more__standard'>
                    <div className='more__standard-img'>
                        <Icon28GhostOutline/>
                    </div>
                    <div className='more__standard-text'>Предложения и идеи</div>
                </div>

                <div className='more__standard'>
                    <div className='more__standard-img'>
                        <Icon28Users/>
                    </div>
                    <div className='more__standard-text'>Сотрудничество</div>
                </div>

                <div className='more__standard'>
                    <div className='more__standard-img'>
                        <Icon28HelpOutline/>
                    </div>
                    <div className='more__standard-text'>Жалобы и вопросы</div>
                </div>

                <div className='more__info'>
                    <div className='more__info-text'>
                        Текущая версия приложения Alpha 1.01 <br/>
                        Было добавлено...<br/>
                        Было исправлено...<br/>
                        В следующее планируется добавить...<br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default More;