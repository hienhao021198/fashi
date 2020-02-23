import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const tags = [
    {
        id: 1,
        name: 'Towel'
    },
    {
        id: 2,
        name: 'Shoes'
    },
    {
        id: 3,
        name: 'Coat'
    },
    {
        id: 4,
        name: 'Dresses'
    },
    {
        id: 5,
        name: 'Trousers'
    },
    {
        id: 6,
        name: "Men's hats"
    },
    {
        id: 7,
        name: 'Backpack'
    },
];
class Tags extends Component {
     showTags = (tags) => {
            let result = null;
            if(tags.length > 0) {
                result = tags.map((tag, index) => {
                    return (
                        <Link to="#" key={index}>{tag.name}</Link>
                    );
                });
            }
            return result;
        }
    render() {
       
        return (
            <React.Fragment>
                <div className="filter-widget">
                        <h4 className="fw-title">Tags</h4>
                        <div class="fw-tags">
                            {this.showTags(tags)}
                            
                        </div>
                    </div>
                
            </React.Fragment>
        )
    }
}

export default Tags
