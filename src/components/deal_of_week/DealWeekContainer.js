import {connect} from 'react-redux';

// component
import DealWeek from './DealWeek';

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const DealWeekContainer = connect(mapStateToProps, mapDispatchToProps)(DealWeek);

export default DealWeekContainer;