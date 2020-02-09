import {connect} from 'react-redux';

// component
import GenderBanner from './GenderBanner';

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const GenderBannerContainer = connect(mapStateToProps, mapDispatchToProps)(GenderBanner);

export default GenderBannerContainer;