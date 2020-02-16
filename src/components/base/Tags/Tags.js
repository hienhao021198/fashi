import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Tags extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="filter-widget">
                        <h4 className="fw-title">Tags</h4>
                        <div class="fw-tags">
                            <Link to="#">Towel</Link>
                            <Link to="#">Shoes</Link>
                            <Link to="#">Coat</Link>
                            <Link to="#">Dresses</Link>
                            <Link to="#">Trousers</Link>
                            <Link to="#">Men's hats</Link>
                            <Link to="#">Backpack</Link>
                        </div>
                    </div>
                
            </React.Fragment>
        )
    }
}

export default Tags
