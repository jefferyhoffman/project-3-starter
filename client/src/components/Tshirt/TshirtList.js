import React from "react";
import { Cart } from "../Cart/Cart";
import { Tshirt } from "./Tshirt";

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
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mw-100">
                {
                    database.map(item => (
                        <Tshirt id={item.id} name={item.name} description={item.description} image={item.image} price={item.price} key={item.id} />
                    ))
                }
                {/* <Cart /> */}
            </div>
        </div>
    )
}

