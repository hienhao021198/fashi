import React, {Component} from 'react';
import {Row, Col, Icon} from 'antd';
import PropTypes from 'prop-types';

// styles
import './css/EntryCss.css';

class BlogEntry extends Component {
    render() {
        const {image} = this.props;
        const link = `./images/${image}.jpg`;
        return (
            <Row className="entry">
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <img src={link} width="100%" height="auto" alt="anh"/>
                        </Col>
                    </Row>
                    <Row className="infor-entry">
                        <Col span={24}>
                            <div>
                                <Icon type="calendar" className="date-icon" />
                                <p className="date">May 4, 2019</p>
                                <Icon type="message" className="cmt-icon" />
                                <p className="cmt">5</p>
                            </div>
                            <h2 className="entry-name">The Best Street Style From London Fashion Week</h2>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

BlogEntry.propTypes = {
    image: PropTypes.string,
};

export default BlogEntry;