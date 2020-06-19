import {connect} from 'react-redux';
import More from '../components/More/More';
import navigationPanel from '../action/navigation';

function mapStateToProps (state) {
    return {
        isLoader: state.isLoader,
    };
}

const mapDispatchToProps = dispatch => ({
    navigationPanel: path => dispatch(navigationPanel(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(More);