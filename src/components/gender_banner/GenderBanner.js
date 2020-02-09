import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';
import {Row, Col, Icon, Menu} from 'antd';

// component
import ProductContainer from '../base/Product/ProductContainer';

// styles
import "./css/GenderBannerCss.css";

class GenderBanner extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            responsive: {
                1024: {items: 3}
                },
            galleryItems: this.galleryItems(),
        };
    };

    slideTo = (i) => this.setState({ currentIndex: i });

    onSlideChanged = (e) => this.setState({ currentIndex: e.item});

    slideNext = () => this.setState((prevState) => ({currentIndex: prevState.currentIndex + 1}));

    slidePrev = () => this.setState((prevState) => ({currentIndex: prevState.currentIndex - 1}));

    thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>*</span>;

    galleryItems = () => {
        const {gender} = this.props;
        const items = gender === "women" ? ["women-1", "women-2", "women-3", "women-4"] : ["man-1", "man-2", "man-3", "man-4"];
        return items.map((image, i) => <ProductContainer key={i} image={image}/>)
    };

    render() {
        const {galleryItems, responsive, currentIndex} = this.state;
        const {gender} = this.props;
        const link = `./images/${gender}-large.jpg`;
        return (
            <Row type="flex" justify="center" className="gender-banner">
                <Col span={23}>
                    <Row className="content" type="flex">
                        <Col span={6} className="logo" order={gender === "women" ? 1 : 2}>
                            <img src={link} width="100%" height="auto" alt="anh"/>
                            <div>
                                <h2>{gender === 'women' ? "Women's" : "Men's"}</h2>
                                <p> Discover More</p>
                            </div>
                        </Col>
                        <Col span={17} offset={1} className="main-content" order={gender === "women" ? 2 : 1}>
                            <Row className="menu">
                                <Col span={24}>
                                    <Menu mode="horizontal">
                                        <Menu.Item>Clothings</Menu.Item>
                                        <Menu.Item disabled>HandBag</Menu.Item>
                                        <Menu.Item>Shoes</Menu.Item>
                                        <Menu.Item disabled>Accessories</Menu.Item>
                                    </Menu>
                                </Col>
                            </Row>
                            <Row className="slide-show" type="flex" align="middle">
                                <Col span={1} className="button button-prew">
                                    <button onClick={() => this.slidePrev()}><Icon type="left" /></button>
                                </Col>
                                <Col span={22}>
                                    <AliceCarousel
                                        duration={3000}
                                        autoPlay={true}
                                        dotsDisabled={true}
                                        buttonsDisabled={true}
                                        items={galleryItems}
                                        responsive={responsive}
                                        slideToIndex={currentIndex}
                                        onSlideChanged={this.onSlideChanged}
                                    />
                                </Col>
                                <Col span={1} className="button button-next">
                                    <button onClick={() => this.slideNext()}><Icon type="right" /></button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

GenderBanner.propTypes = {
    gender: PropTypes.string,
};

GenderBanner.defaultProps = {
    gender: "women",
};

export default GenderBanner;