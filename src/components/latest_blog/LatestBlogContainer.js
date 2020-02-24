import {connect} from 'react-redux';

// component
import LatestBlog from './LatestBlog';

function mapStateToProps(state, ownProps) {
    const blogEntry = ["latest-1", "latest-2", "latest-3"];
    return {
        blogEntry,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

const LatestBlogContainer = connect(mapStateToProps, mapDispatchToProps)(LatestBlog);

export default LatestBlogContainer;