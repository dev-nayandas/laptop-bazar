import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, id, price} = props.product;
    return (
        <div className='product'>
            <img src ={img} alt = ""></img>
            <div>
                <p>ID:{id} </p>
                <h2> Name: {name}</h2>
                <small>Price: {price}$</small>
            </div>
            <button className='btn-cart'>
               <p> Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;