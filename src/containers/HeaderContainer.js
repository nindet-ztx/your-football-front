import {connect} from 'react-redux';
import Header from '../components/Header/Header';
import navigationPanel from '../action/navigation';

const mapStateToProps = state => ({
    activePanel: state.activePanel,
    profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
    navigationPanel: path => dispatch(navigationPanel(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);