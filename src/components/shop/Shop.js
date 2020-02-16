import React, { Component } from 'react';
import HeaderWeb from '../base/header/HeaderWeb';
import FooterWeb from '../base/footer/FooterWeb';
import Categories from './NavChoice/Categories';
import Brand from './NavChoice/Brand';
import Price from './NavChoice/Price';
import Color from './NavChoice/Color';
import Size from './NavChoice/Size';
import Tags from './NavChoice/Tags';
import Sort from './Sort/Sort';
import Product from './Product/Product';
import DetailShowProduct from './DetailShowProduct/DetailShowProduct';
import LoadMore from './LoadMore/LoadMore';
import BreacrumbSection from '../base/BreacrumbSection/BreacrumbSection';
export class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderWeb />
                <BreacrumbSection/>
                <section class="product-shop spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                                <Categories />
                                <Brand />
                                <Price />
                                <Color />
                                <Size />
                                <Tags />
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
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                       
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

export default Shop;
