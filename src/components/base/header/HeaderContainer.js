import {connect} from 'react-redux';

// component
import HeaderWeb from './HeaderWeb';

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderWeb);

export default HeaderContainer;
