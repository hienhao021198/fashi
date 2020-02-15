import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch, useParams } from 'react-router-dom';
import FooterWeb from '../components/base/footer/FooterWeb';
import HeaderWeb from '../components/base/header/HeaderWeb';
export class SingIn extends Component {
    render() {
        return (
            <div>
                <HeaderWeb />
                <div className="breacrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-text">
                                    <a href="#"><i className="fa fa-home"></i> Home</a>
                                    <span>Login</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="register-login-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="login-form">
                                    <h2>Login</h2>
                                    <form action="#">
                                        <div className="group-input">
                                            <label for="username">Username or email address *</label>
                                            <input type="text" id="username" />
                                        </div>
                                        <div className="group-input">
                                            <label for="pass">Password *</label>
                                            <input type="text" id="pass" />
                                        </div>
                                        <div className="group-input gi-check">
                                            <div className="gi-more">
                                                <label for="save-pass">
                                                    Save Password
                                        <input type="checkbox" id="save-pass" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a href="#" className="forget-pass">Forget your Password</a>
                                            </div>
                                        </div>
                                        <button type="submit" className="site-btn login-btn">Sign In</button>
                                    </form>
                                    <div className="switch-login">
                                        <a href="./register.html" className="or-login">Or Create An Account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterWeb />
            </div>
        )
    }
}

export default SingIn
