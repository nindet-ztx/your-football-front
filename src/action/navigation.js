import {ACTIVE_PANEL} from '../constants/navigation';

const navigationPanel = activePanel => {
    return {
        type: ACTIVE_PANEL,
        payload: activePanel,
    };
};
export default navigationPanel;
