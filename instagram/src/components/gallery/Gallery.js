import React from 'react'
import { useState } from 'react'
import gallery from '../gallery/gallery.css'

import img1 from '../Images/img1.png'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'
import img7 from '../Images/img7.jpg'
import img8 from '../Images/img8.jpg'


const Gallery = () => {
    const photos = [
        { id: 1, img: img1, name: "pournima" },
        { id: 2, img: img2, name: "Yuvraj" },
        { id: 3, img: img3, name: "Gaikwad" },
        { id: 4, img: img4, name: "Rohit" },
        { id: 5, img: img5, name: "Ramesh" },
        { id: 6, img: img6, name: "Jagtap" }
    ]

    return (
        <div className="pop_up">
            {photos.map((pic) =>
                <div className="data" key={pic.id}>
                <div className="image">
                    <img id='images' src={pic.img} alt="Not Found" />
                </div>
                    <span id='imgName' >{pic.id}</span>
                </div>
                )}
        </div>
    )
}

export default Gallery