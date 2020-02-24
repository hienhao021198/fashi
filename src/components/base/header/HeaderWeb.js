import React, {Component} from 'react';

// component
import HeaderTop from './HeaderTop';
import HeaderContent from './HeaderContent';
import NavItem from './NavItem';

class HeaderWeb extends Component {
    render() {
        return(
              
    <header className="header-section">
        <HeaderTop/>
        <HeaderContent/>
        <NavItem/>
    
   
    </header>
        );
    }
}

export default HeaderWeb;