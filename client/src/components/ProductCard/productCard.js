import React, { Component, useState } from 'react';

// class ProductCard extends Component {

  function ProductCard() {
  const [cart, setCart] = useState([]);

  const [products] = useState([
    {
      id: 1,
      name: "N-95 Mask",
      price: "$2.99",
      img: "https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png",
    },
    {
      id: 2,
      name: "Blanket",
      price: "$12.99",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsdTrCiX9hLLQ9Aze_L3yxWZDMgiRQMkeWVynbaQHEYslaaDsiLVmkGDVzmD7svKiHmJUURgk&usqp=CAc",
    }

  ])

  const addToCart = (product) => {
    setCart([...cart, product]);

  }
  return (
    <>
    <header><button>Go to Cart {cart.length}</button> 
      </header>
      <div className="card">
      
     
      <div className="contentBx" >
    {products.map((product) => (
      <div key={product.id}>
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      <div className="imgBx">
      <img  src={product.img} alt={product.name} /></div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
    
      </div>
    </div>
    </>
  );
}

export default ProductCard;


//   render() {

//     return (

//         <div className="card">
//             <div className="imgBx">
//                 <img src="https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png" alt="n-95"/>
//             </div>

//             <div className="contentBx">

//                 <h2>N-95 Mask</h2>
//                 <p>item description</p>
//                 <a href="#">Add to Cart</a>
//             </div>

//         </div>


//     )
//   }
// }

// export default ProductCard;