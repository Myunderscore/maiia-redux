import React from 'react'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';

const CardProduct = (data) => {

    return (
        <div className="row text-left mb-5">
            <div className="col-lg-2">
                <span className="w-100">
                    <img src={data.thumbnailUrl} alt={data.title} />
                </span>
            </div>
            <div className="col-lg-10"><h3>{data.title}</h3>
                {data.title}{data.title}<br />
                {data.title}{data.title}{data.title}
                <div className="mx-auto mt-2">
                    <AddShoppingCartSharpIcon style={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    );
}


export default CardProduct