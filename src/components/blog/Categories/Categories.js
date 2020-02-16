import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Categories extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="blog-catagory">
                    <h4>Categories</h4>
                    <ul>
                        <li><Link to="#">Fashion</Link></li>
                        <li><Link to="#">Travel</Link></li>
                        <li><Link to="#">Picnic</Link></li>
                        <li><Link to="#">Model</Link></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
