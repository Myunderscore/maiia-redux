import React, { Component } from 'react'
import GetData from "./GetData"
import CardProduct from "./CardProduct"

export default class ProductsList extends Component {
    render() {
        return (
            <GetData>
                {(data) => data
                    .map(item => <CardProduct {...item} />)}
            </GetData>
        )
    }
}
