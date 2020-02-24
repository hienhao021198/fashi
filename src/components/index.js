import React, { Component } from 'react';
import HeaderWeb from './base/header/HeaderWeb';
import FooterWeb from './base/footer/FooterWeb';
import SlideProductContainer from './slide_product/SlideProductContainer';
import BannerSection from './banner_section/BannerSection';
import GenderBannerContainer from './gender_banner/GenderBannerContainer';
import DealWeekContainer from './deal_of_week/DealWeekContainer';
import LatestBlogContainer from './latest_blog/LatestBlogContainer';
import InstargramPhotoContainer from './instagram-photo/InstargramPhotoContainer';



class index extends Component {
  render() {
    return (
        <React.Fragment>
            <HeaderWeb />
            <SlideProductContainer />
            <BannerSection />
            <GenderBannerContainer gender={"women"} />
            <DealWeekContainer />
            <GenderBannerContainer gender={"man"} />
            <InstargramPhotoContainer />
            <LatestBlogContainer />
            <FooterWeb />
      </React.Fragment>
    )
  }
}

export default index;
