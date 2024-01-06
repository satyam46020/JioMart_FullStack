
import React from 'react'
import { useState, useEffect } from 'react';
import "./imgslid.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagesslidershop from './Imagesslider1';
const Imagesslider = () => {

    return(
        <div>
            
             <Imagesslidershop url="http://localhost:7000/imagesslider"/>
        </div>
    )
}


export default Imagesslider
