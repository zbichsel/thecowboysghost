import React from 'react';
import Flickity from 'flickity';
import { useEffect, useRef } from 'react';
import 'flickity/css/flickity.css';
import './carousel.css';

import cloudOne from '../../images/z1.JPG';
import cloudTwo from '../../images/z2.JPG';
import cloudThree from '../../images/z3.JPG';
import cloudFour from '../../images/z4.JPG';
import cloudFive from '../../images/z5.JPG';
import cloudSix from '../../images/z6.JPG';



function Carousel() {

const carouselRef = useRef(null);

useEffect(() => {
    const flkty = new Flickity(carouselRef.current, {
        wrapAround: true,
    });

    return () => flkty.destroy();
}, []);

    return (
        <div className="gallery" ref={carouselRef}>
            <img className="gallery-cell" src={cloudSix} />
            <img className="gallery-cell" src={cloudFive} />
            <img className="gallery-cell" src={cloudFour} />
            <img className="gallery-cell" src={cloudThree} />
            <img className="gallery-cell" src={cloudTwo} />
            <img className="gallery-cell" src={cloudOne} />
        </div>
    )
}

export default Carousel;