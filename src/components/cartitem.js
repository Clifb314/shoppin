import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemDb from "./itemDB";

export default function CartItem({ productID, page }) {


    const dispItem = ItemDb[page].filter(item => item.id = productID)

    const imgSrc = dispItem.icon

    


    return (
        <div className="cartRow">
            <img src={imgSrc} className="cartItem" />
        </div>
    )
}