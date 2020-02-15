import React, { Component } from 'react'

class Color extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="filter-widget">
                        <h4 className="fw-title">Color</h4>
                        <div className="fw-color-choose">
                            <div className="cs-item">
                                <input type="radio" id="cs-black"/>
                                <label className="cs-black" for="cs-black">Black</label>
                            </div>
                            <div className="cs-item">
                                <input type="radio" id="cs-violet"/>
                                <label className="cs-violet" for="cs-violet">Violet</label>
                            </div>
                            <div className="cs-item">
                                <input type="radio" id="cs-blue"/>
                                <label className="cs-blue" for="cs-blue">Blue</label>
                            </div>
                            <div className="cs-item">
                                <input type="radio" id="cs-yellow"/>
                                <label className="cs-yellow" for="cs-yellow">Yellow</label>
                            </div>
                            <div className="cs-item">
                                <input type="radio" id="cs-red"/>
                                <label className="cs-red" for="cs-red">Red</label>
                            </div>
                            <div className="cs-item">
                                <input type="radio" id="cs-green"/>
                                <label className="cs-green" for="cs-green">Green</label>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Color
