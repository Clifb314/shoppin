import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemDb from "./itemDB";

export default function ShopPage({ gender, type, handleClick }) {
  const display = ItemDb[gender].map((item) => {
    return <img src={item.icon} key={uuid()} onClick={handleClick} id={item.id} />;
  });

  return (
    <div className="shop">{ display }</div>
    );
}
