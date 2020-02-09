import React, { Component } from 'react';

class FooterCopyright extends Component {
    render() {
        return (
            <div className="copyright-reserved">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-text">
                                Design by HNH
                            </div>
                            <div className="payment-pic">
                                <img src="img/payment-method.png" alt="anh" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterCopyright;