import React, { Component } from 'react'
import SinginApp from '../../../components/auth/singin/Singin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export class SingIn extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/singin">
                        <SinginApp />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default SingIn

