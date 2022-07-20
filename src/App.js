import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopList from './components/ShopList';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import UpdateProduct from './components/UpdateProduct';
import Cart from './components/Cart';

function App() {

    //product list props
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Sample Product',
            price: '100',
            category: 'test category',
            description: 'sample description'
        },
        {
            id: 2,
            name: 'Sample Product 2',
            price: '150',
            category: 'test category2',
            description: 'sample description2'
        },
        {
            id: 3,
            name: 'Sample Product 3',
            price: '200',
            category: 'test category3',
            description: 'sample description3'
        },

    ]);

    const [cartItems, setCartItems] = useState([]);

    //add product

    const addProduct = (product) => {
        const id = Math.floor(Math.random() * 1000) + 1;

        const newProduct = { id, ...product }

        setProducts([...products, newProduct])
    }

    //update product
    const updateProduct = (productUpdated) => {
        const id = productUpdated.prodId;
        // const getProduct = products.map((data) => data.id == id);

        setProducts(products.map((product) => product.id === id ? productUpdated : products))
    }

    //getCart
    const getItemCart = (cartAdded) => {
        
        setCartItems([...cartItems, cartAdded])
    }

    return (
        <Router>
            <div className="App">
                <Header title={'Header'} />
                <Routes>
                    <Route path='/' element={<ShopList products={products} />} />
                    <Route path='/add-product' element={<AddProduct onAdd={addProduct} />} />
                    <Route path='/view-product/:id' element={<ViewProduct products={products} getCart={getItemCart}/>} />
                    <Route path='/update-product/:id' element={<UpdateProduct products={products} onUpdate={updateProduct} />} />
                    <Route path='/cart' element={<Cart cartList={cartItems} />} />
                </Routes>
            </div>
            <Footer title={'Footer'} />
        </Router>
    );
}

export default App;
