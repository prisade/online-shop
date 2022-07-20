import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct(props) {

    const [prodId, setProdId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const onUpdate = props.onUpdate;

    let { id } = useParams(); // Unpacking and retrieve id

    const product = props.products;

    const singleProduct = product.filter((data) => data.id == id);

    useEffect(() => {
        // Update the document title using the browser API
        setProdId(singleProduct[0].id);
        setName(singleProduct[0].name);
        setPrice(singleProduct[0].price);
        setCategory(singleProduct[0].category);
        setDescription(singleProduct[0].description);
      }, 1000);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('please input fields');
            return
        }

        onUpdate({prodId,name,price,category,description});

        setName('');
        setPrice('');
        setCategory('');
        setDescription('');

        alert('Successfully updated!');
        
    }

  return (
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-group'>
            <label>Product Name</label>
            <input type='hidden' value={prodId}/>
            <input style={{width:'70%',margin:'auto'}} className='form-control' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Product Price</label>
            <input style={{width:'70%',margin:'auto'}} className='form-control' type='text' placeholder='Add Product Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Product Category</label>
            <input style={{width:'70%',margin:'auto'}} className='form-control' type='text' placeholder='Add Product Category' value={category} onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Product Description</label>
            <input style={{width:'70%',margin:'auto'}} className='form-control' type='text' placeholder='Add Product Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div><br/>
        <button type="submit" class="btn btn-primary">Update
        </button>
    </form>
  )
}

export default UpdateProduct
