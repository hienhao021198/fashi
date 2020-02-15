import React, { Component } from 'react'
import HeaderWeb from '../../base/header/HeaderWeb';
import FooterWeb from '../../base/footer/FooterWeb';
import FormReister from './FormReister';
import RegisterTop from '../../base/BreacrumbSection/BreacrumbSection'; 
export class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderWeb/>
               <RegisterTop />
                <FormReister/>
                <FooterWeb/>
            </React.Fragment>
        )
    }
}

export default Register
