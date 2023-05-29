import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Cart from "./components/cart";
import Home from "./components/home";
import ShopPage from "./components/shopPage";

export default function Main() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [type, setType] = useState(0);

  function addToCart(e) {
    const id = e.target.id;

    setCart([
      ...cart,
      {
        productID: id,
        page: type,
      },
    ]);

    console.log(cart)
  }

  function switchDisplay(e) {
    //update with proper variable
    let type = e.target.textContent === "Men" ? 0 : 1;

    setType(type);
  }

  function switchPage(e) {
    let page = 1;

    while (e.target.previousElementSibling) {
      page++;
    }

    setPage(page);
  }

  return (
    <div id="content">
      <BrowserRouter>
        <Header handleClick={switchDisplay} items={cart.length} />
        <Sidebar display={type} handleClick={switchPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart cartList={cart} />} />
          <Route
            path="/shop"
            element={
              <ShopPage gender={type} type={page} handleClick={addToCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
