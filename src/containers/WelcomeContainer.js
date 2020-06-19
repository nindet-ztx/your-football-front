import {connect} from 'react-redux';
import Welcome from '../components/Welcome/Welcome';
import {authorization} from '../action';

const mapStateToProps = state => ({
    isLoader: state.isLoader,
});

const mapDispatchToProps = dispatch => ({
    authorization: url => dispatch(authorization(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);