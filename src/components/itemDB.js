import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function importAll(r) {
    return r.keys().map(r);
  }
  
const shirts = importAll(require.context('../utils/mens/shirts', false, /\.(png|jpe?g|svg)$/));

const skirts = importAll(require.context('../utils/womens/skirts', false, /\.(png|jpe?g|svg)$/));

const ItemDb = [
    //0 is mens, 1 is womens
    [
        //mens shirts
        {
            name: 'shirt 01',
            id: 'sh01',
            type: 'shirt',
            desc: 'a nice shirt',
            icon: shirts[0]
        },
        {
            name: 'shirt 02',
            id: 'sh02',
            type: 'shirt',
            desc: 'a nice shirt',
            icon: shirts[1]
        },
        {
            name: 'shirt 03',
            id: 'sh03',
            type: 'shirt',
            desc: 'maybe a less nice shirt',
            icon: shirts[2]
        },
        {
            name: 'shirt 04',
            id: 'sh04',
            type: 'shirt',
            desc: 'the best shirt',
            icon: shirts[3]
        } 
    ],

    [
        //womens skirts
        {
            name: 'skirt 01',
            id: 'sk01',
            type: 'skirt',
            desc: 'a skirt',
            icon: skirts[0]
        },
        {
            name: 'skirt 02',
            id: 'sk02',
            type: 'skirt',
            desc: 'a cuter skirt',
            icon: skirts[1]
        },        
        {
            name: 'skirt 03',
            id: 'sk03',
            type: 'skirt',
            desc: 'an ok skirt',
            icon: skirts[2]
        },        
        {
            name: 'skirt 04',
            id: 'sk04',
            type: 'skirt',
            desc: 'the best skirt',
            icon: skirts[3]
        },

        
    ]
]

export default ItemDb