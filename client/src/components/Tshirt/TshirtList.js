import React, { useEffect, useState } from "react";
import { Tshirt } from "./Tshirt";
import API from "../../lib/API";


export const TshirtList = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        API.Products.getAllProducts().then(data => {
            setProducts(() => data.data)
        });
    },[])

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mw-100">
                {products.length > 0 ? 
                    products.map(item => (
                        <Tshirt id={item.id} name={item.product_name} description={item.product_description} image={item.product_img_one} price={item.price} key={item.id} />
                    )): null
                }
            </div>
        </div>
    )
}

