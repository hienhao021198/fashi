import React, { Component } from 'react';
import {Layout} from "antd";

import HeaderWeb from './components/base/header/HeaderWeb';
import SlideProductContainer from './components/slide_product/SlideProductContainer';
import BannerSection from './components/banner_section/BannerSection';
import GenderBannerContainer from './components/gender_banner/GenderBannerContainer';
import DealWeekContainer from './components/deal_of_week/DealWeekContainer';
import InstargramPhotoContainer from './components/instagram-photo/InstargramPhotoContainer';
import LatestBlogContainer from './components/latest_blog/LatestBlogContainer';
import FooterWeb from './components/base/footer/FooterWeb';

const {Header, Footer, Content} = Layout;
class App extends Component {
  render() {
    return (

        <Layout>
          <Header style={{backgroundColor: "#fff", height: "auto", padding: 0}}>
               <HeaderWeb/>
          </Header>
          <Content style={{backgroundColor: "#fff"}}>
              <SlideProductContainer/>
              <BannerSection/>
              <GenderBannerContainer gender={"women"}/>
              <DealWeekContainer/>
              <GenderBannerContainer gender={"man"}/>
              <InstargramPhotoContainer/>
              <LatestBlogContainer/>
          </Content>
          <Footer style={{backgroundColor: "#191919", padding: 0}}>
                <FooterWeb />
          </Footer>
        </Layout>
     
    )
  }
}

export default App;
