import React, {Component} from 'react';
import { BrowserRouter as Link} from 'react-router-dom';
class HeaderTop extends Component {
    render() {
        return (

            <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className=" fa fa-envelope"></i>
                        adminpage@gmail.com
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone"></i>
                        0988.888.888
                    </div>
                </div>
                <div className="ht-right">
                    
                    <div className="lan-selector">
                        <select className="language_drop" name="countries" id="countries" style={{ width: 300 }}>
                            <option value='yt' data-image="img/flag-1.jpg" data-imagecss="flag yt"
                                data-title="English">English</option>
                            <option value='yu' data-image="img/flag-2.jpg" data-imagecss="flag yu"
                                data-title="Bangladesh">German </option>
                        </select>
                    </div>
                    <div className="top-social">
                        <Link to="#"><i className="ti-facebook"></i></Link>
                        <Link to="#"><i className="ti-twitter-alt"></i></Link>
                        <Link to="#"><i className="ti-linkedin"></i></Link>
                        <Link to="#"><i className="ti-pinterest"></i></Link>
                    </div>
                </div>
            </div>
        </div>
            
        );
    }
}

export default HeaderTop;