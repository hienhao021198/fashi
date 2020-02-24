import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
export default class ItemNav extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Link to="#" classNams="rb-item">
                    <div classNams="rb-pic">
                        <img src="img/blog/recent-1.jpg" alt="anh" />
                    </div>
                    <div classNams="bi-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>Fashion <span>- May 19, 2019</span></p>
                    </div>
                </Link> */}
                <a href="#" className="rb-item">
                    <div className="rb-pic">
                        <img src="img/blog/recent-1.jpg" alt="" />
                    </div>
                    <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>Fashion <span>- May 19, 2019</span></p>
                    </div>
                </a>
               
            </React.Fragment>
        )
    }
}
