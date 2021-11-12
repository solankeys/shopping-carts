import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Nabvar.css';

function Navbar() {
    return (
        <div className="navbar">
            <nav className="nav-wrapper">
                <div className="top"></div>
                <div className="navbar-container">
                    <Link className="brand-logo" to="">Shopping</Link>
                    <ul className="navbar-ul">
                        <li><Link to="">Shop</Link></li>
                        <li><Link to="">My cart</Link></li>
                        <li><Link to=""><AiOutlineShoppingCart  size="30px"/></Link></li>
                    </ul>
                </div>
                <div className="bottom"></div>

            </nav>
            
        </div>
    )
}

export default Navbar
