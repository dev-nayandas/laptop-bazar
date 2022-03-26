import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    const {handaleAddCart} = props;

    const {img, name, id, price} = props.product;
    return (
        <div className='product'>
            <img src ={img} alt = ""></img>
            <div>
                <p>ID:{id} </p>
                <h2> Name: {name}</h2>
                <small>Price: {price}$</small>
            </div>
            <button onClick={ () =>props.handaleAddCart(props.product)} className='btn-cart'>
               <p className='for-space'> Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;