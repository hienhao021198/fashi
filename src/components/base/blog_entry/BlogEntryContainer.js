import {connect} from 'react-redux';

// component
import BlogEntry from "./BlogEntry";

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const BlogEntryContainer = connect(mapStateToProps, mapDispatchToProps)(BlogEntry);

export default BlogEntryContainer;