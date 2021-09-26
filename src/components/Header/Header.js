import React from 'react';
import '../Header.css';

const Header = () => {
    return (
        <div className="header">
           <h1>Computer <span className="programmer">Programmers</span></h1>  
           <p>Computer programmers write and test code that allows computer applications and software programs to function properly.Programmers usually work in offices, most commonly in the computer systems design and related services industry.The median annual wage for computer programmers was <span className="range">$89,190</span>  in May 2020.</p> 
        </div>
    );
};

export default Header;