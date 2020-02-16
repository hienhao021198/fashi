import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <React.Fragment>
                   <div className="col-lg-6 col-sm-6">
                            <div className="blog-item">
                                <div className="bi-pic">
                                    <img src="img/blog/blog-1.jpg" alt=""/>
                                </div>
                                <div className="bi-text">
                                    <a href="./blog-details.html">
                                        <h4>The Personality Trait That Makes People Happier</h4>
                                    </a>
                                    <p>travel <span>- May 19, 2019</span></p>
                                </div>
                            </div>
                        </div>
            </React.Fragment>
        )
    }
}
