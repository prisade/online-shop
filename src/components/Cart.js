import React, { useState, useEffect } from 'react';

function Cart(props) {
    let cartList = props.cartList;
    
    const [quantity, setQuantiy] = useState('1');

    const getQuantity = (index, value) => {
        const rowQuantity = [];

        rowQuantity[index] = setQuantiy(value);
    }

    return (
        <div>
            <h2>Cart</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.length > 0 ?
                            cartList.map((data, i) =>
                                <tr key={i}>
                                    <td>{data.prodName}</td>
                                    <td>{data.prodPrice}</td>
                                    <td><input className='form-control' value={quantity}  onChange={(e) => getQuantity(i,e.target.value)} /></td>
                                    <td>{quantity * data.prodPrice}</td>
                                </tr>
                            ) :
                            'No item added to the cart'
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cart
