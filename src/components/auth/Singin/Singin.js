import React, { Component } from 'react';
import HeaderWeb from '../../base/header/HeaderWeb';
import FooterWeb from '../../base/footer/FooterWeb';
import SinginTop from '../../base/BreacrumbSection/BreacrumbSection';
import FormSingIn from './FormSingIn';

export class Singin extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderWeb/>
                <SinginTop/>
                <FormSingIn/>
                <FooterWeb/>
            </React.Fragment>
        )
    }
}

export default Singin