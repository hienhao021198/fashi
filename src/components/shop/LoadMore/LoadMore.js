import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LoadMore extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="loading-more">
                        <i className="icon_loading"></i>
                        <Link to="#">
                            Loading More
                        </Link>
                    </div>
            </React.Fragment>
        )
    }
}

export default LoadMore;
