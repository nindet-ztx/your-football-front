import {connect} from 'react-redux';
import App from '../components/App';
import navigationPanel from '../action/navigation';

const mapStateToProps = state => ({
    activePanel: state.activePanel,
});

const mapDispatchToProps = dispatch => ({
    navigationPanel: path => dispatch(navigationPanel(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);