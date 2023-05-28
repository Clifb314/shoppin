import React, { useState } from "react";
import { v4 as uuid } from "uuid";


export default function Header() {
    return (
        <div className="header">
            <p><Link to="/">Home</Link></p>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
            </ul>
            <p><Link to="/cart">Shopping Cart</Link></p>
        </div>
    )
}