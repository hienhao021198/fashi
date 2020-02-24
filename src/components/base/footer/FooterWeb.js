import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterCopyright from './FooterCopyright';
class FooterWeb extends Component {
    render() {
        return (
            <div className="footer-section">
                <FooterTop />
                <FooterCopyright />
           </div>
        );
    }
}

export default FooterWeb;