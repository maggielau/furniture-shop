import React, { useState, useEffect } from 'react';


export default function Cart (props) {

    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        console.log("ran useEffect");
        if (isNaN(props.qty)===false)
            addProducts(parseInt(props.qty));      
    });

    function addProducts (x) {
        setTotalProducts(prevTotalProducts => prevTotalProducts + x);
    }
    
    return (
        <div>
            {totalProducts}
        </div>
    );

}