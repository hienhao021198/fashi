import React, { Component } from 'react'

class Brand extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className="filter-widget">
                        <h4 className="fw-title">Brand</h4>
                        <div className="fw-brand-check">
                            <div className="bc-item">
                                <label for="bc-calvin">
                                    Calvin Klein
                                    <input type="checkbox" id="bc-calvin"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="bc-item">
                                <label for="bc-diesel">
                                    Diesel
                                    <input type="checkbox" id="bc-diesel"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="bc-item">
                                <label for="bc-polo">
                                    Polo
                                    <input type="checkbox" id="bc-polo"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="bc-item">
                                <label for="bc-tommy">
                                    Tommy Hilfiger
                                    <input type="checkbox" id="bc-tommy"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Brand
