import React, {Component} from 'react';
import {Slide} from 'react-slideshow-image';
import {Row, Col} from 'antd';
import './css/SlideProductCss.css';

const slideImages = [
    '../images/hero-1.jpg',
    '../images/hero-2.jpg'
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    /* onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }*/
};

class SlideProduct extends Component {
    render () {
        return(
            <div className="slide-product">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{
                            backgroundImage : `url(${slideImages[0]})`,
                            backgroundSize: "cover",
                            height: "700px",
                        }}>
                            <Row className="main-content">
                                <Col span={24}>
                                    <Row type="flex" justify="center">
                                        <Col span={15} className="swap-content">
                                            <p className='title-1'>BAG.KIDS</p>
                                            <h1 className='head'>Black friday</h1>
                                            <p className='title-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                            <button className='show-shop'>SHOP NOW</button>
                                            <div className="sale-product">
                                                <h2>SALE 50%</h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{
                            backgroundImage : `url(${slideImages[1]})`,
                            backgroundSize: "cover",
                            height: "700px"
                        }}>
                            <Row className="main-content">
                                <Col span={24}>
                                    <Row type="flex" justify="center">
                                        <Col span={15}>
                                            <p className='title-1'>BAG.KIDS</p>
                                            <h1 className='head'>Black friday</h1>
                                            <p className='title-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                            <button className='show-shop'>SHOP NOW</button>
                                            <div className="sale-product">
                                                <h2>SALE 50%</h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Slide>
            </div>
        );
    }
}

export default SlideProduct;