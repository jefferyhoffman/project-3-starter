import React, { Component, useState } from 'react';

function ProductCard() {
  const [cart, setCart] = useState(cartLocalAll);

  const addToCart = (product) => {
    setCart([...cart[0], product]);
  }

  return (
    <>
      <header><button>Go to Cart ({cart.length})</button>
      </header>
        <div className="" >
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <h4>{product.price}</h4>
              <div className="">
                <img src={product.img} alt={product.name} /></div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
    </>
  );
}

export default ProductCard;
