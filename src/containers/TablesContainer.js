import {connect} from 'react-redux';
import Tables from '../components/Tables/Tables';
import navigationPanel from '../action/navigation';

function mapStateToProps (state) {
    return {
        isLoader: state.isLoader,
    };
}

const mapDispatchToProps = dispatch => ({
    navigationPanel: path => dispatch(navigationPanel(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);