import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Cart from "./components/cart";
import Home from "./components/home";


export default function Main() {
    const [cart, setCart] = useState([])
    const [page, setPage] = useState(0)
    const [type, setType] = useState(0)

    function addToCart(e) {
        const id = e.target.id

        setCart([
            ...cart,
            {
                productID: id,
                page: page
            }
        ])
    }

    function switchDisplay(e) {
        //update with proper variable
        let type = 0

        setType(type)
    }

    function switchPage(e) {
        let page = 0

        setPage(page)
    }





    return (
        <div>
            <Header handleClick={switchPage} />
            <Sidebar handleClick={switchPage} />
            <div id="content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart cartList={cart} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}