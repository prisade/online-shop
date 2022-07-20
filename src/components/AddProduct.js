import React, { useState } from 'react';

function AddProduct(props) {
    //State for adding product

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const onAdd = props.onAdd;

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('please input fields');
            return
        }

        onAdd({name,price,category,description});

        setName('');
        setPrice('');
        setCategory('');
        setDescription('');

        alert('Successfully added!');
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-group'>
            <label>Product Name</label>
            <input style={{width:'70%',margin:'auto'}} className='form-control' type='text' placeholder='Add Product Name' value={name} onChange={(e) => setName(e.target.value)}/>
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
        <button type="submit" class="btn btn-primary">Save</button>
    </form>
  )
}

export default AddProduct
