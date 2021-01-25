import React from 'react'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AddRemoveProduct from "./AddRemoveProduct"
import { Link } from "react-router-dom"

const CardProduct = (data) => {

    return (
        <div className="row text-left mb-5" key={data.id}>
            <div className="col-lg-2">
                <span className="w-100">
                    <img src={data.thumbnailUrl} alt={data.title} />
                </span>
            </div>
            <div className="col-lg-10">
                <h3><Link title={data.title} to={`/product/${data.id}`} > {data.title}</Link>

                </h3>
                {data.title}{data.title}<br />
                {data.title}{data.title}{data.title}

                <div className="mx-auto mt-2 align-middle">
                    <AddShoppingCartSharpIcon
                        className="buttonEffect p-1"
                        style={{ width: "2.2rem", height: "2.2rem" }} />
                    <AddRemoveProduct toBasket={data.id} />
                    <span> <LoyaltyIcon /> {data.title.length} euros</span>

                </div>
            </div>
        </div>
    );
}


export default CardProduct