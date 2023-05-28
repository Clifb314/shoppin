import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import CartItem from "./cartitem";

export default function Cart({ cartList }) {


    let display = cartList.map(item => {
        return (
            <CartItem productID={item.id} page={item.page} key={uuid()} />
        )
    })

    return (
        <div className="fullCart">
            {display}
        </div>
    )
}