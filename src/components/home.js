import React, { useState } from "react";
import { v4 as uuid } from "uuid";


export default function Home() {
    return (
        <div className="home">
            <h1>Welcome!</h1>
            <p>What are you shopping for today?</p>
        </div>
    )
}