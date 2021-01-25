import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from "../actions"
import GetData from "./GetData"
import ProductInBasket from "./ProductInBasket"

class Basket extends Component {
    render() {
        const { basket } = this.props;

        return (
            <section>
                <div className="container my-3">
                    <h1 >My basket !</h1>
                </div>
                <div>
                    {basket.map(item => (
                        <GetData productId="" productTitle="">
                            {(data) => <ProductInBasket product={data[item]} />}
                        </GetData>
                    ))}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentification.isLoggedIn,
        basket: state.counter.basket
    }
}

export default connect(mapStateToProps, actions)(Basket)

