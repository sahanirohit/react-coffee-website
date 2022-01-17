import React from 'react';
import {FaHome} from "react-icons/fa";

function Header() {
    return (
        <>
            {/* header section starts */}

            <header className="header">

                <a href="http://localhost:3000/" className="logo">
                    <img src="/images/logo.png" alt="" />
                </a>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#products">Products</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                    <a href="#blogs">Blogs</a>
                </nav>

                <div className="icons">
                    {/* <div className="fas fa-search" id="search-btn"></div> */}
                    <div className="fas fa-shopping-cart" id="cart-btn"></div>
                    <div className="fas fa-bars" id="menu-btn"></div>
                </div>

                <div className="search-form">
                    <input type="search" id="search-box" placeholder="search here..." />
                    <label for="search-box" className="fas fa-search"></label>
                </div>

                <div className="cart-items-container">
                    <div className="cart-item">
                        <span className="fas fa-times"></span>
                        <img src="/images/cart-item-1.png" alt="" />
                        <div className="content">
                            <h3>cart item 01</h3>
                            <div className="price">$15.99/-</div>
                        </div>
                    </div>
                    <div className="cart-item">
                        <span className="fas fa-times"></span>
                        <img src="/images/cart-item-2.png" alt="" />
                        <div className="content">
                            <h3>cart item 02</h3>
                            <div className="price">$15.99/-</div>
                        </div>
                    </div>
                    <div className="cart-item">
                        <span className="fas fa-times"></span>
                        <img src="/images/cart-item-3.png" alt="" />
                        <div className="content">
                            <h3>cart item 03</h3>
                            <div className="price">$15.99/-</div>
                        </div>
                    </div>
                    <div className="cart-item">
                        <span className="fas fa-times"></span>
                        <img src="/images/cart-item-4.png" alt="" />
                        <div className="content">
                            <h3>cart item 04</h3>
                            <div className="price">$15.99/-</div>
                        </div>
                    </div>
                    <a href="http://localhost:3000/" className="btn">checkout now</a>
                </div>

            </header>

            {/* header section ends */}
        </>
    );
}

export default Header;
