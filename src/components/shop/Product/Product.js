import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Product extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="col-lg-4 col-sm-6">
               
                    <div className="product-item">
                        <div className="pi-pic">
                         <Link to={`/detail-product/${this.props.id}`}>
                            <img src="img/products/product-2.jpg" alt="" /> </Link>
                            <div className="icon">
                                <i className="icon_heart_alt"></i>
                            </div>
                            <ul>
                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                        <div className="pi-text">
                            <div className="catagory-name">Coat</div>
                            <Link to="#">
                                <h5>Guangzhou sweater</h5>
                            </Link>
                            <div className="product-price">
                                $13.00
                                <span>$35.00</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}

export default Product
