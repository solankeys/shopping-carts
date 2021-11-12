import React from 'react';
import './Home-Page.css';
import Navbar from '../Components/Navbar';
import CartItems from './CartItems';
import { AiOutlinePlus } from 'react-icons/ai';

function HomePage() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <h1 className="home-header"> Our Items </h1>
            <div className="card-wrapper">
                {CartItems.map((items) => {
                    const { images, brand_name, description, price } = items;
                    return <div  className="card">
                        <div className="card-image">
                            <img src={images} alt="product" />
                            <p>{brand_name}</p>
                        </div>
                        <button><AiOutlinePlus /></button>
                        <div className="card-content">
                            <p>{description}</p>
                            <b>Price:{price}$</b>
                        </div>
                        </div>
                })}
                <div className="img-wrapper">
                    <img />
                </div>
                
           </div>
        </div>
    )
}

export default HomePage;
