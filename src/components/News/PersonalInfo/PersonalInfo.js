import React, {Component} from 'react';
import './PersonalInfo.less';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {PROFILE} from '../../../constants/navigation';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onTrip = () => {
        document.getElementById('root').classList.add('mode-allcash');
    };

    render() {
        if (!this.props.profile) return <div className='personal-info__layout'/>;

        return (
            <div>
                <div className="personal-info__layout">
                    <div className="personal-info__name">
                        <div>{this.props.profile.first_name}</div>
                        <div>{this.props.profile.last_name}</div>
                    </div>
                    <div onClick={() => this.props.navigationPanel(PROFILE)} id='personal'
                        className="personal-info__avatar">
                        <Avatar className="personal-avatar-img"
                            src={this.props.profile.photo} size={72}/>
                    </div>
                    <div className="personal-info__rank">{this.props.profile.rank_name}</div>
                </div>
                <div className="progress-striped">
                    <div className="progress-bar" style={{width: `${this.props.profile.experience_percent}%`}}/>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;