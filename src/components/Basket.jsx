import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from "../actions"
import GetData from "./GetData"
import ProductInBasket from "./ProductInBasket"



class Basket extends Component {
    render() {
        const { basket } = this.props;
        let price = 0;
        return (
            <section>
                <div className="container my-3">
                    <h1 >My basket !</h1>
                </div>
                <div>
                    {basket.map(item => (
                        <GetData productId="" productTitle="" key={item}>
                            {(data) => <ProductInBasket
                                product={data[item]}
                            />}
                        </GetData>

                    ))}

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8"></div>
                        <div className="col-lg-4">
                            <p className="font-weight-bold">Total amount</p>
                            <p>

                                {Array.from(basket.map(item => (
                                    <GetData
                                        productId=""
                                        productTitle=""
                                        key={item}>
                                        {(data) => price += data[item].title.length}
                                    </GetData>
                                ))).pop() || "0"} euros.
                            </p>
                        </div>
                    </div>
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

