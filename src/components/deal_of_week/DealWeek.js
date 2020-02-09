import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Countdown from 'react-countdown-now';

// styles
import './css/DealWeekCss.css'

class DealWeek extends Component {

    renderer = ({days, hours, minutes, seconds, completed,}) => {
        return <Row type="flex" justify="center" className="countdown-timer">
            <Col span={4}>
                <div className="timer">
                    <p>{days}</p>
                    <p>DAYS</p>
                </div>
            </Col>
            <Col span={4} >
                <div className="timer">
                    <p>{hours}</p>
                    <p>HRS</p>
                </div>
            </Col>
            <Col span={4}>
                <div className="timer">
                    <p>{minutes}</p>
                    <p>MINS</p>
                </div>
            </Col>
            <Col span={4}>
                <div className="timer">
                    <p>{seconds}</p>
                    <p>SECS</p>
                </div>
            </Col>
        </Row>

    };

    render() {
        return (
            <Row className="deal-week" type="flex" justify="center">
                <Col span={23}>
                    <Row style={{backgroundImage: "url(./images/time-bg.jpg)", backgroundSize: "cover"}}>
                        <Col span={8} offset={4} className="main-content">
                            <Row className="section-title">
                                <Col span={24}>
                                    <h2 className="head"> Deal Of The Week</h2>
                                    <hr/>
                                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed  do ipsum dolor sit amet, consectetur adipisicing elit </p>
                                    <p className="product-price">$35.00 <span>/HanBag</span></p>
                                </Col>
                            </Row>
                            <Row className="countdown-timer">
                                <Col span={24}>
                                    <Countdown
                                        date={Date.now() + 1000000000}
                                        renderer={this.renderer}
                                    />
                                </Col>
                            </Row>
                            <Row className="button-shop">
                                <button>SHOP NOW</button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default DealWeek;