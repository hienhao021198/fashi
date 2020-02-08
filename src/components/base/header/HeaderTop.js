import React, {Component} from 'react';

class HeaderTop extends Component {
    render() {
        return (

            <div className="header-top">
                <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                    <i className=" fa fa-envelope" />
                    adminpage@gmail.com
                    </div>
                    <div className="phone-service">
                    <i className=" fa fa-phone" />
                    0988.888.888
                    </div>
                </div>
                <div className="ht-right">
                    <a href="#" className="login-panel"><i className="fa fa-user" />Login</a>
                    <div className="lan-selector">
                    <select className="language_drop" name="countries" id="countries" style={{width: '300px'}}>
                        <option value="yt" data-image="img/flag-1.jpg" data-imagecss="flag yt" data-title="English">English</option>
                        <option value="yu" data-image="img/flag-2.jpg" data-imagecss="flag yu" data-title="Bangladesh">German </option>
                    </select>
                    </div>
                    <div className="top-social">
                    <a href="#"><i className="ti-facebook" /></a>
                    <a href="#"><i className="ti-twitter-alt" /></a>
                    <a href="#"><i className="ti-linkedin" /></a>
                    <a href="#"><i className="ti-pinterest" /></a>
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default HeaderTop;