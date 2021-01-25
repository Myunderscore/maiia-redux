import React from 'react'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AddRemoveProduct from "./AddRemoveProduct"
import { Link } from "react-router-dom"

const ProductInBasket = (product) => {
console.log(product)
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
                    <AddRemoveProduct />
                </div>
            </div>
        </section>
    );
}


export default ProductInBasket