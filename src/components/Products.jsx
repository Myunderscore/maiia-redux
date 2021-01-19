import React, { Component } from 'react'

class Products extends Component {
    render() {
        return (
            <div className="container my-3">
                <h1>Our product</h1>
                <h3>{this.props.match.params.id}</h3>
            </div>
        )
    }
}

export default Products