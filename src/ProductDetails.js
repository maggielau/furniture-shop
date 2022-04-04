import { PlusSquare, MinusSquare } from './Icons';
import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export default function ProductDetails({addProducts}) {

    let { id } = useParams();
    const location = useLocation();
    const data = location.state?.data;

    const [qty, setQty] = useState(1);

    function increaseQty () {
        if (qty<98)
            setQty(prevQty => prevQty + 1);
    }

    function decreaseQty () {
        if (qty>1)
            setQty(prevQty => prevQty - 1);
    }

    return (
        <div className="productDetail">
            <h3>{data.title}</h3>
            <div className="productDetails">
                <img src={data.image} width="400px"/>
                <div className="productDetailsText">
                    <div className="productDesc">{data.description}</div>
                    <div className="product-price">${parseFloat(data.price).toFixed(2)}</div>
                    <div className="qty">
                        <div className="qtyButton" onClick={decreaseQty}>
                            <MinusSquare />
                        </div>
                        {qty}
                        <div className="qtyButton" onClick={increaseQty}>
                            <PlusSquare />
                        </div>
                    </div>
                    <button onClick={() => addProducts(qty, data)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}