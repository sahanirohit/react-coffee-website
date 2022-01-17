import React from 'react'

function Products() {
    return (
        <>
        {/* Product section starts */}
            <section class="products" id="products">

<h1 class="heading"> our <span>products</span> </h1>

<div class="box-container">

    <div class="box">
        <div class="icons">
            <a href="http://localhost:3000/" class="fas fa-shopping-cart"></a>
            <a href="http://localhost:3000/" class="fas fa-heart"></a>
            <a href="http://localhost:3000/" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src="/images/product-1.png" alt="" />
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="http://localhost:3000/" class="fas fa-shopping-cart"></a>
            <a href="http://localhost:3000/" class="fas fa-heart"></a>
            <a href="http://localhost:3000/" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src="/images/product-2.png" alt="" />
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="http://localhost:3000/" class="fas fa-shopping-cart"></a>
            <a href="http://localhost:3000/" class="fas fa-heart"></a>
            <a href="http://localhost:3000/" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src="/images/product-3.png" alt="" />
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

</div>

</section>
{/* Product section ends */}
        </>
    )
}

export default Products;
