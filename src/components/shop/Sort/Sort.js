import React, { Component } from 'react'

export class Sort extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="select-option">
                    <select className="sorting">
                        <option value="">Default Sorting</option>
                    </select>
                    <select className="p-show">
                        <option value="">Show:</option>
                    </select>
                </div>
            </React.Fragment>
        )
    }
}

export default Sort;
