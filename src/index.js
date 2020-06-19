import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './containers/AppContainer';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

bridge.send('VKWebAppInit', {});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

