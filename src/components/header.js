import React, { useState } from "react";
import { v4 as uuid } from "uuid";


export default function Header({ handleClick }) {
    return (
        <div className="header">
            <p><Link to="/">Home</Link></p>
            <ul>
                <li onClick={handleClick}>Men</li>
                <li onClick={handleClick}>Women</li>
            </ul>
            <p><Link to="/cart">Shopping Cart</Link></p>
        </div>
    )
}