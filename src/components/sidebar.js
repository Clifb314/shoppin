import React, { useState } from "react";
import { v4 as uuid } from "uuid";


export default function Sidebar({ display }) {
    let content
    if (display === 0) {
        content = (
            <div className="sidebar">
                <h1 className="sidehead">Men</h1>
                <ul>
                    <li>Shirts</li>
                    <li>Jackets</li>
                    <li>Shoes</li>
                    <li>Suits</li>
                </ul>
            </div>
        )
    }

    if (display === 1) {
        content = (
            <div className="sidebar">
                <h1 className="sidehead">Women</h1>
                <ul>
                <li>Dresses</li>
                <li>Blazers</li>
                <li>Skirts</li>
                <li>Shoes</li>
                </ul>
            </div>
        )
    }

    return (
        {content}
    )
}