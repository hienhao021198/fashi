import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './css/BannerSectionCss.css';

class BannerSection extends Component {
    render () {
        return(
            <Row type="flex" justify="center" className="banner-section">
                <Col span={23}>
                    <Row className="content">
                        <Col span={8}>
                            <img src="./images/banner-1.jpg" width="100%" height="auto" alt="anh"/>
                            <div className="inner-text">
                                <h3>Men's</h3>
                            </div>
                            <div className="transition"></div>
                        </Col>
                        <Col span={8}>
                            <img src="./images/banner-2.jpg" width="100%" height="auto" alt="anh"/>
                            <div className="inner-text">
                                <h3>Women's</h3>
                            </div>
                            <div className="transition"></div>
                        </Col>
                        <Col span={8}>
                            <img src="./images/banner-3.jpg" width="100%" height="auto" alt="anh"/>
                            <div className="inner-text">
                                <h3>Kid's</h3>
                            </div>
                            <div className="transition"></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default BannerSection;