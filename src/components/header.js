import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";


export default function Header({ handleClick, items }) {
    return (
        <div className="header">
            <p><Link to="/">Home</Link></p>
            <ul>
                <li onClick={handleClick}>Men</li>
                <li onClick={handleClick}>Women</li>
            </ul>
            <p><Link to="/cart">Shopping Cart</Link></p>
            <p>{items}</p>
        </div>
    )
}