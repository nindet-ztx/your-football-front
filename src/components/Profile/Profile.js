import React, {Component} from 'react';
import './Profile.less';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Loader from '../core/Loader/Loader';
import {PROFILE} from '../../constants/navigation';
import Tags from '../core/Tags/Tags';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.profileFetchData('profile');
    }

    generateListTags = () => {
        return this.props.profile.tags.map(tags => <Tags key={tags.id} img={tags.img}/>);
    };


    render() {
        if (this.props.isLoader.profile) return <Loader/>;

        let tags = this.generateListTags();

        return (
            <div className='profile'>
                <div className="profile-info__layout">
                    <div className="profile-info__name">
                        <div>{this.props.profile.first_name}</div>
                        <div>{this.props.profile.last_name}</div>
                    </div>
                    <div className="profile-info__avatar">
                        <Avatar className="profile-avatar-img"
                            src={this.props.profile.photo} size={72}/>
                    </div>
                    <div className="profile-info__rank">{this.props.profile.rank_name}</div>
                </div>
                <div className="profile__progress-striped">
                    <div className="profile__progress-bar" style={{width: `${this.props.profile.experience_percent}%`}}/>
                </div>
                <div className='profile__body'>
                    <div className='profile__standard'>YF Coin: <div className='profile__standard-coins'>{this.props.profile.yf_coins}</div></div>
                    <div className='profile__standard'>Ваши тэги: {tags}</div>
                    <div className='profile__standard'>Ранги</div>
                    <div className='profile__standard'>Викторина</div>
                </div>
            </div>
        );
    }
}

export default Profile;