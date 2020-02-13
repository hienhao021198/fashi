import React, { Component } from 'react';
import { Layout } from "antd";
import HeaderWeb from './components/base/header/HeaderWeb';
import FooterWeb from './components/base/footer/FooterWeb';
import SlideProductContainer from './components/slide_product/SlideProductContainer';
import BannerSection from './components/banner_section/BannerSection';
import GenderBannerContainer from './components/gender_banner/GenderBannerContainer';
import DealWeekContainer from './components/deal_of_week/DealWeekContainer';
import LatestBlogContainer from './components/latest_blog/LatestBlogContainer';
import InstargramPhotoContainer from './components/instagram-photo/InstargramPhotoContainer';
const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (

      <div>
        <HeaderWeb />
        <SlideProductContainer />
        <BannerSection />
        <GenderBannerContainer gender={"women"} />
        <DealWeekContainer />
        <GenderBannerContainer gender={"man"} />
        <InstargramPhotoContainer />
        <LatestBlogContainer />
        <FooterWeb />
      </div>

    )
  }
}

export default App;
