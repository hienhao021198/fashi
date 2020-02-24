import React, { Component } from 'react';
import { BrowserRouter as Route, Link, NavLink } from 'react-router-dom';

class NavItem extends Component {
    render() {
        const active = {
            color: '#ffffff',
            backgroundColor: '#e7ab3c'
        }
        return (
            <div className="nav-item" style={{height: '52px'}}>
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu"></i>
                        <span>All departments</span>
                        <ul className="depart-hover">
                            <li className="active"><Link to="#">Women’s Clothing</Link></li>
                            <li><Link to="shop-men">Men’s Clothing</Link></li>
                            <li><Link to="#">Underwear</Link></li>
                            <li><Link to="#">Kid's Clothing</Link></li>
                            <li><Link to="#">Brand Fashion</Link></li>
                            <li><Link to="#">Luxury Brands</Link></li>
                        </ul>
                    </div>
                </div>
                <nav className="nav-menu mobile-menu">
                    <ul>
                        <li><NavLink exact={true} activeStyle={active} to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={active} to="/shop">Shop</NavLink></li>
                        <li><NavLink activeStyle={active} to="/collection">Collection</NavLink>
                            <ul className="dropdown">
                                <li><Link to="/shop-men">Men's</Link></li>
                                <li><Link to="/shop-women">Women's</Link></li>
                                <li><Link to="/shop-kid">Kid's</Link></li>
                            </ul>
                        </li>
                        <li><Link to="./blog">Blog</Link></li>
                        <li><Link to="./contact">Contact</Link></li>
                        <li><Link to="#">Pages</Link>
                            <ul className="dropdown">
                                <li><Link to="/blog-details">Blog Details</Link></li>
                                <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                                <li><Link to="/check-out">Checkout</Link></li>
                                <li><Link to="/faq">Faq</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>
        );
    }
}

export default NavItem;