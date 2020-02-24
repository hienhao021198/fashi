import React, { Component } from 'react'
const itemsBrand = [
    {
        id: 'bc-calvin',
        name: 'Calvin Klein'
    },
    {
        id: 'bc-diesel',
        name: 'Diesel'
    },
    {
        id: 'bc-polo',
        name: 'Polo'
    },
    {
        id: 'bc-tommy',
        name: ' Tommy Hilfiger'
    },


];
class Brand extends Component {
    showItemsBrand = (itemsBrand) => {
        let result = null;
        if (itemsBrand.length > 0) {
            result = itemsBrand.map((itemBrand, index) => {
                return (
                    <div className="bc-item">
                        <label for={itemBrand.id}>
                            {itemBrand.name}
                            <input type="checkbox" id={itemBrand.id} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                );
            });

        }
        return result;
    }
    render() {

        return (
            <React.Fragment>
                <div className="filter-widget">
                    <h4 className="fw-title">Brand</h4>
                    <div className="fw-brand-check">
                        {this.showItemsBrand(itemsBrand)}

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Brand
