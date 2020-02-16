import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="search-form">
                    <h4>Search</h4>
                    <form action="#">
                        <input type="text" placeholder="Search . . .  "/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
            </React.Fragment>
        )
    }
}
