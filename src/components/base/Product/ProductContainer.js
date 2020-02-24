import {connect} from 'react-redux';
import Product from './Product';


function mapStateTpProps(state, ownProps) {
    const {image} = ownProps;
    return {
        image,
    };
}

function mapDispatchToProps(state, ownProps) {
    return {};
}

const ProductContainer = connect(mapStateTpProps, mapDispatchToProps)(Product);

export default ProductContainer;