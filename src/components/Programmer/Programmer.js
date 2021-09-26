import React from 'react';
import './Programmer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown,faAddressBook,faBlenderPhone,faFileAlt} from '@fortawesome/free-solid-svg-icons'
const Programmer = (props) => {
    const cart = <FontAwesomeIcon icon={faCartArrowDown} />
    const book = <FontAwesomeIcon icon={faAddressBook} />
    const phone = <FontAwesomeIcon icon={faBlenderPhone} />
    const signal = <FontAwesomeIcon icon={faFileAlt} />
    const {img,name,creator,salary,designation} = props.programmer;
    return (
        <div className="programmer-grid">
            <div className="programmer-items">
                <div className="image-cont">
                    <img src={img} alt="" />            
                </div>
                    <h3 id="name">{name}</h3>
                    <h4 id="designation">{designation}</h4>  
                    <h4 id="creator">Creator: <span>{creator}</span></h4> 
                    <h4 id="salary">Salary:${salary}</h4>
                    <ul id="icon">
                        <li><a href=".">{book}</a></li>
                        <li><a href=".">{phone}</a></li>
                        <li><a href=".">{signal}</a></li>                       
                    </ul>
                    <button onClick={()=> props.handleProgrammer(props.programmer)}>{cart} Add To Cart</button> 
            </div>
        </div>
    );
};

export default Programmer;