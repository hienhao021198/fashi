import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Icon} from 'antd';
import './css/InstargramPhotoCss.css';

class InstargramPhoto extends Component{
    render() {
        const {instargramPhotos} = this.props;
        return(
            <Row className="instargram-photo">
                {
                    instargramPhotos.map((item, index) => {
                        return <Col key={index} span={4} className="inst-item">
                            <img src={"./images/"+item+".jpg"} width="100%" height="auto" alt="anh"/>
                            <div className="background"></div>
                            <Icon type="instagram"  className="inst-icon"/>
                        </Col>
                    })
                }
            </Row>
        );
    }
}

InstargramPhoto.propTypes = {
    instargramPhotos: PropTypes.array,
};

InstargramPhoto.defaultProps = {
    instargramPhotos: [],
};

export default InstargramPhoto;