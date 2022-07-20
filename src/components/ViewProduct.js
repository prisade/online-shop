import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewProduct(props) {

    const [prodName, setProdName] = useState('');
    const [prodPrice, setProdPrice] = useState('');

    let { id } = useParams(); // Unpacking and retrieve id

    const product = props.products;

    const singleProducut = product.filter((data) => data.id == id);

    useEffect(() => {
        // Update the document title using the browser API
        setProdName(singleProducut[0].name);
        setProdPrice(singleProducut[0].price)
      }, 1000);

    const getCartItem = props.getCart;

    const onAddToCart = (e) => {
        e.preventDefault();

        getCartItem({prodName,prodPrice});
    }

    return (
        <div>
            <h2>Single Product</h2>

            <div className='row'>
                <div className='col-md-6'>
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                </div>
                <div className='col-md-6'>
                    <h2>Product Name: {singleProducut[0].name}</h2>
                    <h3>Price: {singleProducut[0].price}</h3>
                    <h4>Category: {singleProducut[0].category}</h4>
                    <p>Description: {singleProducut[0].description}</p><br/><br/>

                    <button className='btn btn-success' onClick={onAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct
