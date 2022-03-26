import React from 'react';

const Cart = ({cart}) => {
    //console.log(cart)
    let n = 0;
    for(const product of cart){
        console.log(product.name)
        n = product.name
        
    
    }
    return (
        <div>
           <p>Wish List</p>
            <p>Favorite Laptop: {n}</p>
        </div>
    );
};

export default Cart;