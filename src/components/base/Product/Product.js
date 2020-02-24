import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Icon} from 'antd';

// styles
import './css/ProductCss.css';

class Product extends Component {
    render() {
        const {image} = this.props;
        const link = `./images/${image}.jpg`;
        return (
            <Row className="product">
                <Col span={24}>
                    <Row>
                        <Col span={24} className="product-view">
                            <img src={link} width="100%" height="auto" alt="a"/>
                            <Icon type="heart" className="heart"/>
                            <p className="sale">sale</p>
                            <Row className="action">
                                <Col span={4} className="cart"><Icon type="shopping-cart" /></Col>
                                <Col span={15} className="quick-view"><p>+ Quick View</p></Col>
                                <Col span={4} offset={1} className="relation"><Icon type="fork" /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="check">
                        <Col span={24} className="infor-product">
                            <p>SHOSE</p>
                            <h3>Pure Pineapple</h3>
                            <p>$15.00</p>
                        </Col>
                    </Row>
                </Col>

            </Row>
        );
    }
}

Product.propTypes = {
    iamge: PropTypes.string,
};

export default Product;