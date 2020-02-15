import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterTop extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-left">
                  <div className="footer-logo">
                    <Link to="#"><img src="img/footer-logo.png" alt="anh" /></Link>
                  </div>
                  <ul>
                    <li>Address: HaNoi City - VietNam</li>
                    <li>Phone: +84988.888.888</li>
                    <li>Email:adminpage@gmail.com</li>
                  </ul>
                  <div className="footer-social">
                    <Link to="#"><i className="fa fa-facebook" /></Link>
                    <Link to="#"><i className="fa fa-instagram" /></Link>
                    <Link to="#"><i className="fa fa-twitter" /></Link>
                    <Link to="#"><i className="fa fa-pinterest" /></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1">
                <div className="footer-widget">
                  <h5>Information</h5>
                  <ul>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Checkout</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li><Link to="#">Serivius</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <h5>My Account</h5>
                  <ul>
                    <li><Link to="#">My Account</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li><Link to="#">Shopping Cart</Link></li>
                    <li><Link to="#">Shop</Link></li>
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