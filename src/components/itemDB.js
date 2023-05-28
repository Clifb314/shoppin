import React, { useState } from "react";
import { v4 as uuid } from "uuid";


const ItemDb = [
    //0 is mens, 1 is womens
    [
        //mens shirts
        {
            name: 'shirt 01',
            id: 'sh01',
            type: 'shirt',
            desc: 'a nice shirt',
            icon: '../utils/mens/shirts/1.jpg'
        },
        {
            name: 'shirt 02',
            id: 'sh02',
            type: 'shirt',
            desc: 'a nice shirt',
            icon: '../utils/mens/shirts/2.jpg'
        },
        {
            name: 'shirt 03',
            id: 'sh03',
            type: 'shirt',
            desc: 'maybe a less nice shirt',
            icon: '../utils/mens/shirts/3.jpg'
        },
        {
            name: 'shirt 04',
            id: 'sh04',
            type: 'shirt',
            desc: 'the best shirt',
            icon: '../utils/mens/shirts/4.jpg'
        } 
    ],

    [
        //womens skirts
        {
            name: 'skirt 01',
            id: 'sk01',
            type: 'skirt',
            desc: 'a skirt',
            icon: '../utils/womens/skirts/1.jpg'
        },
        {
            name: 'skirt 02',
            id: 'sk02',
            type: 'skirt',
            desc: 'a cuter skirt',
            icon: '../utils/womens/skirts/2.jpg'
        },        
        {
            name: 'skirt 03',
            id: 'sk03',
            type: 'skirt',
            desc: 'an ok skirt',
            icon: '../utils/womens/skirts/3.jpeg'
        },        
        {
            name: 'skirt 04',
            id: 'sk04',
            type: 'skirt',
            desc: 'the best skirt',
            icon: '../utils/womens/skirts/4.jpeg'
        },

        
    ]
]

export default ItemDb