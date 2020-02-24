import React, { Component } from 'react';
import HeaderWeb from '../../base/header/HeaderWeb';
import FooterWeb from '../../base/footer/FooterWeb';
import Brand from '../NavChoice/Brand';
import Size from '../NavChoice/Size';
import Sort from '../Sort/Sort';
import Product from '../Product/Product';
import DetailShowProduct from '../DetailShowProduct/DetailShowProduct';
import LoadMore from '../LoadMore/LoadMore';
import BreacrumbSection from '../../base/BreacrumbSection/BreacrumbSection';
class ShopKid extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderWeb />
                <BreacrumbSection />
                <section class="product-shop spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">

                                <Brand />
                                {/* <Price />
                                <Color /> */}
                                <Size />

                            </div>
                            <div class="col-lg-9 order-1 order-lg-2">
                                <div class="product-show-option">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-7">
                                            <Sort />
                                        </div>
                                        <DetailShowProduct />
                                    </div>
                                </div>
                                <div class="product-list">
                                    <div class="row">
                                        <Product id={1} />
                                        <Product id={2} />
                                        <Product id={3} />
                                        <Product id={4} />
                                        <Product id={5} />
                                        <Product id={6} />
                                        <Product id={7} />
                                        <Product id={8} />
                                        <Product id={9} />

                                    </div>
                                </div>
                                <LoadMore />
                            </div>
                        </div>
                    </div>
                </section>
                <FooterWeb />
            </React.Fragment>
        )
    }
}

export default ShopKid;
