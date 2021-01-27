import React from 'react'
import PropTypes from "prop-types";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { Link } from "react-router-dom"
import AddRemoveProduct from "./AddRemoveProduct"

const ProductInBasket = (product) => {
    console.log("product product", product.product.id)
    return (
        <section className="container">
            <div className="row text-left mb-5" key={product.product.id}>
                <div className="col-lg-7">
                    {console.log(product.product)}
                    <h3><Link title={product.product.title} to={`/product/${product.product.id}`} > {product.product.title}</Link>
                    </h3>
                    {product.product.title}{product.product.title}<br />

                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-2 border border-primary">
                    <span> <LoyaltyIcon className="mt-3 mx-auto" /> {product.product.title.length} euros</span>
                    <AddRemoveProduct
                        toBasket={product.product.id - 1}
                    />
                </div>
            </div>

        </section>
    );
}

ProductInBasket.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductInBasket