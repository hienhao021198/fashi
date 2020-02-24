import React, { Component } from 'react'

class Price extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className="filter-widget">
                        <h4 className="fw-title">Price</h4>
                        <div className="filter-range-wrap">
                            <div className="range-slider">
                                <div className="price-input">
                                    <input type="text" id="minamount"/>
                                    <input type="text" id="maxamount"/>
                                </div>
                            </div>
                            <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                data-min="33" data-max="98">
                                <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                            </div>
                        </div>
                        <button className="filter-btn">Filter</button>
                    </div>
            </React.Fragment>
        )
    }
}

export default Price
