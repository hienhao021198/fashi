import React, { Component } from 'react'

class Size extends Component {
    render() {
        return (
           <React.Fragment>
                <div className="filter-widget">
                        <h4 className="fw-title">Size</h4>
                        <div className="fw-size-choose">
                            <div className="sc-item">
                                <input type="radio" id="s-size"/>
                                <label for="s-size">s</label>
                            </div>
                            <div className="sc-item">
                                <input type="radio" id="m-size"/>
                                <label for="m-size">m</label>
                            </div>
                            <div className="sc-item">
                                <input type="radio" id="l-size"/>
                                <label for="l-size">l</label>
                            </div>
                            <div className="sc-item">
                                <input type="radio" id="xs-size"/>
                                <label for="xs-size">xs</label>
                            </div>
                        </div>
                    </div>
           </React.Fragment>
        )
    }
}

export default Size
