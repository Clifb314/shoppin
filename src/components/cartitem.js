import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemDb from "./itemDB";

export default function CartItem({ productID, page }) {


    const dispItem = ItemDb[page].filter(item => item.id === productID).shift()

    const imgSrc = dispItem.icon

    


    return (
        <div className="cartRow">
            <img src={imgSrc} className="cartItem" />
            <p>{dispItem.desc}</p>
        </div>
    )
}