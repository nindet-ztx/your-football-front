import {connect} from 'react-redux';
import Profile from '../components/Profile/Profile';
import navigationPanel from '../action/navigation';
import {profileFetchData} from '../action';

const mapStateToProps = state => ({
    profile: state.profile,
    isLoader: state.isLoader,
});

const mapDispatchToProps = dispatch => ({
    navigationPanel: path => dispatch(navigationPanel(path)),
    profileFetchData: url => dispatch(profileFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);