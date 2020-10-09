import React, { useEffect, useState } from "react";
import { Cart } from "../Cart/Cart";
import { Tshirt } from "./Tshirt";
import API from "../../lib/API";

export const TshirtList = () => {
    const database = [
        {
            name: "FM",
            description: "Cloth surgical masks - 50 count",
            price: 9.95,
            image: "https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png",
            id: 1
        },
        {
            name: "Gloves",
            description: "Disposable latex gloves - 100 count",
            price: 24.95,
            image: "https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png",
            id: 2
        },
        {
            name: "DW",
            description: "Ethyl alcohol wipes - 100 count",
            price: 7.95,
            image: "https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png",
            id: 3
        },
        // {
        //     name: "Disinfecting wipes",
        //     description: "Ethyl alcohol wipes - 100 count",
        //     price: 7.95,
        //     image: "https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png",
        //     id: 3
        // }
    ]

    const [products, setProducts] = useState([])

    useEffect(() => {
        API.Products.getAllProducts().then(data => {
            console.log(data.data)
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
                {/* <Cart /> */}
            </div>
        </div>
    )
}

