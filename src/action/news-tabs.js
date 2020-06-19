import {ACTIVE_NEWS_TABS} from '../constants/helper';

const activatingNewsTabs = activeNewsTabs => {
    return {
        type: ACTIVE_NEWS_TABS,
        payload: activeNewsTabs,
    };
};
export default activatingNewsTabs;
