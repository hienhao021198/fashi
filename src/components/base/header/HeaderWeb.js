import React, {Component} from 'react';

// component
import HeaderTop from './HeaderTop';
import HeaderContent from './HeaderContent';
import NavItem from './NavItem';

class HeaderWeb extends Component {
    render() {
        return(
            <div>
                <HeaderTop />
                <HeaderContent />
                <NavItem />
            </div>
        );
    }
}

export default HeaderWeb;