import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import GetData from "./GetData"
import CardProduct from "./CardProduct"


class ProductsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productsPage: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            currentPage: 1,
            active: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id),
            products: ""
        });
    }

    render() {
        const { value, products } = this.props;
        const { productsPage, currentPage, } = this.state;



        console.log(value)
        return (
            <section>
                <h5 className="font-weight-bold text-primary mb-3">
                    Products {currentPage * 15 - 14} to {currentPage * 15} on 150
                </h5>
                <GetData productId="" productTitle={products}>
                    {(data) => data
                        .slice(currentPage * 15 - 15, currentPage * 15)
                        .map(item => <CardProduct {...item} key={item.id} />)}
                </GetData>
                <ul className="list-inline text-center">
                    {productsPage.map((order) =>
                        <li
                            className={`btn btn-primary list-inline-item ${currentPage === Number(order) ? "active" : ""}`}
                            key={order}
                            onClick={this.handleClick}
                            id={order}
                        >
                            {order}
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        value: state.search.value
    }
}

ProductsList.propTypes = {
    value: PropTypes.string
};

export default connect(mapStateToProps)(ProductsList);