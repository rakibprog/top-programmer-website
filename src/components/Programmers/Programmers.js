import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Programmers.css'
const Programmers = () => {
    const [programmer, setProgrammer] = useState([]); 
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data=> setProgrammer(data))
    },[]);

    const handleProgrammer = (pro) => {
        const newCart = [...cart,pro];
        setCart(newCart);
    }
    return (
        <div className="programmers-container">
            <div className="programmers-content">
                {programmer.map(programmer=> <Programmer programmer={programmer} key={programmer.index} handleProgrammer ={handleProgrammer}></Programmer>  )} 
            </div>
            <div className="programmers-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Programmers;