import React from 'react';

const Cart = ({cart}) => {
    //console.log(cart)
    const {img, name, id, price} = cart;
    let laptop = 0;
    for(const product of cart){
        //console.log(product.name)
        laptop = product.name
        
    
    }
    return (
        <div>
            
           <p>Wish List</p>

           {
            cart.map(product => laptop)        
            }
        </div>
    );
};

export default Cart;