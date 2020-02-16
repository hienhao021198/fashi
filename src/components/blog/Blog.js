import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import HeaderWeb from '../base/header/HeaderWeb'
import FooterWeb from '../base/footer/FooterWeb'
import BreacrumbSection from '../base/BreacrumbSection/BreacrumbSection';
import BlogEntry from '../base/blog_entry/BlogEntry';
import Tags from '../base/Tags/Tags';
import LoadMore from '../shop/LoadMore/LoadMore';
import Categories from '../shop/NavChoice/Categories';
import Search from './Search/Search';
import ItemBlog from './Item/ItemBlog';
import ItemNav from './Item/ItemNav';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderWeb />
                <BreacrumbSection />
                <section class="blog-section spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1">
                                <div class="blog-sidebar">
                                    <Search />
                                    <Categories />

                                    {/* <div class="recent-post">
                                        <h4>Recent Post</h4>
                                        <div class="recent-blog">
                                           
                                            <ItemNav/>
                                            <ItemNav/>
                                            <ItemNav/>
                                           
                                        </div>
                                    </div> */}
                                    <div class="recent-post">
                            <h4>Recent Post</h4>
                            <div class="recent-blog">
                               <ItemNav/>
                               <ItemNav/>
                               <ItemNav/>
                            </div>
                        </div>
                                    <div class="blog-tags">
                                        <Tags />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 order-1 order-lg-2">
                                <div class="row">
                                   <ItemBlog />
                                   <ItemBlog />
                                   <ItemBlog />
                                   <ItemBlog />
                                   <ItemBlog />
                                   <ItemBlog />
                                    {/* <BlogEntry />
                                    <BlogEntry />
                                    <BlogEntry />
                                    <BlogEntry />
                                    <BlogEntry />
                                    <BlogEntry /> */}





                                    <div class="col-lg-12">
                                        <LoadMore />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterWeb />
            </React.Fragment>
        )
    }
}

export default Blog;
