import React, { Component } from 'react';

class FooterTop extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-left">
                  <div className="footer-logo">
                    <a href="#"><img src="img/footer-logo.png" alt="anh" /></a>
                  </div>
                  <ul>
                    <li>Address: HaNoi City - VietNam</li>
                    <li>Phone: +84988.888.888</li>
                    <li>Email:adminpage@gmail.com</li>
                  </ul>
                  <div className="footer-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1">
                <div className="footer-widget">
                  <h5>Information</h5>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Checkout</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Serivius</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <h5>My Account</h5>
                  <ul>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Shopping Cart</a></li>
                    <li><a href="#">Shop</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="newslatter-item">
                  <h5>Join Our Newsletter Now</h5>
                  <p>Get E-mail updates about our latest shop and special offers.</p>
                  <form action="#" className="subscribe-form">
                    <input type="text" placeholder="Enter Your Mail" />
                    <button type="button">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default FooterTop;