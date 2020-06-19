import React, {Component} from 'react';
import {View, Panel, Epic} from '@vkontakte/vkui';
import {Welcome, News, Broadcast, Tables, More, Comments, Header, Footer, Profile} from '../containers';
import {WELCOME, NEWS, COMMENTS, BROADCAST, TABLES, MORE, PROFILE} from '../constants/navigation';
import '@vkontakte/vkui/dist/vkui.css';
import './core/Common.less';
import './core/Reset.less';
import './core/vkui.less';
import './core/Animation.less';

class App extends Component {

    render() {
        return (
            <Epic tabbar={<Footer/>}>
                <View activePanel={this.props.activePanel}>
                    <Panel id={WELCOME}>
                        <Header/>
                        <Welcome/>
                    </Panel>

                    <Panel id={NEWS}>
                        <Header/>
                        <News/>
                    </Panel>

                    <Panel id={COMMENTS}>
                        <Header/>
                        <Comments/>
                    </Panel>

                    <Panel id={BROADCAST}>
                        <Header/>
                        <Broadcast/>
                    </Panel>

                    <Panel id={TABLES}>
                        <Header/>
                        <Tables/>
                    </Panel>

                    <Panel id={MORE}>
                        <Header/>
                        <More/>
                    </Panel>

                    <Panel id={PROFILE}>
                        <Header/>
                        <Profile/>
                    </Panel>
                </View>
            </Epic>
        );
    }
}

export default App;