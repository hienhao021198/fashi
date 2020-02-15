import React, { Component } from 'react'
import { BrowserRouter as  Link} from 'react-router-dom';
export class BreacrumbSection extends Component {
    render() {
        return (
            <div>
                <div className="breacrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-text">
                                    <Link to="/"> <i className="fa fa-home"></i> Home</Link> >  &nbsp;
                                    <span>Login</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreacrumbSection

