import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function Sidebar({ display, handleClick }) {
    let content
    if (display === 0) {
        content = (
            <div className="sidebar">
                <h1 className="sidehead">Men</h1>
                <ul>
                    <li onClick={handleClick}><Link to="/shop">Shirts</Link></li>
                    <li onClick={handleClick}>Jackets</li>
                    <li onClick={handleClick}>Shoes</li>
                    <li onClick={handleClick}>Suits</li>
                </ul>
            </div>
        )
    }

    if (display === 1) {
        content = (
            <div className="sidebar">
                <h1 className="sidehead">Women</h1>
                <ul>
                <li onClick={handleClick}>Dresses</li>
                <li onClick={handleClick}>Blazers</li>
                <li onClick={handleClick}><Link to="/shop">Skirts</Link></li>
                <li onClick={handleClick}>Shoes</li>
                </ul>
            </div>
        )
    }

    return (
        <div id="list">{content}</div>
    )
}