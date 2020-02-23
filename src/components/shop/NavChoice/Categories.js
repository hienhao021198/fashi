import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const catagories = [
    {
        id: 1,
        name: "Men",
        linkTo: '/shop-men'
    },
    {
        id: 2,
        name: "Women",
        linkTo: '/shop-women'
    },
    {
        id: 3,
        name: "Kids",
        linkTo: '/shop-kid'
    },
];
class Categories extends Component {
    showCatories = (catagories) => {
        let result = null;
        if(catagories.length > 0) {
            result  = catagories.map((catagory,index) => {
                return (
                    <li key = {index}><Link to={catagory.linkTo}>{catagory.name}</Link></li>
                );
            });
        }
        return result;
    };
    render() {
        return (
            <React.Fragment>
                 <div className="filter-widget">
                        <h4 className="fw-title">Categories</h4>
                        <ul className="filter-catagories">
                            {this.showCatories(catagories)}
                           
                        </ul>
                    </div>
            </React.Fragment>
        )
    }
}

export default Categories
