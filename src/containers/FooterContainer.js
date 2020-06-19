import {connect} from 'react-redux';
import navigationPanel from '../action/navigation';
import Footer from '../components/Footer/Footer';

function mapStateToProps (state) {

    return {
        activePanel: state.activePanel,
    };
}

const mapDispatchToProps = dispatch => ({
    navigationPanel: path => dispatch(navigationPanel(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);