import {connect} from 'react-redux';
import Broadcast from '../components/Broadcast/Broadcast';
import navigationPanel from '../action/navigation';

function mapStateToProps (state) {
    return {
        isLoader: state.isLoader,
    };
}

const mapDispatchToProps = dispatch => ({
    navigationPanel: path => dispatch(navigationPanel(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Broadcast);