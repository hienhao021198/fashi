import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className="filter-widget">
                        <h4 className="fw-title">Categories</h4>
                        <ul className="filter-catagories">
                            <li><Link to="#">Men</Link></li>
                            <li><Link to="#">Women</Link></li>
                            <li><Link to="#">Kids</Link></li>
                        </ul>
                    </div>
            </React.Fragment>
        )
    }
}

export default Categories
