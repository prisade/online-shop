import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function ShopList(props) {

    const products = props.products

    // const toggle = () => setModal(!modal);
    return (
        <div>
            <h2>Store</h2>

            <CardGroup>
                {
                    products.map((product) => (
                        <Card key={product.id}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {product.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {product.category}
                                </CardSubtitle>
                                <CardText>
                                    {product.description}
                                </CardText>
                                <CardText>
                                    <small className="text-muted">
                                        {product.price}
                                    </small>
                                </CardText>
                                <Button>
                                    <Link className="nav-link" to={`/view-product/${product.id}`} style={{ color: 'white' }}>View Product</Link>
                                </Button>
                                <button className='btn btn-success'>
                                    <Link className="nav-link" to={`/update-product/${product.id}`} style={{ color: 'white' }}>Edit Product</Link>
                                </button>
                            </CardBody>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>
    )
}

export default ShopList
