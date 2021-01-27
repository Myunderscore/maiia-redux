import React from 'react'
import PropTypes from "prop-types";
import AddRemoveProduct from "./AddRemoveProduct"

const Product = (product) => {
    return (
        <div className="container my-5">
            <h4>Detail of the product</h4>
            <div className="row pr-3 ">
                <div className="col-lg-8">
                    <h2>{product[0].title.charAt(0).toUpperCase() + product[0].title.slice(1)}</h2>
                    <p className="font-weight-bold text-uppercase">
                        {product[0].title}{product[0].title}{product[0].title}
                    </p>

                    <p className="">{product[0].title}{product[0].title}{product[0].title}
                        {product[0].title}{product[0].title}
                    </p>
                    <p className="text-primary">
                        {product[0].title}{product[0].title}{product[0].title}
                    </p>
                </div>
                <div className="col-lg-1">
                </div>
                <div className="col-lg-3">
                    <img src={product[0].thumbnailUrl} alt={product[0].title}
                        className="w-100 mb-3" />
                    <div className="font-weight-bold mb-5">
                        Price: {product[0].title.length} euros.
                    </div>
                    <div className="border border-primary mb-5 text-center" >
                        <AddRemoveProduct toBasket={product[0].id} />
                    </div>

                </div>
            </div>
        </div>
    )
}


Product.propTypes = {
    product: PropTypes.object.isRequired,
};


export default Product