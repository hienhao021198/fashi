import {connect} from 'react-redux';
import InstargramPhoto from './InstargramPhoto';

function mapStateToProps(state, ownProps) {
    const instargramPhotos = ["insta-1", "insta-2", "insta-3", "insta-4", "insta-5", "insta-6",];
    return {
        instargramPhotos,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

const InstargramPhotoContainer = connect(mapStateToProps, mapDispatchToProps)(InstargramPhoto);

export default InstargramPhotoContainer;