import React, { Component } from "react";
import GetData from "./GetData";
import Product from "./Product"

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params, }
    }
    render() {
        const { id } = this.state;
        return (
            <GetData productId={id.id} productTitle="">
                {(data) => <Product {...data} />}
            </GetData>
        )
    }
}

export default ProductDetail
