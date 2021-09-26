import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props);
    let total = 0;
    let names = '';
    for(const programmer of props.cart){
        total = total + programmer.salary;
         names =  names + programmer.name;
    }
    const value = <h4>{names}</h4>;
    return (
        <div className="cart">
            <div className="cart-content">
                <h2>Programmer Cart</h2>
                <h4>Total Programmer: {props.cart.length}</h4>
                <p><strong>Total Salary: {total}</strong></p>
                <div className="programmer-info">
                    { value }
                </div>
            </div>
        </div>
    );
};

export default Cart;