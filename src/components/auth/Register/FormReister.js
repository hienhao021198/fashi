import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class FormReister extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="register-login-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="register-form">
                                    <h2>Register</h2>
                                    <form action="#">
                                        <div className="group-input">
                                            <label for="username">Username or email address *</label>
                                            <input type="text" id="username" />
                                        </div>
                                        <div className="group-input">
                                            <label for="pass">Password *</label>
                                            <input type="text" id="pass" />
                                        </div>
                                        <div className="group-input">
                                            <label for="con-pass">Confirm Password *</label>
                                            <input type="text" id="con-pass" />
                                        </div>
                                        <button type="submit" className="site-btn register-btn">REGISTER</button>
                                    </form>
                                    <div className="switch-login">
                                        <Link to="/login" className="or-login">Or Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FormReister
